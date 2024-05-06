"use server"
import { serverClient } from "@/app/lib/apollo-server";
import { CREATE_EVENT } from "@/app/lib/graphql-operations";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";



export async function createEvent({class_id, location, name, proximity, timestamp}:any) {
    const session = await getServerSession(authOptions);
    if (!session?.user || !session.user?.id) {
        return {
            message: "Unauthenticated request"
        }
    }

    const res = await serverClient.mutate({
        mutation: CREATE_EVENT,
        variables: { host_id: session?.user.id,class_id, location, name, proximity, timestamp },
        fetchPolicy: "network-only"
    });

    const ev = res.data?.insert_events_one.id || "";
    console.log(res);
    console.log(ev);
    

    return ev;
}
