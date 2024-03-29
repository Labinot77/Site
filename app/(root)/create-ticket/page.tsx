import { SubmitButton } from '@/app/components/submitButton'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { currentUser } from '@clerk/nextjs'
import Link from 'next/link'
import prisma from '@/app/lib/db'
import { Textarea } from '@/components/ui/textarea'
import { redirect } from 'next/navigation'

const page = async () => {
  const user = await currentUser()

  async function postData(formData: FormData) {
    "use server"
 

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const NoteCategory = formData.get("NoteCategory") as string;

    await prisma.ticket.create({
      data: {
        userId: user?.id,
        description: description,
        title: title,
        Type:  "No category"
      },
      
    });
    return redirect("/");
  }
    
  return (
    <Card>
    <form action={postData}>
      <CardHeader>
        <CardTitle>New Note</CardTitle>
        <CardDescription>
          Right here you can now create your new notes
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-y-5">
        <div className="gap-y-2 flex flex-col">
          <Label>Title</Label>
          <Input
            required
            type="text"
            name="title"
            placeholder="Title for your note"
          />
        </div>

        <div className="flex flex-col gap-y-2">
          <Label>Description</Label>
          <Textarea
            name="description"
            placeholder="Describe your note as you want"
            required
          />
        </div>
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button asChild variant="destructive">
          <Link href="/">Cancel</Link>
        </Button>
        <SubmitButton />
      </CardFooter>
    </form>
  </Card>
  )
}

export default page