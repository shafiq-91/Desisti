import React from 'react'
import HomeHeader from '../components/HomeHeader'

function Incidents() {
    return (
        <>
            <HomeHeader
                welcomeText="Home - Incidents - New Incident"
                titleText='New Incident'
                buttonText={
                    <>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_1108)">
                                <path d="M8 3.33203L8 12.6654" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M3.33398 8L12.6673 8" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_1108">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        Manage Incidents{' '}
                    </>
                }
            />
        </>
    )
}

export default Incidents