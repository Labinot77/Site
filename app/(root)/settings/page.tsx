import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import prisma from '@/app/lib/db'
import { auth, currentUser } from '@clerk/nextjs'
import { SubmitButton } from '@/app/components/submitButton'
import { revalidatePath } from 'next/cache'
import { userData } from '@/app/utils/data'
import ImageUploader from '@/app/components/ImageUploader'

const page = async () => {
  const user = await currentUser()
  const data = await userData(user?.id as string)



  async function postData( formData: FormData) {
    "use server"

    const name = formData.get("name") as string    
    const email = formData.get("email") as string    
    const image = formData.get("image") as string    
    const description = formData.get("description") as string    

    await prisma.user.update({
      where: {
        id: user?.id
      },
      data: {
        name: name ?? undefined,
        email: email ?? undefined,
        image: image ?? undefined,
        description: description ?? undefined
    }
  })
  revalidatePath('/')
  }

  return (
    <div className='w-full mt-10 gap-8'>
      <div className='flex items-center justify-between px-2'>
        <div className='grid gap-1 p-1'>
          <h1 className='text-3xl md:text-5xl'>Settings</h1>
          <p className='text-lg text-muted-foreground p-1'>Your Profile settings</p>
        </div>
      </div>

      <Card>
        <form action={postData} >
          <CardHeader>
            <CardTitle className='text-lg'>
              General Data
            </CardTitle>
            <CardDescription className='text-md'>
              Please provide general information about yourself
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='space-y-2'>
              <div className='space-y-1 w-full'>
                <Label>Upload your Photo</Label>
                <div className='flex w-full justify-center items-center'>
                <ImageUploader />
                </div>
              </div>
            </div>
            <div className='space-y-2'>
              <div className='space-y-1'>
                <Label>Your Name</Label>
                <Input name='name' type='text' id='name' placeholder='Enter your name'
                 defaultValue={data?.name ?? undefined}
                 />
              </div>
              <div className='space-y-1'>
                <Label>Description</Label>
                <Input name='description' type='text' id='name' placeholder='Enter your name'
                 defaultValue={data?.description ?? undefined}
                 />
              </div>
              <div className='space-y-1'>
                <Label>Your Email</Label>
                <Input name='email' type='email' id='email' placeholder='Your Email'
                disabled
                defaultValue={data?.email ?? undefined}
               />
              </div>
            </div>
          </CardContent>

          <CardFooter>
           <SubmitButton/>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

export default page