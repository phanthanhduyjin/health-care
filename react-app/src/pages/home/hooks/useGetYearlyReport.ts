import { useQuery } from '@tanstack/react-query'

import { getYearlyChartData } from '@/services'

export const useGetYearlyReport = () => {
  const { data, isLoading, refetch, isFetching } = useQuery({
    queryKey: ['yearlyReport'],
    queryFn: async () => await getYearlyChartData(),
    staleTime: 0,
  })

  return {
    data: data ?? [],
    isLoading,
    isFetching,
    refetch,
  }
}
