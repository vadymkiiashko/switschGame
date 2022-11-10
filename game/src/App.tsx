
import { Body } from './components/body.component/Body.component'
import { Footer } from './components/footer/footer.component'
import {Header} from './components/header.component'
import {store} from './app/store'
import { Provider } from 'react-redux'
import  './styles/components/app/app.styles.scss'


function App() {
  return (
    <Provider store={store}>
      <div className='container'>
        <Header />   
        <Body />
        <Footer />
      </div>
    </Provider>
  )
}

export default App
