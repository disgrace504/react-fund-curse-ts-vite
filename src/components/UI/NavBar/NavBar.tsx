import { Link } from 'react-router-dom'
import cls from './NavBar.module.scss'
import { MyButton } from './../button/MyButton'
import { useContext } from 'react'
import { AuthContext } from '../../../context/context'

export const NavBar = () => {
  const { setIsAuthorized } = useContext(AuthContext)

  const logout = () => {
    localStorage.removeItem('isAuthorized')
    setIsAuthorized(false)
  }

  return (
    <div className={cls.navbar}>
      <h3 className={cls.navbarTitle}>Меню/Навигация</h3>
      <div className={cls.navbarLinks}>
        <Link className={cls.link} to='/posts'>
          Posts
        </Link>
        <Link className={cls.link} to='/about'>
          About
        </Link>
      </div>
      <MyButton onClick={logout} className={cls.exitButton}>
        Выйти
      </MyButton>
    </div>
  )
}
