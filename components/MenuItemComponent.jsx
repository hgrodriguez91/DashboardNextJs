import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useRouter } from 'next/router';

const MenuItemComponent = ({ title = '', children, styles = {}, showChevron = false, onClick = () => { } }) => {
    const { asPath } = useRouter()

    return <ListItemButton  sx={[ { paddingLeft: '20px' }, { backgroundColor: title?.toLowerCase() === asPath?.toLowerCase().replace('/', '') ? 'red' : 'unset' }]} onClick={onClick}>
        <ListItemIcon>
            {children}
        </ListItemIcon>
        <ListItemText primary={title}  sx={{color:'#fff'}}/>
        {showChevron && <ChevronRightIcon sx={{ color: '#fff' }} />}
    </ListItemButton>
}

export default MenuItemComponent;