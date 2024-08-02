import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './components/UI/AppRouter/AppRouter'
import { NavBar } from './components/UI/NavBar/NavBar'

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  )
}
