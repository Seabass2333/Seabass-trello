import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { MobileSidebar } from './mobile-sidebar'

export const Navbar = () => {
  return (
    <nav className='fixed z-50 top-0 w-full h-14 border-b shadow-sm bg-white flex items-center p-4'>
      {/* TODO: Mobile Sidebar */}
      <MobileSidebar></MobileSidebar>
      <div className='flex items-center gap-x-4'>
        <div className='hidden md:flex'>
          <Logo></Logo>
        </div>
        <Button
          variant='primary'
          size='sm'
          className='rounded-sm hidden md:block h-auto py-1.5 px-2'
          asChild
        >
          <Link href='/'>Create</Link>
        </Button>
        <Button size='sm' className='rounded-sm md:hidden'>
          <Plus className='w-4 h-4'></Plus>
        </Button>
      </div>

      <div className='ml-auto flex items-center gap-x-2'>
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl='/organization/:id'
          afterLeaveOrganizationUrl='/select-org'
          afterSelectOrganizationUrl='/organization/:id'
          appearance={{
            elements: {
              rootBox: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }
            }
          }}
        ></OrganizationSwitcher>
        <UserButton
          afterSignOutUrl='/'
          appearance={{
            elements: {
              avatarBox: {
                width: 30,
                height: 30
              }
            }
          }}
        ></UserButton>
      </div>
    </nav>
  )
}
