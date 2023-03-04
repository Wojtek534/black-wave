import {Appearance, Space} from "../types"

export interface PanelProps {
  /**
   * Text displayed in panels' header left side
   */
  name?: string
  /**
   * Actions displayed in panel's header right side
   */
  action?: React.ReactNode
  /**
   * Component appearance
   */
  appearance?: Appearance
  /**
   *  Margin around button
   */
  margin?: Space
  /**
   * Show / hide panel's header
   */
  showHeader?: boolean
  /**
   * Panel's content
   */
  children: React.ReactNode
}
