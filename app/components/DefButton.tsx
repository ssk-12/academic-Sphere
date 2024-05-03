"use client"
import { useRouter } from "next/navigation";
import { Button } from './Button';

export default function DefButton() {
  const router = useRouter();
  

  return (
    <Button onClick={() => {
      router.push("/home");
  }}>
      Explore now ↗️
    </Button>
  );
}
