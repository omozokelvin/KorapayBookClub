'use client';

import AllBooks from '@/app/_common/components/forPages/home/AllBooks';
import FeaturedBooks from '@/app/_common/components/forPages/home/FeaturedBooks';
import RecentlyAdded from '@/app/_common/components/forPages/home/RecentlyAdded';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Home() {
  return (
    <>
      <FeaturedBooks />
      <RecentlyAdded />
      <AllBooks />
    </>
  );
}
