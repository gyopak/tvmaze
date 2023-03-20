import { SimpleGrid, Title } from '@mantine/core';
import './Category.css'
import Show from './Show';

function Category({ title, shows = [] }) {
  return (
    <>
      <Title order={3}>{title}</Title>
      <div className="Category">
        {shows.map(show => <Show key={show.id} {...show} />)}
      </div>
    </>
  )
}

export default Category
