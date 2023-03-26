import { SimpleGrid, Title } from '@mantine/core';
import { useMemo } from 'react';
import './Category.css'
import Show from './Show';

function Category({ title, shows = [], setSelectedShow }) {
  // sorted by popularity
  const sortedShows = useMemo(() => (
    shows.sort((a, b) => b?.weight - a.weight)
  ), [shows])
  return (
    <>
      <Title order={3} style={{ fontWeight: 500 }}></Title>
      <div className="Category">
        <Show name={title} titleOnly />
        {sortedShows.map(show => <Show key={show.id} setSelectedShow={setSelectedShow} {...show} />)}
      </div>
    </>
  )
}

export default Category
