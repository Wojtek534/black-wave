import {Panel} from "../../components/layout"
import {Button, Dropdown, Image} from "../../components/common"
import {Appearance} from "../../components/types"
import {classNames} from "../../components/utilities"
import {Background} from "../../components/common/Background"

interface NavigationScreenProps {}

export function NavigationScreen({}: NavigationScreenProps) {
  //animate-[backgroundMove_10s_linear_1]
  //scale-125
  const background =
    "flex scale-1 object-cover bg-[url('/src/assets/img/earth.jpg')] bg-repeat bg-cover bg-center bg-fixed animate-backgroundMove"
  return (
    <main
      className={classNames(
        `${background} min-h-screen min-w-screen text-white`
      )}
    >
      <div className="w-full h-full grid gap-4 grid-rows-2 ml-20 mr-20 mt-10">
        <div className="flex items-center">
          <Button appearance={Appearance.PrimaryText}>Show</Button>
          <Dropdown appearance={Appearance.PrimaryText} label="Options">
            Options
          </Dropdown>
        </div>
        <div className="flex items-center">
          <Panel
            showHeader={false}
            margin="m-0"
            appearance={Appearance.GrayTransparent}
          >
            <p>Content</p>
          </Panel>
        </div>
      </div>
    </main>
  )
}
