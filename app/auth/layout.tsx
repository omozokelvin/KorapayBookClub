import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function Layout(props: Props) {
  const { children } = props;

  return <>{children}</>;
}
