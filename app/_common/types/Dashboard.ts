export interface NavListItem {
  title?: string;
  items: Array<{
    name: string;
    link: string;
    count?: number;
    isNotification?: boolean;
  }>;
}
