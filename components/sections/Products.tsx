'use client';
import * as React from 'react';

import { products } from '@/app/data';
import { cn } from '@/lib/utils';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';
// import { motion } from 'framer-motion';

export default function Products() {
  return (
    <section className="flex flex-col items-center justify-center">
      <h1 className="text-custom-black text-header font-bold">Our Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 mx-4 relative">
        {/* 
        - Reduce the opacity of the product card
        - Allow the overlay cary card to have some spring effect and come from the right hand side.
        */}
        {products.map(
          ({
            image,
            title,
            description,
            price,
            otherPrice,
            type,
            typeValue,
          }) => (
            <div
              key={title}
              className="bg-gray-100 flex flex-col gap-4 my-3 mx-1 rounded shadow-md"
            >
              <div className="relative">
                <img src={image} alt={title} className="h-[280px]" />
                {typeValue && (
                  <div
                    className={cn(
                      'w-12 h-12 rounded-full font-medium text-normal px-2 text-white flex items-center justify-center absolute top-1 right-1',
                      type === 'DISCOUNTED'
                        ? 'bg-custom-error'
                        : type === 'NEW'
                        ? 'bg-custom-success'
                        : ''
                    )}
                  >
                    {typeValue}
                  </div>
                )}
              </div>
              <div className="mx-3 mb-4 flex flex-col justify-between">
                <p className="text-custom-black text-[24px] font-semibold">
                  {title}
                </p>
                <p className="text-custom-gray text-normal font-medium">
                  {description}
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-custom-black text-[20px] font-semibold">
                    {price}
                  </p>
                  {type === 'DISCOUNTED' ? (
                    <p className="text-gray-400 line-through">{otherPrice}</p>
                  ) : (
                    <p className="text-gray-400">{otherPrice}</p>
                  )}
                </div>
              </div>
            </div>
          )
        )}
      </div>
      {/* overlay status */}
      <div></div>
      <Link
        href="/shop"
        className="flex text-custom-primary hover:text-custom-black border border-custom-primary px-3 md:px-5 py-2 rounded-md text-[14px] gap-1 items-center mt-6"
      >
        <span>View more</span>
        <ArrowRightIcon size={24} />
      </Link>
    </section>
  );
}
