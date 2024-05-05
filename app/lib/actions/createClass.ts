"use server"
import { serverClient } from "@/app/lib/apollo-server";
import { CREATE_CLASS_MUTATION } from "@/app/lib/graphql-operations";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";



export async function createClass({name, subject}:any) {
    const session = await getServerSession(authOptions);
    if (!session?.user || !session.user?.id) {
        return {
            message: "Unauthenticated request"
        }
    }

    const res = await serverClient.mutate({
        mutation: CREATE_CLASS_MUTATION,
        variables: { host_id: session?.user.id, name, subject },
        fetchPolicy: "network-only"
    });

    const cls = res.data?.insert_classes_one.id || "";
    console.log(res);
    console.log(cls);
    

    return cls;
}
