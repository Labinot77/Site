import { userData } from "@/app/utils/data"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { currentUser } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"


const page = async () => {
  const user = await currentUser()
  const data = await userData(user?.id as string)
  return (
    <div className='w-full mt-10 gap-8'>
        <div className='grid gap-1 p-1'>
          <h1 className='text-3xl md:text-5xl'>Your Profile</h1>
          <p className='text-lg text-muted-foreground p-1'>Here you can see your profile details</p>
      </div>

      <Card className="p-4">
      <div className='w-full'>
        <div className="flex-col flex sm:flex-row justify-between ">
          <div className="flex space-x-4 ">
        <Avatar className='p-1 h-24 w-24 bg-accent rounded-full'>
              <AvatarImage className="rounded-full" src={data?.image as string} alt=''/>
              <AvatarFallback>
                <Image
                src='/pfp.jpg'
                alt="asdsa"
                fill/>
              </AvatarFallback>
            </Avatar>
        <div className="mt-1 justify-center flex flex-col space-y-1">
        <h2 className="text-3xl">{data?.name}</h2>
        <p className="text-sm text-muted-foreground">{data?.email}</p>
        </div>
          </div>
        <div className="flex justify-center items-center">
          <Link
          className=""
          href="/settings">
          <Button>
            Edit Profile
          </Button>
          </Link>
        </div>
        </div>
        </div>
        <p className="text-base p-3">{data?.description}</p>
        <Separator />
      </Card>
      </div>
  )
}

export default page