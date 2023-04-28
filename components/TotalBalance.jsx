import { MoreVertOutlined } from "@mui/icons-material";
import { Card, CardHeader, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import ReactECharts from 'echarts-for-react';

const TotalBalance = () => {

  return <Box sx={{ flex: 1 }}>
    <Card sx={{ borderRadius: '10px', padding:'30px' }} elevation={4}>
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
  legend: {
    top: 'bottom',
    icon: 'circle'
  },
  series: [
    {
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      data: [
        { value: 1048, name: 'Equities', itemStyle: { color: '#ffb2ab' } },
        { value: 735, name: 'Fixed Income', itemStyle: { color: '#ffe189' } },
        { value: 580, name: 'Hedge Funds', itemStyle: { color: '#adebe1' } },
      ]
    }
  ]
};