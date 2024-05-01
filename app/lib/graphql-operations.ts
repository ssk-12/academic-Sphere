import { gql } from '@apollo/client';

export const FIND_USER_BY_EMAIL_QUERY = gql`
  query FindUserByEmail($email: String!) {
    users(distinct_on: email, where: {email: {_eq: $email}}) {
      id
      name
      email
      password
    }
  }
`;

export const CREATE_USER_MUTATION = gql`
  mutation insert_user($email: String!, $password: String!, $name: String) {
    insert_users_one(object: {
      email: $email,
      password: $password,
      name: $name
    }) {
      id
      email
      name
    }
  }
`;