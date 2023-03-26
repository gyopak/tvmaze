import { SimpleGrid, Title } from '@mantine/core';
import { useMemo } from 'react';
import { useSearchShowsQuery } from './features/showsApi';
import Show from './Show';

function SearchResults({ search, setSelectedShow }) {
  const { data } = useSearchShowsQuery({ q: search});

  const shows = data?.map(({ show }) => ({
    ...show,
    setSelectedShow: () => setSelectedShow(show)
  })) || [];

  return (
    <>
      <Title order={3} style={{ fontWeight: 500 }}>Search results for "{search}"</Title>
      
      <div className="CategoryGrid">
        {shows.map(show => <Show key={show.id} {...show} setSelectedShow={setSelectedShow} />)}
      </div>
    </>
  )
}

export default SearchResults
