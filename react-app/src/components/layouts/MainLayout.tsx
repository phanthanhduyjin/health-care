import { Outlet } from 'react-router'

import { Footer } from '@/components/layouts/Footer'
import { Header } from '@/components/layouts/Header'
import { ScrollTopButton } from '@/components/layouts/ScrollTopButton'

export const MainLayout = () => (
  <div className='flex min-h-screen flex-col bg-white'>
    <Header />
    <main
      role='main'
      className='flex-1'
    >
      <Outlet />
    </main>
    <Footer />
    <ScrollTopButton />
  </div>
)
