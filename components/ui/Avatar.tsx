import { Image } from '../common/Image';

interface AvatarProps {
  src: string;
}

export function Avatar({ src }: AvatarProps): JSX.Element {
  return (
    <Image src={src} alt="user avatar" height="h-12" width="w-12" radius="rounded-full"></Image>
  );
}
