"use server"
import { serverClient } from "@/app/lib/apollo-server";
import { FETCH_EVENT_DETAILS } from "@/app/lib/graphql-operations";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";



export async function fetchEventdetails({event_id}:{event_id:string}) {
    const session = await getServerSession(authOptions);
    if (!session?.user || !session.user?.id) {
        return {
            message: "Unauthenticated request"
        }
    }

    const res = await serverClient.mutate({
        mutation: FETCH_EVENT_DETAILS,
        variables: { event_id:event_id },
        fetchPolicy: "network-only"
    });

    const {attendances} = res.data;
    // console.log(attendances);

    
    return {attendances}  ;
}


