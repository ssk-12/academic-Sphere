"use client"
import { useRouter } from "next/navigation";
import { Button } from './Button';

export default function DefButton({href,text}:{href : string, text:string}) {
  const router = useRouter();
  

  return (
    <Button onClick={() => {
      router.push(href);
  }}>
      {text}
    </Button>
  );
}
