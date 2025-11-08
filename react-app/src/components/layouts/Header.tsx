import { Logo } from '@/components/layouts/Logo'
import { Menu } from '@/components/layouts/Menu'
import { NavBar } from '@/components/layouts/Navbar'
import { Notification } from '@/components/layouts/Notification'

export const Header = () => (
  <header className='bg-dark-500 shadow-header sticky top-0 z-50 h-16'>
    <div className='app-container flex h-full items-center justify-between font-light'>
      <Logo />
      <div className='flex'>
        <NavBar />
        <Notification />
        <Menu />
      </div>
    </div>
  </header>
)
