"use server"
import { serverClient } from "@/app/lib/apollo-server";
import { ENROLL_INTO_CLASS } from "@/app/lib/graphql-operations";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";



export async function enrollClass({class_id}:any) {
    const session = await getServerSession(authOptions);
    if (!session?.user || !session.user?.id) {
        return {
            message: "Unauthenticated request"
        }
    }

    const res = await serverClient.mutate({
        mutation: ENROLL_INTO_CLASS,
        variables: { user_id: session?.user.id, class_id },
        fetchPolicy: "network-only"
    });

    const cls = res.data?.insert_class_enrollments_one.id || "";
    console.log(res);
    console.log(cls);
    

    return cls;
}
