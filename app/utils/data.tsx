import prisma from "../lib/db"

export async function userData(userId:string) {
  const data = await prisma.user.findUnique({
    where: {
      id: userId
    },
    select: {
      email: true,
      name: true,
      description: true,
      image: true,
    },
  })
  return data  
}

export async function searchForUserAndCreateData({ 
  id, 
  description,
  email, 
  firstName, 
  lastName, 
  image,
}:{ 
  id: string, 
  email: string, 
  description: string
  firstName: string | undefined | null,
  lastName: string | undefined | null,
  image: string | undefined | null,
}) {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    }
  })

  if(!user) {
    const name = `${firstName ?? ''} ${lastName ?? ''}`
    await prisma.user.create({
      data: {
        id: id,
        email: email,
        description: description,
        name: name,
        image: image as string
      }
    })
  }
}

export async function GetTicketData(userId: string) {
  const data = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      Ticket: {
          select: {
            title: true,
            id: true,
            description: true,
            createdAt: true,
            },
          orderBy: {
            createdAt: "desc",
          },
        }
      },
  });

  return data;
}


export async function getUsers() {
      
        props: {
          users,
        },
      };
    } catch (error) {
      console.log('asdsadd')
    }

}