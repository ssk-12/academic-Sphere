"use client"
import { useRouter } from "next/navigation";
import { Button } from './Button';

export default function DefButton({href}:{href : string}) {
  const router = useRouter();
  

  return (
    <Button onClick={() => {
      router.push(href);
  }}>
      Explore now ↗️
    </Button>
  );
}
