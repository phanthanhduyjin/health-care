export type MealType = 'Morning' | 'Lunch' | 'Dinner' | 'Snack'

export interface Meal {
  id: string
  date: Date | string
  type: MealType
  url: string
}
export type ChartLineData = {
  id: string
  time: string
  line1: number
  line2: number
}
export interface ResponseWithPagination<T> {
  data: T
  total: number
}
export interface BodyReport {
  y: ChartLineData[]
  m: ChartLineData[]
  w: ChartLineData[]
  d: ChartLineData[]
}

export interface Diary {
  id: string
  date: string | Date
  title: string
  des: string
}
export interface Exercise {
  id: string
  name: string
  duration: number
  calories: number
}

export interface Post {
  id: string
  title: string
  tags: string[]
  date: string | Date
  url: string
}
