import { AppShell } from '@mantine/core';
import Category from './Category';
import { useShowsByCategory } from './features/showsByCategory'
import Header from './Header';
import './App.css'
import { useState, useRef } from 'react';
import SearchResults from './SearchResults';
import ShowModal from './ShowModal';
import { useNavigation } from './hooks/useNavigation'

function App() {
  const [search, onSearchChange] = useState('');
  const [selectedShow, setSelectedShow] = useState(null);
  const shellRef = useRef(null);
  const { shows } = useShowsByCategory();
  useNavigation(shellRef);

  const categories = Object.keys(shows || {}).sort();
  return (
    <AppShell ref={shellRef} header={<Header search={search} onSearchChange={onSearchChange} />}>
      <ShowModal show={selectedShow} />
      <div className="Categories">
        {!search && categories.map(category => (
          <Category key={category} title={category} shows={shows[category]} setSelectedShow={setSelectedShow} />
        ))}
        {search && <SearchResults search={search} setSelectedShow={setSelectedShow} />}
      </div>
    </AppShell>
  )
}

export default App
