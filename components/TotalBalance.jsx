import { MoreVertOutlined } from "@mui/icons-material";
import { Card, CardHeader, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const TotalBalance = () => {

    return <Box sx={{ flex: 1 }}>
        <Card sx={{ borderRadius: '10px' }} elevation={4}>
            <CardHeader
                action={<>
                    <IconButton >
                        <MoreVertOutlined />
                    </IconButton>
                </>
                }
                title={'Total Balance'}
            />
            <Doughnut data={data} options={options} />

        </Card>
    </Box>
}

export default TotalBalance;

export const data = {
    labels: ['Equities', 'Fixed Income', 'Hedge Funds'],
    datasets: [
        {
            data: [12, 19, 3,],
            backgroundColor: [
                '#ffc0ba',
                '#adebe1',
                '#ffe189',
            ],
            borderWidth: 1,
        },
    ],
};

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
        },
    }
}