import { useMemo } from 'react'

import type { Exercise } from '@/types'

interface UseExerciseDataReturn {
  leftColumn: Exercise[]
  rightColumn: Exercise[]
}

export const useExerciseData = (exercises: Exercise[]): UseExerciseDataReturn =>
  useMemo(() => {
    const midPoint = Math.ceil(exercises.length / 2)
    const leftColumn = exercises.slice(0, midPoint)
    const rightColumn = exercises.slice(midPoint)

    return {
      leftColumn,
      rightColumn,
    }
  }, [exercises])
