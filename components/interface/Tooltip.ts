/**
 * Hover solution: https://github.com/tailwindlabs/headlessui/discussions/425
 */

import { Trigger } from '../types/effect';

export interface TooltipProps {
  /**
   * Trigger type
   */
  trigger: Trigger;
  /**
   * Html element with tooltip behaviour, like text or icon
   */
  target: React.ReactNode;
  /**
   * Content displayed when tooltip is visible
   */
  children: React.ReactNode;
  /**
   * Allow navigation on tooltip panel without disabling it
   */
  isPanelHover?: boolean;
}
