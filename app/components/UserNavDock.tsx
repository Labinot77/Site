
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
  import Link from 'next/link'
import { navItems } from '@/constants'
import { DoorClosed } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { SignOutButton, auth, currentUser } from '@clerk/nextjs'
import { userData } from '../utils/data'


const UserNavDock = async () => {
  const user = await currentUser();
  const data = await userData(user?.id as string)

  return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button  className='relative h-10 w-10 rounded-full'>
            <div className=' hover:p-[2px]  bg-slate-50 rounded-full transition-all'>
            <Avatar className='h-10 w-10 rounded-full'>
            <AvatarImage src={data?.image}/>
              <AvatarFallback>
                <Image
                fill
                alt="asda"
                src="/pfp.jpg"/>
                </AvatarFallback>
            </Avatar>
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56 mt-2' align='end' forceMount>
          <DropdownMenuLabel>
            <div className='flex flex-col space-y-1'> 
              <p className='text-sm font-medium leading-none'>{data?.name}</p>
              <p className='text-xs leading-none text-muted-foreground'>{user?.emailAddresses[0].emailAddress as string}</p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator/>
          <DropdownMenuGroup>
            {navItems.map((item, i) => (
              <DropdownMenuItem asChild key={i}>
                <Link
                href={item.href}
                className='w-full flex justify-between items-center cursor-pointer'>
                  {item.name}
                  <span><item.icon className='w-4 h-4'/></span>
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
          <DropdownMenuSeparator/>
          <DropdownMenuItem className='w-full flex justify-between items-center cursor-pointer' asChild>
              <SignOutButton>
              <div className='flex w-full justify-between items-center'>
              <h1>Sign out</h1>
              <DoorClosed className='w-4 h-4'/>
              </div>
              </SignOutButton>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      

  )
}

export default UserNavDock