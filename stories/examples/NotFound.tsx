/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable no-empty-pattern */
import { Navigate } from '../../components/common/Navigate';
import { Appearance, NavigationSize, Radius } from '../../components/types';

interface NotFoundProps {}

export function NotFound({}: NotFoundProps): JSX.Element {
  return (
    <div className="flex flex-col items-center">
      <p className="text-lg font-semibold">404</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-6 text-base leading-7 text-gray-600">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <div className="mt-6 flex items-center justify-center gap-x-6">
        <Navigate
          appearance={Appearance.GrayFill}
          radius={Radius.Full}
          navigationSize={NavigationSize.VeryLarge}
        >
          Go back home
        </Navigate>
      </div>
    </div>
  );
}
