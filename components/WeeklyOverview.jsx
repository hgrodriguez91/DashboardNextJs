import { MoreVertOutlined } from "@mui/icons-material";
import { Card, CardHeader, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import ReactECharts from 'echarts-for-react';




const WeeklyOverview = () => {

    return <Box sx={{ flex: 2, maxHeight: '100px' }}>
        <Card sx={{ borderRadius: '10px', padding:'30px' }} elevation={4}>
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
        show: false,
        type: 'category',

    },
    yAxis: {
        type: 'value',
        show: false
    },
    axisPointer: {
        snap: false,
        lineStyle: {
            type: 'solid',
            height: 500
        }
    },
    lineStyle: {
        color: '#c890e7',
    },
    legend: {
        show: true
    },
    series: [
        {
            label: 'Shit',
            data: [2, 3, 1, 5, 2, 3, 2, 4],
            type: 'line',
            smooth: true,
            showSymbol: false,
            lineStyle: {
                width: 6
            }

        }
    ]
};


