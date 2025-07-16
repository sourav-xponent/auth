import { auth } from "@/auth";
import { LogoutButton } from "@/components/auth/logout-button";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await auth();
  console.log({ session });

  if (!session) {
    return redirect("/auth/login");
  }

  return (
    <div>
      Welcome to Settings Page: <br />
      {session?.user?.email}
      <br />
      <br />
      <Button variant={"destructive"}>
        <LogoutButton>Logout</LogoutButton>
      </Button>
    </div>
  );
};

export default page;
