import { AppShell, Title } from '@mantine/core';
import { useState } from 'react'
import './App.css'
import Category from './Category';
import { useShowsByCategory } from './features/showsByCategory'
import Header from './Header';

function App() {
  const { shows } = useShowsByCategory()
  const categories = Object.keys(shows || {})
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
