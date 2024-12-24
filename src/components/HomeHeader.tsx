import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

interface HomeHeaderProps {
    welcomeText?: string;
    titleText?: React.ReactNode;
    searchPlaceholder?: string;
    sortOptions?: string[];
    buttonText?: React.ReactNode;
    cross?: 'show' | 'hidden';  // For showing/hiding the cross
    rangeBar?: 'show' | 'hidden';  // For showing/hiding the range bar
    secondaryButton?: 'show' | 'hidden';  // For showing/hiding the secondary button
    secondaryText?: string;  // Text for the secondary button
    search?: 'show' | 'hidden';  // For showing/hiding the search input
    select?: 'show' | 'hidden';  // For showing/hiding the select dropdown
}

const HomeHeader: React.FC<HomeHeaderProps> = ({
    welcomeText = 'Welcome back',
    titleText = 'Dashboard',
    searchPlaceholder = 'Search incident',
    sortOptions = ['Sort By: Date modified', 'Sort By: ID modified', 'Sort By: Number modified'],
    buttonText = 'Cypher AI',
    cross = 'hidden',
    rangeBar = 'hidden',
    secondaryButton = 'hidden',
    secondaryText = 'Back',
    search = 'show',
    select = 'show',
}) => {
    const [showCross, setShowCross] = useState(false);

    const handleCrossClick = () => {
        setShowCross(!showCross);
    };

    return (
        <div className='flex items-center justify-between bg-[#E4E4E780] py-4 px-6 flex-wrap md:flex-nowrap'>
            <div className='mb-4 md:mb-0 flex gap-2'>
                {cross === 'show' && (
                    <button
                        onClick={handleCrossClick}
                        className='text-[#71717A]'>
                        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="21" cy="21" r="20" fill="#FAFAFA" stroke="#E4E4E7" />
                            <g clipPath="url(#clip0_1_705)">
                                <path d="M24.9067 17.0947L16.5607 25.4407" stroke="#71717A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16.561 17.0947L24.907 25.4407" stroke="#71717A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_705">
                                    <rect width="20.2338" height="20.2338" fill="white" transform="translate(10.6167 11.1494)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                )}
                <div>
                    <p className='text-[12px] text-[#71717A]'>{welcomeText}</p>
                    <p className='font-bold text-[26px]'>{titleText}</p>
                </div>
            </div>
            {rangeBar === 'show' && (
                <svg width="528" className='p-4 pt-1' viewBox="0 0 528 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="527" height="5" rx="2.5" fill="#E5E7EB" />
                    <rect x="0.5" y="0.5" width="98" height="5" rx="2.5" fill="#FB923C" />
                </svg>
            )}
            <div className='flex gap-2 items-center flex-wrap md:flex-nowrap'>
                {search === 'show' && (
                    <div className="relative z-0 mb-2 md:mb-0 w-full md:w-auto">
                        <input
                            type="search"
                            placeholder={searchPlaceholder}
                            className="text-[#71717A] rounded-md py-2 px-4 border-2 border-gray-300 outline-none pl-10 w-full md:w-auto"
                        />
                        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#71717A]" />
                    </div>
                )}
                {select === 'show' && (
                    <select className='text-[#71717A] rounded-md py-2 px-4 border-2 border-gray-300 outline-none mb-2 md:mb-0 w-full md:w-auto'>
                        {sortOptions.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                )}
                {secondaryButton === 'show' && (
                    <button
                        className='bg-[#FAFAFA] text-[#71717A] border border-solid border-[#ddd] rounded-md px-12 py-2 flex items-center gap-2'>
                        {secondaryText}
                    </button>
                )}
                <button
                    className='text-[#fafafa] bg-[#F26922] rounded-md py-2 px-10 flex items-center gap-2'>
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default HomeHeader;
