import Image from 'next/image';

export default function LoadingImage() {
  return (
    <Image
      src="/images/app-loading.svg"
      alt="Loading image"
      width="60"
      height="100"
    />
  );
}
