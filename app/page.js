"use client";
import { Button } from "@/components/ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";

export default function Home() {
  const ale = () => alert("I Love You Anwar!");
  return (
    <div className="p-4 flex flex-col gap-10">
      <b >Welcome</b>
      <Button onClick={ale}>Love Me</Button>
      <Button><LoginLink target="_blank">Sign in</LoginLink></Button>
      <Button ><RegisterLink>Sign Up</RegisterLink></Button>
    </div>
  );
}
