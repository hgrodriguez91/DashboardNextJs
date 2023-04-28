import { Box, Card, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import upArrow from 'public/images/up.svg'
import downArrow from 'public/images/down.svg'


export const ActivityComponent = ({ title, subtitle, date, value1, value2, isPurchase = false }) => {
    return (
        <Card sx={{ display: 'flex', flexDirection: 'row', gap: '20px', padding: '15px', borderRadius: '10px', alignItems: 'center' }} elevation={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: isPurchase ? '#FF5B5B26' : '#2ED6A326', width: '70px', height: '70px', justifyContent: 'center', borderRadius: '10px' }}>
                <Image src={isPurchase ? upArrow : downArrow} style={{}} width={30} height={30} alt='Arrow Up' />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Typography variant='h5'>{title}</Typography>
                    <Typography variant='h6' sx={{ color: isPurchase ? 'red' : '#00A389', fontWeight: '700' }}>{value1} USD</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Typography variant='body1'>{subtitle}</Typography>
                    <Typography variant='h6' sx={{ color: isPurchase ? 'red' : '#00A389' }}>{value2}</Typography>
                </Box>
                <Box>
                    <Typography variant='caption' color={'GrayText'}>{date}</Typography>
                </Box>
            </Box>

        </Card>
    )
}
