import { Title, Header as MantineHeader } from '@mantine/core';
import './Header.css'

function Header() {
  return (
    <MantineHeader style={{
      padding: '1rem',
    }}><Title order={2}>TVMAZE client</Title></MantineHeader>
  )
}

export default Header
