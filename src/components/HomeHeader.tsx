import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

interface HomeHeaderProps {
    welcomeText?: string;
    titleText?: React.ReactNode;
    searchPlaceholder?: string;
    sortOptions?: string[];
    buttonText?: React.ReactNode;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({
    welcomeText = 'Welcome back',
    titleText = 'Dashboard',
    searchPlaceholder = 'Search incident',
    sortOptions = ['Sort By: Date modified', 'Sort By: ID modified', 'Sort By: Number modified'],
    buttonText = 'Cypher AI'
}) => {
    return (
        <div className='flex items-center justify-between bg-[#E4E4E780] py-4 px-6 flex-wrap md:flex-nowrap'>
            <div className='mb-4 md:mb-0'>
                <p className='text-[12px] text-[#71717A]'>{welcomeText}</p>
                <p className='font-bold text-[26px]'>{titleText}</p>
            </div>
            <div className='flex gap-2 items-center flex-wrap md:flex-nowrap'>
                <div className="relative z-0 mb-2 md:mb-0">
                    <input
                        type="search"
                        placeholder={searchPlaceholder}
                        className="text-[#71717A] rounded-md py-2 px-4 border-2 border-gray-300 outline-none pl-10 w-full md:w-auto"
                    />
                    <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#71717A]" />
                </div>

                <select className='text-[#71717A] rounded-md py-2 px-4 border-2 border-gray-300 outline-none mb-2 md:mb-0'>
                    {sortOptions.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                <button
                    className='text-[#fafafa] bg-[#F26922] rounded-md p-3 px-5 flex items-center gap-2'
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default HomeHeader;
