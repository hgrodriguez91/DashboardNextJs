import { MoreVertOutlined } from "@mui/icons-material";
import { Card, CardHeader, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import ReactECharts from 'echarts-for-react';




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

            <ReactECharts option={option} />

        </Card>
    </Box>
}

export default WeeklyOverview;


export const option = {
    xAxis: {
        type: 'category',
    },
    yAxis: {
        type: 'value'
    },
    
    series: [
        {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
        }
    ]
};


