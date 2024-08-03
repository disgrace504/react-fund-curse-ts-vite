import { createContext, Dispatch, SetStateAction } from 'react'

interface AuthContextType {
  isAuthorized: boolean
  isAuthorizedLoading: boolean
  setIsAuthorized: Dispatch<SetStateAction<boolean>>
}

// Начальное значение контекста
const defaultAuthContext: AuthContextType = {
  isAuthorized: false,
  isAuthorizedLoading: true,
  setIsAuthorized: () => {},
}

export const AuthContext = createContext<AuthContextType>(defaultAuthContext)
