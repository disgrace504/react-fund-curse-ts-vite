import { Link } from 'react-router-dom'
import cls from './NavBar.module.scss'

export const NavBar = () => {
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
    </div>
  )
}
