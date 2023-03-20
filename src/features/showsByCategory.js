import { useGetShowsQuery } from "./showsApi"

export const useShowsByCategory = () => {
  const { data: shows, isLoading } = useGetShowsQuery()
  return { shows, isLoading }
}