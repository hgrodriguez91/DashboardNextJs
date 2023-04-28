import { MoreVertOutlined } from "@mui/icons-material";
import { Card, CardHeader, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import ReactECharts from 'echarts-for-react';

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
  
 <ReactECharts option={option} />
        </Card>
    </Box>
}

export default TotalBalance;



export const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        data: [
          { value: 1048, name: 'Equities' },
          { value: 735, name: 'Fixed Income' },
          { value: 484, name: 'Hedge Funds' },
        ]
      }
    ]
  };