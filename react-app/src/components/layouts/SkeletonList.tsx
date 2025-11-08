import { Skeleton } from '@/shadcn/components/ui/skeleton'

type SkeletonListProps = {
  classNameSkeleton?: string
}

export const SkeletonList = ({ classNameSkeleton }: SkeletonListProps) => {
  return Array.from({ length: 8 }).map((_, id) => (
    <Skeleton
      key={`skeleton-${id}`}
      className={classNameSkeleton}
    />
  ))
}
