import React from 'react';

export const CrewDetails = ({ crewMember }) => {
  return (
    <div className='flex h-full items-center w-full'>
      <div className='flex  flex-col pt-28 items-start w-full py-12 h-full'>
        <h2 className='text-[32px] font-Bellefair uppercase opacity-40 mb-2'>{crewMember.role}</h2>
        <h1 className='text-[56px] w-full font-Bellefair uppercase'>{crewMember.name}</h1>
        <p className='font-Barlow text-SoftViolet font-normal text-[18px] max-w-[444px] leading-relaxed mt-4'>
          {crewMember.bio}
        </p>
      </div>

      <figure className=' shrink h-[470px] flex justify-end'>
        <img className='max-w-[468px] h-auto' src={crewMember.images.png} alt={crewMember.name} />
      </figure>

    </div>
  );
};
