import { useContext, useState } from 'react'
import { MyInput } from './../../components/UI/input/MyInput'
import { MyButton } from './../../components/UI/button/MyButton'
import cls from './Login.module.scss'
import { AuthContext } from '../../context/context'

export const Login = () => {
  const { setIsAuthorized } = useContext(AuthContext)

  const [loginValue, setLoginValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

  const login = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsAuthorized(true)
    localStorage.setItem('isAuthorized', 'true')
  }

  return (
    <div className={cls.loginContent}>
      <h1 className={cls.loginTitle}>Страница для логина</h1>
      <form onSubmit={login}>
        <MyInput
          type='text'
          placeholder='Ведите логин'
          value={loginValue}
          onChange={(event) => setLoginValue(event.target.value)}></MyInput>
        <MyInput
          type='password'
          placeholder='Ведите пароль'
          value={passwordValue}
          onChange={(event) => setPasswordValue(event.target.value)}></MyInput>
        <MyButton className={cls.loginButton}>Войти</MyButton>
      </form>
    </div>
  )
}
