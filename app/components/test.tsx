"use client";
import { useUser } from "@clerk/nextjs";

export default function Test() {
  const { isLoaded, isSignedIn, user } = useUser();
  if (!isLoaded) return null;
  if (!isSignedIn) return <p>Youre not signed in</p>;

  return (
    <>
      <p>Youre signed in as {user.emailAddresses[0].emailAddress}</p>
    </>
  );
}
