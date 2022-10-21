import './App.css'
import { Body } from './components/body.component/Body.component'
import { Footer } from './components/footer/footer.component'
import {Header} from './components/header.component'
import { BodyContextProvider } from './contexts/game.body.context'
import { GameContextProvider } from './contexts/game.context'

function App() {
  return (
    <BodyContextProvider>
  <GameContextProvider>
      
      <div className='container'>
        <Header />   
        <Body />
        <Footer />
      </div>
  </GameContextProvider>
    </BodyContextProvider>
 )
}

export default App
