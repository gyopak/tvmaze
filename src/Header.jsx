import { Title, Header as MantineHeader, Input } from '@mantine/core';
import './Header.css'

function Header({ search, onSearchChange }) {
  return (
    <MantineHeader style={{ padding: '1rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      <Title order={2} style={{ fontWeight: 600 }}>TVMZ</Title>
      <Input
        icon={<>🔎</>}
        value={search}
        onChange={e => onSearchChange(e.target.value)}
        placeholder="Search"
      />
    </MantineHeader>
  )
}

export default Header
