import {classNames} from "../utilities"

interface BackgroundProps {
  src: string
}

export function Background({src}: BackgroundProps) {
  return (
    <div
      className={classNames(
        `absolute z-0 w-full h-full bg-[url('${src}')] bg-no-repeat bg-cover bg-center`
      )}
    />
  )
}
