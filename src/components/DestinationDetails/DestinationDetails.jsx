import React from 'react';

export const DestinationDetails = ({ destination }) => {
  return (
    <div className='flex gap-48'>

      <figure className='animate-spin-slow'>
        <img src={destination.images.png} alt={destination.name} />
      </figure>

      <div className='flex flex-col'>
        <h2 className="text-[100px] font-Bellefair uppercase">{destination.name}</h2>
        <p className="pb-12 w-[444px] font-Barlow text-SoftViolet font-normal text-[18px]">{destination.description}</p>
        <div className='h-[1px] w-[444px] text-white bg-white opacity-20 mb-6'></div>
        <div className="flex justify-between w-[370px]">
          <div>
            <h3 className="uppercase font-normal text-SoftViolet font-BarlowCondensed text-[14px]">Avg. Distance</h3>
            <p className='font-Bellefair text-[28px]'>{destination.distance}</p>
          </div>
          <div>
            <h3 className="uppercase font-normal text-SoftViolet font-BarlowCondensed text-[14px">Est. Travel Time</h3>
            <p className='font-Bellefair text-[28px]'>{destination.travel}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
