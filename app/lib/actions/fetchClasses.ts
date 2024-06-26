"use server"
import { serverClient } from "@/app/lib/apollo-server";
import { FETCH_USER_CLASSES } from "@/app/lib/graphql-operations";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import { log } from "console";



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

    const {class_enrollments,classes} = res.data || [];
    console.log(class_enrollments);
    console.log(classes);
    
    return {class_enrollments,classes}  ;
}


