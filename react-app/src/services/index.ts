import { httpClient } from '@/helper/httpClient'
import type { ChartLineData, Meal, BodyReport, ResponseWithPagination } from '@/types'
import type { Post } from '@/types'
import type { Diary, Exercise } from '@/types'

export const getMeals = async (
  type?: string,
  page = 1,
  limit = 8,
): Promise<ResponseWithPagination<Meal[]>> => {
  const res = await httpClient.get<Meal[]>('/meals', {
    params: { _page: page, _limit: limit, type },
  })
  return { data: res.data, total: limit * 3 }
}

export const getYearlyChartData = async (): Promise<ChartLineData[]> => {
  const res = await httpClient.get<ChartLineData[]>('/yearly-report')
  return res.data
}

export const getBodyReport = async (): Promise<BodyReport> => {
  const res = await httpClient.get<BodyReport>('/body-report')
  return res.data
}

export const getExercises = async (): Promise<Exercise[]> => {
  const res = await httpClient.get<Exercise[]>('/exercises')
  return res.data
}

export const getDiaries = async (page = 1, limit = 8): Promise<ResponseWithPagination<Diary[]>> => {
  const res = await httpClient.get<Diary[]>('/diaries', {
    params: { _page: page, _limit: limit },
  })
  return { data: res.data, total: limit * 3 }
}

export const getPosts = async (page = 1, limit = 8): Promise<ResponseWithPagination<Post[]>> => {
  const res = await httpClient.get<Post[]>('/post', {
    params: { _page: page, _limit: limit },
  })
  return { data: res.data, total: limit * 3 }
}
