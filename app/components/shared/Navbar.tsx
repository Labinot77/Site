
import { SignInButton, auth, currentUser } from '@clerk/nextjs'
import Link from 'next/link'
import UserNavDock from '../UserNavDock'
import { ModeToggle } from '@/components/ui/modetoggle'
import { BadgePlus, Ticket } from 'lucide-react'

const Navbar = async () => {
  const { userId } = auth();
  const user = await currentUser();

  return (
    <nav className='sticky w-full top-0 shadow-lg bg-[#f5f5f517] backdrop-blur-md z-50 py-2 transition-all'>
      <div className='max-w-6xl mx-auto'>
      <div className='flex justify-between items-center w-full'>
          <Link href='/' className='flex  items-center justify-center space-x-4'>
        <h1 className='text-xl font-bold '>
          Ticket App
          </h1>
        <Ticket />
          </Link>

        <div className='flex items-center gap-x-8'>
          <div>
            <Link href='/create-ticket' className='flex items-center space-x-2'>
            <BadgePlus />
              <h1 className='font-semibold text-lg'>Create a ticket
              </h1>
            </Link>
          </div>
          <div className='flex items-center space-x-4'>
            {userId ? (
              <UserNavDock/>
            ) : (
              <div className='px-4 py-2 rounded-full bg-slate-400'>
                <SignInButton />
              </div>
            )}
          <ModeToggle/>
          </div>
        </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar
