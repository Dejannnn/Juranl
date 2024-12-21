import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'

//Data
import data from "./data";
function App() {

  const entryElements = data.map((entry) => {
    return (
        <Entry
            key={entry.id}
            {...entry}
        />
    )
})
  return (
    <>
      <Header></Header>
      {entryElements}
    </>
  )
}

export default App