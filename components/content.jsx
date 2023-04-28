import { Box } from "@mui/material";
import CardInfo from "./card-info";

export default function Content() {

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '30px', justifyContent:'space-between' , width:'100%' }}>
            <CardInfo title="USD 13.019.370,64" subtitle="Total Account" />
            <CardInfo title="USD 13.019.370,64" subtitle="Yield MTD" percent={18.2} color="#ff7471"/>
            <CardInfo title="USD 13.019.370,64" subtitle="Yield YTD" percent={18.2} color='#72E128'/>
            <CardInfo title="USD 13.019.370,64" subtitle="Total since Inception" percent={18.2} color='#72E128'/>
        </Box>
    )
}