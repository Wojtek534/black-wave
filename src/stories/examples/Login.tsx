import {Panel} from "../../components/layout/Panel"
import {Button, Navigate, Image} from "../../components/common"
import {InputText, InputPassword} from "../../components/form"
import {
  Appearance,
  ButtonSize,
  NavigationSize,
  Space,
} from "../../components/types"
import {classNames} from "../../components/utilities"
import {Formline} from "../../components/layout/Formline"
import payment_01 from "../../assets/img/payment_01.jpg"
import wave from "../../assets/svg/wave_3.svg"

interface LoginProps {}

export function Login({}: LoginProps) {
  return (
    <main
      className={classNames(
        `min-h-screen grid gap-4 grid-cols-1 md:grid-cols-2 grid-rows-1 ml-0 mr-0 sm:ml-5 sm:mr-5 md:ml-10 md:mr-10 lg:ml-40 lg:mr-40 items-center`
      )}
    >
      <div className="h-[10rem] sm:h-[20rem] md:h-[30rem] lg:h[50rem] hidden md:block">
        <Image
          src={payment_01}
          alt="payment image"
          height="h-full"
          width="w-full"
        />
      </div>
      <div className="flex items-center">
        <div className="flex-1">
          <Panel
            showHeader={false}
            margin="m-0"
            appearance={Appearance.GrayTransparent}
          >
            <form className="flex flex-col items-stretch justify-center max-w-lg">
              <div className="self-center items-center">
                <Image
                  src={wave}
                  alt="payment image"
                  space={Space.None}
                  height="h-16"
                  width="w-16"
                />
              </div>
              <div className="text-3xl mb-2 self-center">Welcome</div>
              <Formline label="Email address" isVertical={true}>
                <InputText
                  value={"test@email.com"}
                  onChange={(value: string) => {
                    console.log(value)
                  }}
                />
              </Formline>
              <Formline label="Password" isVertical={true}>
                <InputPassword
                  value={"123456"}
                  onChange={(value: string) => {
                    console.log(value)
                  }}
                />
              </Formline>
              <Button
                appearance={Appearance.PrimaryFill}
                buttonSize={ButtonSize.VeryLarge}
                space={Space.None}
              >
                Login
              </Button>
              <div>
                <Navigate
                  appearance={Appearance.GrayTransparent}
                  navigationSize={NavigationSize.Base}
                  space={Space.BaseTop}
                >
                  Dont remember password?
                </Navigate>
              </div>
              <div className="text-2xl mb-2 mt-5">Need account?</div>
              <Button
                appearance={Appearance.PrimaryOutline}
                buttonSize={ButtonSize.VeryLarge}
                space={Space.None}
              >
                Register
              </Button>
            </form>
          </Panel>
        </div>
      </div>
    </main>
  )
}
