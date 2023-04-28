import { MoreVertOutlined } from "@mui/icons-material";
import { Card, CardHeader, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import {
    Chart as ChartJS, CategoryScale, LinearScale, PointElement,
    LineElement, Title, Tooltip, Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


const WeeklyOverview = () => {

    return <Box sx={{ flex: 2, maxHeight: '100px' }}>
        <Card sx={{ borderRadius: '10px' }} elevation={4}>
            <CardHeader
                action={<>
                    <IconButton >
                        <MoreVertOutlined />
                    </IconButton>
                </>
                }
                title={'Weekly Overview'}
            />

            <Line data={data} />

        </Card>
    </Box>
}

export default WeeklyOverview;





const labels = ['Monday', 'Thursday', 'Wednesday', 'Tuesday', 'Friday'];

export const data = {
    labels,
    datasets: [
        {
            label: '',
            data: [52, 56, 78, 12, 23,],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },

    ],
};


