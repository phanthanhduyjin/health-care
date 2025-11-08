import { HeroSection } from '@/pages/home/components/HeroSection'
import { MealGallery } from '@/pages/home/components/MealGallery'

export const Home = () => (
  <div className='flex flex-col'>
    <HeroSection />
    <MealGallery />
  </div>
)
