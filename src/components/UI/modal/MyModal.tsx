import { memo } from 'react'
import cls from './MyModal.module.scss'
import { MyButton } from './../button/MyButton'

interface IMyModalProps {
  children: React.ReactNode
  modalVisible: boolean
  setModalVisible: (modalVisible: boolean) => void
}

export const MyModal = memo(({ children, modalVisible, setModalVisible }: IMyModalProps) => {
  const rootClasses = [cls.myModal]

  if (modalVisible) {
    rootClasses.push(cls.active)
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setModalVisible(false)}>
      <div className={cls.myModalContent} onClick={(event) => event.stopPropagation()}>
        {children}
        <MyButton className={cls.closeButton} onClick={() => setModalVisible(false)}>
          Закрыть
        </MyButton>
      </div>
    </div>
  )
})
