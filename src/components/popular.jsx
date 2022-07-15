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
  
  

  return (
    <section className='px-28 py-14'>
      <div className='flex'>
        <h3 className='mr-9 text-2xl font-bold'>Most Popular</h3>
        <button className='bg-red-100 h-9 w-16 border border-gray-300 rounded-l text-sm text-red-600 font-semibold'>
          MOVIES
        </button>
        <button className='h-9 w-9 border border-gray-300 border-l-0 rounded-r text-sm text-gray-500 font-semibold'>
          TV
        </button>
      </div>
      <div className='flex gap-7'>
        {popularList.map((movies) => (
          <div className='my-10 border bg-white w-52 flex-shrink-0 rounded-md overflow-hidden'>
            <img className='h-52 w-52' src={movies.image} alt='' />
            <div className='p-6'>
              <h3>{movies.title}</h3>
              <p>{movies.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Popular