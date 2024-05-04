"use server"
import { serverClient } from "@/app/lib/apollo-server";
import { FETCH_USER_CLASSES } from "@/app/lib/graphql-operations";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";



export async function fetchClass() {
    const session = await getServerSession(authOptions);
    if (!session?.user || !session.user?.id) {
        return {
            message: "Unauthenticated request"
        }
    }

    const res = await serverClient.mutate({
        mutation: FETCH_USER_CLASSES,
        variables: { id: session?.user.id },
        fetchPolicy: "network-only"
    });

    const classes = res.data.users[0].classes;
    // console.log(classes);

    return classes;
}


// export async function fetchClass() {
//     const session = await getServerSession(authOptions);
//     if (!session?.user || !session.user?.id) {
//         return {
//             message: "Unauthenticated request"
//         }
//     }

//     const res = await serverClient.query({
//         query: FETCH_USER_CLASSES,
//         variables: { id: session?.user.id }
//     });

//     const classes = res.data.users[0].classes;
//     console.log(classes);

//     return classes;
// }