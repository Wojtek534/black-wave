/* eslint-disable @typescript-eslint/no-explicit-any */
export function classNames(...classes: any): any {
  return classes.filter(Boolean).join(' ');
}
