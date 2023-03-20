import { useMemo } from "react"
import { useGetShowsQuery } from "./showsApi"

export const useShowsByCategory = () => {
  const { data: shows, isLoading } = useGetShowsQuery()

  const showsByCategory = useMemo(() => (
    // create an object with category keys
    // a show can have multiple category
    shows?.reduce((previousCategories, currentShow) => {
      const categories = {  ...previousCategories }
      const currentCategories = currentShow?.genres || []
      currentCategories.forEach(category => {
        const showsInCategory = categories[category]
        categories[category] = !showsInCategory ? [currentShow] : [...showsInCategory, currentShow] 
      })
      return categories
    }, {})
  ), [shows])
  return { shows: showsByCategory, isLoading }
}