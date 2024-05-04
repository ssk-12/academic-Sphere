"use server"
import { serverClient } from "@/app/lib/apollo-server";
import { FETCH_CLASS } from "@/app/lib/graphql-operations";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";



export async function fetchClassDetails(class_id:string) {
    const session = await getServerSession(authOptions);
    if (!session?.user || !session.user?.id) {
        return {
            message: "Unauthenticated request"
        }
    }

    const res = await serverClient.mutate({
        mutation: FETCH_CLASS,
        variables: { class_id: class_id },
        fetchPolicy: "network-only"
    });

    const class_Details = res.data.classes[0];
    const class_enrollments = res.data.class_enrollments
    

    return {class_Details,class_enrollments};
}
