import React from 'react';

const Bookmark = ({ bookmark }) => {

    const { title, cover, author, posted_date, reading_time } = bookmark;
    return (
        <div className='p-4 mb-4 border rounded'>
            <h3 className='text-xl font-bold'>{title}</h3>
            <img src={cover} alt={title} className='w-full h-48 object-cover' />
            <p className='text-sm'>By {author} on {posted_date}</p>
            <p className='text-sm'>Reading time: {reading_time}</p>
        </div>
    );
};

export default Bookmark;