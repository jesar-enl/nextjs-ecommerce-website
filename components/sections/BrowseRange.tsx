import * as React from 'react';
import { data } from '@/app/data';

export default function BrowseRange() {
  return (
    <section className="bg-white px-3 md:px-4 py-4 md:py-6">
      <h1 className="font-bold text-[28px] md:text-medium text-center mb-0">
        Browse Our Range
      </h1>
      <p className="text-center text-normal mt-2 text-custom-gray">
        Our products range from Suits, shirts and other fancy items at
        affordable prices.
      </p>
      <div className="flex flex-col md:flex-row gap-1 items-center justify-center">
        {data.map(({ title, image }) => (
          <div
            key={title}
            className="flex flex-col items-center justify-center rounded-lg mt-4 md:mt-6"
          >
            <img
              src={image}
              alt="browse-products"
              className="rounded h-[340px] w-[300px] object-cover"
            />
            <p className="text-normal text-custom-black font-semibold my-2">
              {title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
