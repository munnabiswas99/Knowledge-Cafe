import React from 'react';
import Profile from "../../assets/images/profile.png";
const Header = () => {
    return (
        <div className='flex justify-between items-center bg-gray-200 p-4'>
            <h1 className='text-3xl font-bold'>My Blogs</h1>
            <img src={Profile} alt="" />
        </div>
    );
};

export default Header;