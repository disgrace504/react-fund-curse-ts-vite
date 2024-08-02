import cls from './Error.module.scss'

export const Error = () => {
  return (
    <div>
      <h1 className={cls.errorText}>Вы перешил на несуществующую страницу =(</h1>
    </div>
  )
}
