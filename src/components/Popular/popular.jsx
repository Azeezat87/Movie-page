import React from 'react'


const Popular = () => {
  const popularList = [
    {
      image: '/most popular/day-shift.jpg',
      title: 'Day Shift',
      date: '2022-06-25',
    },
    {
      image: '/most popular/clerks.jpg',
      title: 'The Clerks',
      date: '2022-06-5',
    },
    {
      image: '/most popular/spiderhead.jpg',
      title: 'The Spiderhead',
      date: '2022-06-3',
    },
    {
      image: '/most popular/bullet-train.jpg',
      title: 'The Bullet Train',
      date: '2022-06-15',
    },
    {
      image: '/most popular/beast.jpg',
      title: 'The Beast',
      date: '2022-06-29',
    },
    {
      image: '/most popular/m3gan.jpg',
      title: 'Megan',
      date: '2022-06-27',
    },
    {
      image: '/most popular/the-forgiven.jpg',
      title: 'The Forgiven',
      date: '2022-06-23',
    },
    {
      image: '/most popular/bodies.jpg',
      title: 'Bodies Bodies Bodies',
      date: '2022-06-21',
    },
    {
      image: '/most popular/elvis-poster.jpg',
      title: 'Elvis',
      date: '2022-06-19',
    },
    {
      image: '/most popular/the-gray-man.jpg',
      title: 'The Gray Man',
      date: '2022-06-17',
    },
    {
      image: '/most popular/the-invitation.jpg',
      title: 'The Invitation',
      date: '2022-06-13',
    },
    {
      image: '/most popular/chip-n-dale.jpg',
      title: 'The Chip and Dale',
      date: '2022-06-11',
    },
    {
      image: '/most popular/samaritan.jpg',
      title: 'The Samaritan',
      date: '2022-06-9',
    },
    {
      image: '/most popular/thor-love-and-thunder.jpg',
      title: 'Thor Love and Thunder',
      date: '2022-06-7',
    },
    {
      image: '/most popular/vengeance.jpg',
      title: 'The Vengeance',
      date: '2022-06-1',
    },
  ];

  const PopularTv = [
    {
      image: '/most popular tv/bobs-burgers.jpg',
      title: 'Bobs Burgers',
      date: '2022-05-1',
    },
    {
      image: '/most popular tv/easter-sunday.jpg',
      title: 'Easter Sunday',
      date: '2022-05-3',
    },
    {
      image: '/most popular tv/on-the-count-of-three.jpg',
      title: 'On the Count of Three',
      date: '2022-05-5',
    },
    {
      image: '/most popular tv/the-bubble.jpg',
      title: 'The Bubble',
      date: '2022-05-7',
    },
    {
      image: '/most popular tv/paws-of-fury.jpg',
      title: 'Paws of Fury',
      date: '2022-05-9',
    },
    {
      image: '/most popular tv/all-the-old-knifes.jpg',
      title: 'All the Old Knifes',
      date: '2022-05-11',
    },
    {
      image: '/most popular tv/everything-everywhere-all-at-once.jpg',
      title: 'Everything Everywhere all at Once ',
      date: '2022-05-13',
    },
    {
      image: '/most popular tv/Panama.jpeg',
      title: 'Panama',
      date: '2022-05-15',
    },
    {
      image: '/most popular tv/avatar-the-way-of-water.jpg',
      title: 'Avatar: The Way of Water',
      date: '2022-05-17',
    },
    {
      image: '/most popular tv/memory.jpg',
      title: 'Memory',
      date: '2022-05-18',
    },
    {
      image: '/most popular tv/men.jpg',
      title: 'Men',
      date: '2022-05-19',
    },
    {
      image: '/most popular tv/the-bad-guys.jpg',
      title: 'The Bad Guys',
      date: '2022-05-20',
    },
    {
      image: '/most popular tv/crimes-of-the-future.jpg',
      title: 'Crimes of the Future',
      date: '2022-05-21',
    },
    {
      image: '/most popular tv/operation-mincemat.jpg',
      title: 'Operation Mincemat',
      date: '2022-05-22',
    },
    {
      image: '/most popular tv/the-northman.jpg',
      title: 'The Northman',
      date: '2022-05-23',
    },
  ];
  
  

  return (
    <section className='px-28 py-12'>
      <div className='flex'>
        <h3 className='mr-9 text-2xl font-bold'>Most Popular</h3>
        <button className='bg-red-100 hover:bg-red-200 h-9 w-16 border border-gray-300 rounded-l text-sm text-red-600 font-semibold'>
          MOVIES
        </button>
        <button className='h-9 w-9 border border-gray-300 hover:bg-gray-100 border-l-0 rounded-r text-sm text-gray-500 font-semibold'>
          TV
        </button>
      </div>
      <div className='flex gap-7 scrollbar-thin scrollbar-thumb-red-500'>
        {popularList.map((movies) => (
          <div className='my-10 border border-b-gray-400 border-b-2 bg-white w-52 flex-shrink-0 rounded-md drop-shadow-md'>
            <img className='h-52 w-52' src={movies.image} alt='' />
            <div className='pl-4 py-5'>
              <h3 className='text-lg font-semibold pb-2'>{movies.title}</h3>
              <p className='text-sm'>{movies.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Popular