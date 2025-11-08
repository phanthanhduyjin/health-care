import { Posts } from '@/pages/column/components/Posts'
import { Recommended } from '@/pages/column/components/Recommended'

export const Column = () => (
  <div className='flex flex-col pt-14'>
    <Recommended />
    <Posts />
  </div>
)
