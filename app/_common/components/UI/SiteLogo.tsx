import Image from 'next/image';

export default function SiteLogo() {
  return (
    <Image
      src={'/images/logo.png'}
      width={248}
      height={86}
      alt={`Duplo's Logo`}
      style={{
        zoom: 0.8,
      }}
    />
  );
}
