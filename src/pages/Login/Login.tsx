import { useState } from 'react'
import { MyInput } from './../../components/UI/input/MyInput'
import { MyButton } from './../../components/UI/button/MyButton'
import cls from './Login.module.scss'

export const Login = () => {
  const [loginValue, setLoginValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

  const onClickLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    console.log(loginValue, passwordValue)
  }

  return (
    <div className={cls.loginContent}>
      <h1 className={cls.loginTitle}>Страница для логина</h1>
      <form action=''>
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
        <MyButton className={cls.loginButton} onClick={onClickLogin}>
          Войти
        </MyButton>
      </form>
    </div>
  )
}
