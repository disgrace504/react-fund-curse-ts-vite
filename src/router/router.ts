import { FC } from 'react'
import { About } from '../pages/About/About'
import { CurrentPostPage } from '../pages/CurrentPostPage/CurrentPostPage'
import { Posts } from '../pages/Posts/Posts'
import { Error } from '../pages/Error/Error'
import { Login } from '../pages/Login/Login'

interface IRoutes {
  path: string
  component: FC
}

export const privateRoutes: IRoutes[] = [
  { path: '/about', component: About },
  { path: '/posts', component: Posts },
  { path: '/error', component: Error },
  { path: '/posts/:id', component: CurrentPostPage },
]

export const publicRoutes: IRoutes[] = [{ path: '/login', component: Login }]
