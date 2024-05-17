import React from 'react';

export const TechnologyDetails = ({ technology }) => {
  return (
    <div className='flex pl-16 gap-12 items-center justify-end w-full'>
      <div className='flex flex-col w-full mb-12'>
        <h3 className='font-BarlowCondensed text-[16px] text-SoftViolet'>THE TERMINOLOGY…</h3>
        <h2 className='text-[32px] font-Bellefair uppercase tracking-[2px] mb-2'>{technology.name}</h2>
        <p className='font-Barlow text-SoftViolet font-normal text-[18px] max-w-[470px] leading-relaxed mt-4'>
          {technology.description}
        </p>
      </div>

      <figure className='w-full flex justify-center'>
        <img className='max-w-[568px] h-auto' src={technology.images.portrait} alt={technology.name} />
      </figure>
    </div>
  );
};
