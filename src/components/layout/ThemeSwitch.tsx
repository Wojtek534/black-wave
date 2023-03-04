import {useEffect, useState} from "react"
import {Icon} from "../common"
import {IconList, StrokeColor, IconSize} from "../types"

export function ThemeSwitch() {
  const themeKey = "theme"
  const lightTheme = "light"
  const darkTheme = "dark"
  const [theme, setTheme] = useState("")

  useEffect(() => {
    const ls = localStorage.getItem(themeKey)
    switch (ls) {
      case lightTheme: {
        setTheme(lightTheme)
        document.documentElement.classList.add(lightTheme)
        break
      }
      case darkTheme: {
        setTheme(darkTheme)
        document.documentElement.classList.add(darkTheme)
        break
      }
      default: {
        setTheme(lightTheme)
        localStorage.setItem(themeKey, lightTheme)
        document.documentElement.classList.add(lightTheme)
      }
    }
  }, [])

  function setThemeClass(newTheme: string) {
    if (
      newTheme !== lightTheme &&
      document.documentElement.classList.contains(lightTheme)
    ) {
      document.documentElement.classList.remove(lightTheme)
    } else if (
      newTheme !== darkTheme &&
      document.documentElement.classList.contains(darkTheme)
    ) {
      document.documentElement.classList.remove(darkTheme)
    }
    document.documentElement.classList.add(newTheme)
  }

  function switchTheme() {
    switch (theme) {
      case lightTheme: {
        setTheme(darkTheme)
        localStorage.setItem(themeKey, darkTheme)
        setThemeClass(darkTheme)
        break
      }
      case darkTheme: {
        setTheme(lightTheme)
        localStorage.setItem(themeKey, lightTheme)
        setThemeClass(lightTheme)
        break
      }
      default:
        break
    }
  }
  return (
    <div
      className="p-1 flex items-center bg-header dark:bg-dark-header rounded cursor-pointer brightness-100 hover:brightness-90 duration-300"
      onClick={() => {
        switchTheme()
      }}
    >
      <Icon
        icon={theme === darkTheme ? IconList.MOON : IconList.SUN}
        stroke={StrokeColor.Current}
        size={IconSize.Large}
      />
    </div>
  )
}
