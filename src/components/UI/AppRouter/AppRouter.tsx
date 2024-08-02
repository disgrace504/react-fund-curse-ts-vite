import { Navigate, Route, Routes } from 'react-router-dom'
import { Posts } from '../../../pages/Posts/Posts'
import { About } from '../../../pages/About/About'
import { Error } from '../../../pages/Error/Error'
import cls from './AppRouter.module.scss'

export const AppRouter = () => {
  return (
    <div className={cls.appContent}>
      <Routes>
        <Route path='/' element={<Posts />} />

        <Route path='/about' element={<About />} />

        <Route path='/error' element={<Error />} />

        <Route path='*' element={<Navigate to='/error' />} />
      </Routes>
    </div>
  )
}
