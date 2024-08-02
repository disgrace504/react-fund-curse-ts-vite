import { Link } from 'react-router-dom'
import cls from './NavBar.module.scss'

export const NavBar = () => {
  return (
    <div className={cls.navbar}>
      <h3 className={cls.navbarTitle}>Меню/Навигация</h3>
      <div className={cls.navbarLinks}>
        <Link to='/'>
          <span className={cls.links}>Posts</span>
        </Link>
        <Link to='/about'>
          <span className={cls.links}>About</span>
        </Link>
      </div>
    </div>
  )
}
