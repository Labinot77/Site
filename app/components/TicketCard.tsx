import { currentUser } from "@clerk/nextjs"
import { GetTicketData } from "../utils/data"


const TicketCard =async () => {
  const user = await currentUser()
  const data = await GetTicketData(user?.id as string);

  
  return (
    <div>
      {data?.Ticket.map((item) => (
        <h1>{item.description}</h1>
      ))}
      </div>
  )
}

export default TicketCard