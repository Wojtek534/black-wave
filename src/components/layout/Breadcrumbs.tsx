import { Navigate } from '../common';
import { Icon } from '../common/Icon';
import { Appearance, IconList } from '../types';

interface BreadcrumbsProps {
  items: Array<BreadcrumbsItem>;
}

interface BreadcrumbsItem {
  name: string;
  url: string;
}

export function Breadcrumbs({ items }: BreadcrumbsProps): JSX.Element {
  return (
    <div className="flex items-center my-1">
      {items.map((item, index) => {
        return (
          <>
            <Navigate appearance={Appearance.GrayTransparent}>{item.name}</Navigate>
            {items.length !== index + 1 ? (
              <div className="mx-1">
                <Icon icon={IconList.CHEVRON_RIGHT} />
              </div>
            ) : (
              ''
            )}
          </>
        );
      })}
    </div>
  );
}
