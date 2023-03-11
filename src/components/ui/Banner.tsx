import { Icon } from '../common/Icon';
import { IconList } from '../types/icon';

interface BannerProps {
  children: React.ReactNode;
}

export function Banner({ children }: BannerProps): JSX.Element {
  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden text-gray-200 bg-gray-800 py-2.5 px-6 sm:px-3.5 sm:before:flex-1">
      <div className="flex flex-wrap items-center gap-y-2 gap-x-4">{children}</div>
      <div className="flex flex-1 justify-end">
        <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
          <span className="sr-only">Dismiss</span>
          <Icon icon={IconList.X_MARK}></Icon>
        </button>
      </div>
    </div>
  );
}
