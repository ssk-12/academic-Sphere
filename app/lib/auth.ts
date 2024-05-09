import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import { serverClient } from './apollo-server';
import { FIND_USER_BY_EMAIL_QUERY, CREATE_USER_MUTATION } from './graphql-operations';
import { NextApiRequest, NextApiResponse } from 'next';

const verifyPassword = async (userPassword: string, inputPassword: string): Promise<boolean> => {
  console.log("check user pass")
  console.log(inputPassword, userPassword)
  return bcrypt.compare(inputPassword, userPassword);
};

const createUser = async (email: string, password: string, name: string) => {
  console.log("create user")
  const password_hash = bcrypt.hashSync(password, 10);
  const { data } = await serverClient.mutate({
    mutation: CREATE_USER_MUTATION,
    variables: {
      email,
      password: password_hash,
      name
    }
  });
  if (data.insert_users_one) {
    return {
      id: data.insert_users_one.id,
      email: data.insert_users_one.email
    };
  }
  return null;
};

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        name: { label: "Name", type: "text", placeholder: "Not compulsory for signin" },
        email: { label: "Email", type: "email", required: true },
        password: { label: "Password", type: "password", required: true }
      },
      authorize: async (credentials) => {
        if (!credentials) return null;

        console.log(credentials.email, "user im")

        const { data } = await serverClient.query({
          query: FIND_USER_BY_EMAIL_QUERY,
          variables: { email: credentials.email },
          fetchPolicy: 'network-only'
        });

        console.log(data)

        const user = data.users[0];

        if (!user) {
          console.log("creating user");
          return await createUser(credentials.email, credentials.password, credentials.name);
        } else {
          if (await verifyPassword(user.password || '', credentials.password)) {
            console.log("verified");
            
            return { id: user.id, name: user.name, email: user.email };
          }
          return null;
        }
      }
    })
  ],
  callbacks: {
    session: async ({ session, token }) => {
      if (token && session.user) {
        session.user.id = token.sub as string;
      }
      return session;
    },
    jwt: async ({ token, user }) => {
      if (user) {
        token.sub = user.id;
      }
      return token;
    }
  },
  secret: process.env.JWT_SECRET,
};

const authHandler = (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, authOptions);

export default authHandler;
