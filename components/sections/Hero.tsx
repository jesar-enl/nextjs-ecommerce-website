import * as React from 'react';
import MainButton from '../common/MainButton';

export default function Hero() {
  return (
    <section className="bg-hero w-full flex justify-center items-end flex-col h-[600px] bg-cover bg-no-repeat">
      <div className="bg-[#f2f3e3] mx-3 md:mr-[56px] px-4 md:px[39px] rounded-[10px inline-block pt-[37px] md:pt-[63px] pb-[37px] max-w-md">
        <p className="text-custom-black text-normal font-bold tracking-wider">
          New Arrival
        </p>
        <h1 className="text-custom-primary font-bold text-header md:text-large">
          Discover Our New Collection
        </h1>
        <p className="text-custom-gray text-[18px] mb-[46px]">
          Check out the new items in stock by browsing through the categories
          below.
        </p>
        <MainButton text={'BUY NOW'} classes="font-bold w-[222px]" />
      </div>
    </section>
  );
}
