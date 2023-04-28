import { Box } from "@mui/material";
import { ActivityComponent } from "./activity";
import { Typography } from '@mui/material'

const ActivitiesBox = () => {
    const activities = [
        { id: 1, title: 'Compra', subtitle: 'iShares MSCI Japan ETF', date: 'hace 4 min', value1: '2000', value2: '21,537', isPurchase: true },
        { id: 2, title: 'Venta', subtitle: 'iShares $ Corporate Bond ETF', date: '24 de Enero de 2021, 10:15 AM', value1: '500', value2: '12300', isPurchase: false },
        { id: 3, title: 'Venta', subtitle: 'Pimco Income - Cl. E (Acc)', date: '16 de Diciembre de 2020, 4:30 AM', value1: '1175', value2: '3577', isPurchase: false },
        { id: 4, title: 'Compra', subtitle: 'Petroleo Brasilero SA', date: '2 de Noviembre de 2021, 2:15 AM', value1: '10000', value2: '15300', isPurchase: true },
    ]

    return <Box sx={{ flex: 1 }}>
        <Typography variant='h4' color={'#4b484bee'}>
            Recent Activity
        </Typography>
        <Typography variant='body1'>
            Detailed list of document's status
        </Typography>
        <Box sx={{ mt: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {activities.map((i) => <ActivityComponent key={i.id}
                title={i.title}
                subtitle={i.subtitle}
                value1={i.value1}
                value2={i.value2}
                isPurchase={i.isPurchase}
                date={i.date}
            />)}
        </Box>
    </Box>
}

export default ActivitiesBox;