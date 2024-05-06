"use server"
import { serverClient } from "@/app/lib/apollo-server";
import { FETCH_EVENT } from "@/app/lib/graphql-operations";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";



export async function fetchEvent({class_id}:{class_id:string}) {
    const session = await getServerSession(authOptions);
    if (!session?.user || !session.user?.id) {
        return {
            message: "Unauthenticated request"
        }
    }

    const res = await serverClient.mutate({
        mutation: FETCH_EVENT,
        variables: { class_id:class_id },
        fetchPolicy: "network-only"
    });

    const {events} = res.data || [];
    console.log(events);

    
    return {events}  ;
}


