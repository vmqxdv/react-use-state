import './App.css'

import Header from './components/header'
import Main from './components/main/main'

import languages from './data/languages'


function App() {
  return (
    <>
      <Header/>
      <Main data={languages}/>
    </>
  )
}

export default App
