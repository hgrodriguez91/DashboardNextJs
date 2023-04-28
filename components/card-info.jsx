import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Box, Typography } from '@mui/material';

export default function CardInfo({ title, subtitle, percent, color = '' }) {
    return (
        <>
            <Card sx={{ minWidth: 320, flex: 1, borderRadius: '10px',padding:'20px', paddingLeft:'40px' }} elevation={4}>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', alignContent: 'center' }}>
                    <Box >
                        <Typography variant='h5' sx={{ fontWeight: '700' }} color={'#4b484bee'}>
                            {title}
                        </Typography>
                    </Box> 
                   { percent &&
                    <Box sx={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                        <IconButton >
                            <ExpandLessIcon sx={{ color: color }} />
                        </IconButton>
                        <Typography style={{ color: color }}>
                            {percent}
                        </Typography>
                    </Box>}
                </Box>
                <Box>
                    <Typography >
                        {subtitle}
                    </Typography>
                </Box>
            </Card>
        </>
    )
}