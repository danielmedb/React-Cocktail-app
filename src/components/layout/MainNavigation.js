import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBeer } from 'react-icons/fa';
import SearchField  from '../SearchField';

const MainNavigation = ({ onSearch, onSearchChange }) => {
    return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-400 mb-3">
      <div className="container flex flex-wrap">
          <div class="relative flex w-full px-4 flex-wrap items-stretch lg:ml-auto">
          <div className="flex">
            <span className="font-normal leading-snug flex text-center white-space-no-wrap border border-solid border-gray-600 rounded-full text-sm bg-gray-100 items-center rounded-r-none pl-2 py-1 text-gray-800 border-r-0 placeholder-gray-300">
              <FaBeer style={{color: 'grey'}}/>
            </span>
          </div>
          <SearchField handleChange={(e) => onSearchChange(e.target.value)} />
        </div>
      </div>
    </nav>
    )
}

export default MainNavigation
