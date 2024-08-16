import * as React from 'react';

import Header from '@/components/Header';
import BrowseRange from '@/components/sections/BrowseRange';
import Footer from '@/components/sections/Footer';
import Gallery from '@/components/sections/Gallery';
import Hero from '@/components/sections/Hero';
import Products from '@/components/sections/Products';
import RoomCTA from '@/components/sections/RoomCTA';

export default function Home() {
  return (
    <main>
      <Header />
      <div className="flex flex-col gap-[56px]">
        <Hero />
        <BrowseRange />
        <Products />
        <RoomCTA />
        <Gallery />
        <Footer />
      </div>
    </main>
  );
}
