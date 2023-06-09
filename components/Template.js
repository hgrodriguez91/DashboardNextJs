import { Box } from '@mui/material'
import React from 'react'
import NavBar from './navbar'
import SideBarMenu from './sidebar'
import Head from 'next/head'

const Template = ({ children }) => {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box>
                <NavBar />
                <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                    <SideBarMenu />
                    <Box sx={{ padding: '40px', flex: 5, display: 'flex', flexDirection: 'column' }}>
                        {children}
                    </Box>
                </Box>
            </Box>
        </>

    )
}

export default Template