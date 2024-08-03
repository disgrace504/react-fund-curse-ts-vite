import { Navigate, Route, Routes } from 'react-router-dom'
import cls from './AppRouter.module.scss'
import { privateRoutes, publicRoutes } from '../../../router/router'

export const AppRouter = () => {
  const isAuthorized = false

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
