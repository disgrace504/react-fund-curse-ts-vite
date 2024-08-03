import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './components/UI/AppRouter/AppRouter'
import { NavBar } from './components/UI/NavBar/NavBar'
import { useEffect, useState } from 'react'
import { AuthContext } from './context/context'

export const App = () => {
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [isAuthorizedLoading, setIsAuthorizedLoading] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('isAuthorized')) {
      setIsAuthorized(true)
    }
    setIsAuthorizedLoading(false)
  }, [])

  return (
    <AuthContext.Provider value={{ isAuthorized, setIsAuthorized, isAuthorizedLoading }}>
      <BrowserRouter>
        <NavBar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}
