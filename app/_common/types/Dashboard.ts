import { ReactNode } from 'react';

export interface NavListItem {
  title: string;
  items: Array<{
    name: string;
    link: string;
    icon: (light: boolean) => ReactNode;
  }>;
}
