"use server"
import { serverClient } from "@/app/lib/apollo-server";
import { MARK_ATTENDANCE} from "@/app/lib/graphql-operations";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";



export async function markAttendance({class_id,event_id}:{class_id:string,event_id:number}) {
    const session = await getServerSession(authOptions);
    if (!session?.user || !session.user?.id) {
        return {
            message: "Unauthenticated request"
        }
    }

    console.log("event_id",event_id);
    

    const res = await serverClient.mutate({
        mutation: MARK_ATTENDANCE,
        variables: { user_id: session?.user.id, class_id:class_id, event_id:event_id },
        fetchPolicy: "network-only"
    });

    const cls = res.data?.insert_attendances_one;
    console.log(res);
    console.log(cls);
    

    return cls;
}
