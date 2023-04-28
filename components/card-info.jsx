import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Typography } from '@mui/material';

export default function CardInfo({ title, subtitle, percent, color = '' }) {
    return (
        <>
            <Card sx={{ minWidth: 320, flex: 1, borderRadius: '10px' }} elevation={4}>
                <CardHeader
                    action={percent && <>
                        <IconButton >
                            <ExpandLessIcon sx={{ color: color }} />
                        </IconButton>
                        <span style={{ color: color }}>
                            18.2 %
                        </span>
                    </>
                    }
                    title={title}
                    subheader={subtitle}
                />
            </Card>
        </>
    )
}