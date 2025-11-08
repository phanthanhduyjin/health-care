import { Diary } from '@/pages/my-record/components/Diary'
import { Exercise } from '@/pages/my-record/components/Exercise'
import { RecordCategories } from '@/pages/my-record/components/RecordCategories'
import { RecordChart } from '@/pages/my-record/components/RecordChart'

export const MyRecord = () => (
  <div className='flex flex-col pb-16'>
    <RecordCategories />
    <RecordChart />
    <Exercise />
    <Diary />
  </div>
)
