import { Box } from "@mui/material";
import { Typography, Chip } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const InformationBox = () => {

    const getStyleChip = (status) => {
        switch (status) {
            case 'Signed':
                return { backgroundColor: '#eefbe5', color: '#72E128' }
                break;
            case 'Rejected':
                return { backgroundColor: '#ffe9e9', color: '#ff7471' }
                break;
            case 'Pending':
                return { backgroundColor: '#fdb528', color: '#fff' }
                break;
            default:
                return { backgroundColor: '#fdb528', color: '#FF4D49' }
                break;
        }
    }

    const rows = [
        { id: 1, name: 'Certificado de Domicilio', status: 'Pending' },
        { id: 2, name: 'Acta de Matrimonio', status: 'Rejected' },
        { id: 3, name: 'Acta de Matrimonio', status: 'Signed' },
        { id: 4, name: 'Acta de Matrimonio', status: 'Signed' }
    ];

    const columns = [{
        flex: 0.25,
        field: "name",
        headerName: 'DOCUMENTS',
        renderCell: ({ row }) => <Typography variant='body1'>{row?.name}</Typography>
    }, {
        flex: 0.25,
        field: "status",
        headerName: 'STATUS',
        renderCell: ({ row }) => <Chip label={row?.status} sx={getStyleChip(row.status)} />
    },
    {
        field: "id",
        flex: 0.25,
        headerName: 'ACTIONS',
        renderCell: ({ row }) => (
            <Box color={'GrayText'}>
                <IconButton>
                    <DeleteOutlineIcon color={'#7e7e7e'} />
                </IconButton>
                <IconButton>
                    <RemoveRedEyeIcon color={'#7e7e7e'} />
                </IconButton>
                <IconButton>
                    <MoreVertIcon color={'#7e7e7e'} />
                </IconButton>
            </Box>)
    }
    ]

    return <Box sx={{ flex: 2 }}>
        <Typography variant='h4' color={'#4b484bee'}>
            Information Box
        </Typography>
        <Typography variant='body1'>
            Detailed list of document's status
        </Typography>

        <DataGrid
            autoHeight
            rows={rows}
            getRowId={row => row?.id}
            columns={columns}
            disableSelectionOnClick
            disableRowSelectionOnClick
            sx={{ borderTopRightRadius: '20px',borderTopLeftRadius: '20px', mt: '20px', overflow: 'hidden', borderLeftColor: 'transparent', borderRightColor: 'transparent', borderTopColor: 'transparent' }}
            hideFooter
            checkboxSelection
        />

    </Box>
}

export default InformationBox;