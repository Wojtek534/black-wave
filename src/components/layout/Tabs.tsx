import {Tab} from "@headlessui/react"
import {Fragment} from "react"
import {Button} from "../common/Button"
import {Appearance, Space} from "../types"
import {classNames} from "../utilities"
import {TabProps} from "../interface/Tabs"

export function Tabs({
  tabs,
  appearance = Appearance.PrimaryTransparent,
  active = Appearance.PrimaryFill,
}: TabProps) {
  return (
    <Tab.Group>
      <Tab.List
        className={classNames(
          `py-2 border-b border-primary dark:border-dark-primary`
        )}
      >
        {tabs.map((tab) => {
          return (
            <Tab as={Fragment} key={crypto.randomUUID()}>
              {({selected}) => (
                <Button
                  appearance={appearance}
                  isActive={selected}
                  active={active}
                  space={Space.VerySmallRight}
                >
                  {tab.name}
                </Button>
              )}
            </Tab>
          )
        })}
      </Tab.List>
      <Tab.Panels as={Fragment}>
        <div className="pt-4">
          {tabs.map((tab) => {
            return (
              <Tab.Panel key={crypto.randomUUID()}>{tab.content}</Tab.Panel>
            )
          })}
        </div>
      </Tab.Panels>
    </Tab.Group>
  )
}
