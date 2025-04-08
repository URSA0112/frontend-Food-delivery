'use client'
import React, { useState } from 'react';

import Logo from './Logo';
import Input from './Input';
import Order from './OrderSidebar';
import User from './User';




export default function Header() {


    return (
        <header className="bg-white dark:bg-black flex flex-wrap items-center p-4 relative shadow-xl dark:shadow-orange-600 ">

            <div className='xl:ml-8'>
                <Logo></Logo>
            </div>

            <nav id="Container right header side"
                className="flex self-center items-center gap-3 sm:mt-0 mt-1 ml-5 absolute right-2 xl:right-10">
                <Input></Input>
                <Order></Order>
                <User></User>
            </nav>

        </header>
    );
};

