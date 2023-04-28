
import { Inter } from 'next/font/google'
import Content from '../../components/content'
import Box from '@mui/material/Box';
import Template from '../../components/Template'
import ActivitiesBox from '../../components/ActivitiesBox';
import InformationBox from '../../components/InformationBox';
import { Card, CardHeader, IconButton } from '@mui/material';
import { MoreVertOutlined } from '@mui/icons-material';
import TotalBalance from '../../components/TotalBalance';
import WeeklyOverview from '../../components/WeeklyOverview';

export default function Home() {
    return (
        <Template>
            <Content />
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '30px', mt: '30px' }}>
                <TotalBalance />
                <WeeklyOverview />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '30px', mt: '30px' }}>
                <InformationBox />
                <ActivitiesBox />
            </Box>
        </Template>
    )
}

