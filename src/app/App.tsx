import './App.css'
import { Header } from '../components/Header/Header'
import { MainContent } from '../components/MainContent/MainContent'
import { AboutAs } from '../components/AboutAs/AboutAs'
import { Partners } from "../components/Partners/Partners"
import { Footer } from '../components/Footer/Footer'
import { Bottom } from '../components/Bottom/Bottom'

function App() {
  return (
    <div>
      <Header />
      <AboutAs />
      <MainContent />
      <Partners />
      <Footer />
      <Bottom />
    </div>
  )
}

export default App
