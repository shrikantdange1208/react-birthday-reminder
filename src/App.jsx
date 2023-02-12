import { useState } from 'react'
import List from './components/List'
import data from './data'

function App() {
  const [people, setPeople] = useState(data)

  function handleClick() {
    setPeople([])
  }
  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays today</h3>
        <List people={people} />
        <button type="button" onClick={handleClick}>
          Clear All
        </button>
      </section>
    </main>
  )
}

export default App
