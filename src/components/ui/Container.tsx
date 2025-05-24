import type { ContainerProps } from '../../types/ContainerProps'

function Container({ containerClassName, children }: ContainerProps) {
  return (
    <div className={containerClassName}>
        {children}
    </div>
  )
}

export default Container