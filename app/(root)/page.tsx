import { SignOutButton, currentUser } from "@clerk/nextjs";
import prisma from "../lib/db";
import { redirect } from "next/navigation";
import { getUsers, userData ,searchForUserAndCreateData } from "../utils/data";
import TicketCard from "../components/TicketCard";

export default async function Home() {
  const user = await currentUser();

  if(!user) {
    return redirect('/')
  }

  await searchForUserAndCreateData({ 
    email: user.emailAddresses[0].emailAddress as string, 
    description: "No description",
    firstName: user.firstName as string, 
    lastName: user.lastName as string, 
    id: user.id as string,
    image: user.imageUrl as string
  })
  return (
    <div className="mt-32 ">


      <TicketCard />
      <h1>apge</h1>
    </div>
  );
}
