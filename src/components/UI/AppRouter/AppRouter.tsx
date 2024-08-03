import { Navigate, Route, Routes } from 'react-router-dom'
import cls from './AppRouter.module.scss'
import { privateRoutes, publicRoutes } from '../../../router/router'
import { useContext } from 'react'
import { AuthContext } from '../../../context/context'
import { Loader } from '../Loader/Loader'

export const AppRouter = () => {
  const { isAuthorized, isAuthorizedLoading } = useContext(AuthContext)

  if (isAuthorizedLoading) {
    return <Loader />
  }

  return (
    <div className={cls.appContent}>
      {isAuthorized ? (
        <Routes>
          {privateRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={<route.component />} />
          ))}
          <Route path='*' element={<Navigate to='/posts' />} />
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={<route.component />} />
          ))}
          <Route path='*' element={<Navigate to='/login' />} />
        </Routes>
      )}
    </div>
  )
}
