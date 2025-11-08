import { Link } from 'react-router'

import logo from '@/assets/images/logo.png'

import { ROUTER_CONFIG } from '@/router/config'

export const Logo = () => (
  <Link
    className='px-4'
    to={ROUTER_CONFIG.ROOT}
  >
    <img
      alt='Logo'
      className='h-10 w-[109px]'
      src={logo}
    />
  </Link>
)
