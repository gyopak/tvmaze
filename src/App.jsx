import { AppShell } from '@mantine/core';
import Category from './Category';
import { useShowsByCategory } from './features/showsByCategory'
import Header from './Header';
import './App.css'

function App() {
  const { shows } = useShowsByCategory()
  const categories = Object.keys(shows || {}).sort()
  return (
    <AppShell header={<Header />}>
      <div className="Categories">
        {categories.map(category => (
          <Category key={category} title={category} shows={shows[category]} />
        ))}
      </div>
    </AppShell>
  )
}

export default App
