import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

interface IncidentType {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
}

const incidentTypes: IncidentType[] = [
    {
        id: 1,
        title: 'What type of incident?',
        description: 'Choose the category that best describes the incident.',
        icon: <svg width="65" viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_644)">
                <path d="M30.875 32.85L37.625 44.5275C40.702 42.751 43.2574 40.1962 45.0346 37.1196C46.8119 34.043 47.7483 30.553 47.75 27H34.25C34.2508 28.1856 33.9392 29.3505 33.3468 30.3775C32.7543 31.4044 31.9018 32.2572 30.875 32.85Z" fill="#FB923C" stroke="#FB923C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M30.875 21.1483L37.625 9.4708C34.5466 7.69349 31.0546 6.75781 27.5 6.75781C23.9454 6.75781 20.4534 7.69349 17.375 9.4708L24.125 21.1483C25.1511 20.5559 26.3151 20.244 27.5 20.244C28.6849 20.244 29.8489 20.5559 30.875 21.1483Z" fill="#FB923C" stroke="#FB923C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M24.125 32.85L17.375 44.5275C14.298 42.751 11.7426 40.1962 9.96536 37.1196C8.18814 34.043 7.25167 30.553 7.25 27H20.75C20.7492 28.1856 21.0608 29.3505 21.6532 30.3775C22.2457 31.4044 23.0982 32.2572 24.125 32.85Z" fill="#FB923C" stroke="#FB923C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_1_644">
                    <rect width="54" height="54" fill="white" transform="translate(0.5)" />
                </clipPath>
            </defs>
        </svg>
        ,
    },
    {
        id: 2,
        title: 'Tell us about the incident?',
        description: 'Let’s connect the dots and see where to start.',
        icon: <svg width="65" viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_653)">
                <path d="M32 6.75V15.75C32 16.3467 32.2371 16.919 32.659 17.341C33.081 17.7629 33.6533 18 34.25 18H43.25" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M38.75 47.25H16.25C15.0565 47.25 13.9119 46.7759 13.068 45.932C12.2241 45.0881 11.75 43.9435 11.75 42.75V11.25C11.75 10.0565 12.2241 8.91193 13.068 8.06802C13.9119 7.22411 15.0565 6.75 16.25 6.75H32L43.25 18V42.75C43.25 43.9435 42.7759 45.0881 41.932 45.932C41.0881 46.7759 39.9435 47.25 38.75 47.25Z" fill="#FB923C" stroke="#FB923C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M25.25 31.5H27.5V40.5H29.75" stroke="#18181B" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M27.5 24.75H27.5225" stroke="#18181B" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_1_653">
                    <rect width="54" height="54" fill="white" transform="translate(0.5)" />
                </clipPath>
            </defs>
        </svg>
        ,
    },
    {
        id: 3,
        title: 'Where did the incident occur?',
        description: 'Lorem ipsum dolar sit general sac mascho werho',
        icon: <svg width="65" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_663)">
                <path d="M34.1674 8.50074C37.1967 11.5296 38.9292 15.618 38.9987 19.9012C39.0681 24.1844 37.4691 28.3267 34.5396 31.4522L34.1674 31.8372L26.3886 39.6142C25.4016 40.6006 24.0765 41.175 22.6819 41.2209C21.2872 41.2669 19.9272 40.781 18.8774 39.8617L18.6134 39.6142L10.8328 31.8354C7.7384 28.741 6 24.5442 6 20.1681C6 15.792 7.7384 11.5951 10.8328 8.50074C13.9271 5.40637 18.124 3.66797 22.5001 3.66797C26.8762 3.66797 31.0731 5.40637 34.1674 8.50074ZM22.5001 14.6681C21.7778 14.6681 21.0626 14.8103 20.3953 15.0867C19.7281 15.3631 19.1217 15.7683 18.611 16.279C18.1003 16.7897 17.6952 17.396 17.4188 18.0633C17.1424 18.7306 17.0001 19.4458 17.0001 20.1681C17.0001 20.8903 17.1424 21.6055 17.4188 22.2728C17.6952 22.9401 18.1003 23.5464 18.611 24.0572C19.1217 24.5679 19.7281 24.973 20.3953 25.2494C21.0626 25.5258 21.7778 25.6681 22.5001 25.6681C23.9588 25.6681 25.3577 25.0886 26.3892 24.0572C27.4206 23.0257 28.0001 21.6268 28.0001 20.1681C28.0001 18.7094 27.4206 17.3104 26.3892 16.279C25.3577 15.2475 23.9588 14.6681 22.5001 14.6681Z" fill="#FB923C" />
            </g>
            <defs>
                <clipPath id="clip0_1_663">
                    <rect width="44" height="44" fill="white" transform="translate(0.5)" />
                </clipPath>
            </defs>
        </svg>
        ,
    },
];

function ManageIncidents() {
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-6 px-4 pt-20">
            <div className="text-center w-full md:w-2/3 lg:w-1/3">
                <p className="text-[24px] md:text-[28px] lg:text-[32px] font-bold">Let’s get started</p>
                <p className="text-[#71717A] text-[14px] md:text-[16px]">
                    Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit gene
                </p>
            </div>
            <div>
                <svg width="100%" height="29" viewBox="0 0 610 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="6" y="13" width="598" height="3" fill="#E4E4E7" />
                    <circle cx="15" cy="14.5" r="14.5" fill="#E4E4E7" />
                    <circle cx="305" cy="14.5" r="14.5" fill="#E4E4E7" />
                    <circle cx="595" cy="14.5" r="14.5" fill="#E4E4E7" />
                </svg>
            </div>
            <div className="flex flex-wrap justify-center gap-12 pb-5">
                {incidentTypes.map((incident) => (
                    <div
                        key={incident.id}
                        className="flex flex-col justify-between h-auto md:h-[269px] w-full md:w-[290px] bg-[#F4F4F5] rounded-lg border border-solid border-[#E4E4E7] p-4"
                    >
                        <div>{incident.icon}</div>
                        <div>
                            <p className="text-[16px] md:text-[20px] font-bold pb-0">{incident.title}</p>
                            <p className="text-[#71717A] text-[14px] md:text-[16px] pt-1">{incident.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Button
                component={Link}
                to="/incidents/new-incident/started"
                sx={{
                    borderRadius: '5px',
                    background: '#F26922',
                    fontWeight: 'bold',
                    color: '#fff',
                    px: '25px',
                    '&:hover': {
                        background: '#D65A1F', // Optional hover effect
                    },
                }}
            >
                Get Started
            </Button>
        </div>
    );
}

export default ManageIncidents;
