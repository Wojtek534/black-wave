import { classNames } from '../utilities';
import { Radius, Space } from '../types';
import { ImageProps } from '../interface';

export function Image({
  src,
  alt,
  space = Space.None,
  height = 'h-96',
  width = 'w-full',
  radius = Radius.Medium,
  ...props
}: ImageProps): JSX.Element {
  return (
    <img
      src={src}
      alt={alt}
      className={classNames(
        `object-cover border border-transparent ${radius} ${height} ${width} ${space}`,
      )}
      {...props}
    />
  );
}
