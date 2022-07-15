import React from 'react'

const Card = () => {
  return (
    <section className='bg-white'>
      <div
        style={{ backgroundImage: `url('https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/01/IMDb-list-of-10-most-anticipated-films-of-2022.jpg?fit=1200%2C900&ssl=1')` }}
        className='h-[80vh] w-screen'
      >
        <div className='absolute z-0 left-0 top-0 h-[80vh] w-full bg-black/70' />

        <div className='flex flex-col justify-center h-full p-28 relative'>
          <h1 className='text-white text-3xl font-bold mb-10'>
            Unlimited movies, TV shows, and more.
          </h1>
          <form>
            <input
              type='text'
              placeholder='search here...'
              name='search'
              className='h-10 w-[430px] p-3 outline-none'
            />
            <button
              type='submit'
              className='bg-red-600 h-10 w-24 text-white font-semibold rounded-r'
            >
              SEARCH
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Card