import {classNames} from "../utilities"

interface ParalaxProps {
  src?: string
}
// TODO
export function Paralax({src}: ParalaxProps): JSX.Element {
  return <div className={classNames(`bg-[url(${src})`)} />
}
