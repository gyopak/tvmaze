import { Title } from '@mantine/core';
import './Category.css'

function Category({ title, shows }) {
  return (
    <div className='Category'>
      <Title order={3}>{title}</Title>
    </div>
  )
}

export default Category
