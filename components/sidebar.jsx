import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';

import HomeIcon from '@mui/icons-material/Home';
import TableRowsIcon from '@mui/icons-material/TableRows';
import TableChartIcon from '@mui/icons-material/TableChart';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SchemaIcon from '@mui/icons-material/Schema';
import SellIcon from '@mui/icons-material/Sell';
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuItemComponent from './MenuItemComponent'
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';



export default function SideBarMenu() {
    const { push } = useRouter()

    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
    };

    const [showMenu, setShowMenu] = React.useState(false);

    return (

        <Box sx={{ flex: 1, backgroundColor: '#013566', pt: '20px' }}>
            <MenuItemComponent title="Personal Information" style={{ width: '100%', background: 'transparent', color: '#fff' }}>
                <HomeIcon sx={{ color: '#fff' }} />
            </MenuItemComponent>

            <List
                sx={{ width: '100%', background: 'transparent', color: '#fff' }}
                component="nav"
            >
                <Typography variant='caption' sx={{ paddingLeft: '20px' }}>
                    YOUR ACCOUNT
                </Typography>
                <MenuItemComponent title="Transfers">
                    <SwapHorizIcon sx={{ color: '#fff' }} />
                </MenuItemComponent>

                <MenuItemComponent title="Activity">
                    <SellIcon sx={{ color: '#fff' }} />
                </MenuItemComponent>

                <MenuItemComponent title="Position">
                    <PieChartOutlineIcon sx={{ color: '#fff' }} />
                </MenuItemComponent>

                <MenuItemComponent title="Yield">
                    <ShowChartIcon sx={{ color: '#fff' }} />
                </MenuItemComponent>

                <MenuItemComponent title="Subscriptions">
                    <PendingActionsIcon sx={{ color: '#fff' }} />
                </MenuItemComponent>

                <MenuItemComponent title="Private Equity">
                    <CorporateFareIcon sx={{ color: '#fff' }} />
                </MenuItemComponent>


            </List>
            <List
                sx={{ width: '100%', background: 'transparent', color: '#fff' }}
                component="nav" >
                <Typography variant='caption' sx={{ paddingLeft: '20px' }}>
                    GENERAL INFORMATION
                </Typography>
                <MenuItemComponent title="Personal Information">
                    <PersonOutlineIcon sx={{ color: '#fff' }} />
                </MenuItemComponent>
                <MenuItemComponent title="Economic Information">
                    <TableChartIcon sx={{ color: '#fff' }} />
                </MenuItemComponent>
                <MenuItemComponent title="Household">
                    <TableRowsIcon sx={{ color: '#fff' }} />
                </MenuItemComponent>
                <MenuItemComponent title="Vehicles" showChevron>
                    <>
                        <SchemaIcon sx={{ color: '#fff' }} />
                    </>
                </MenuItemComponent>

                <MenuItemComponent title="Bank Account" showChevron>
                    <AccountBalanceIcon sx={{ color: '#fff' }} />
                </MenuItemComponent>
                {/* <MenuItemComponent title="About" showChevron onClick={() => push('/about')}>
                    <AccountBalanceIcon sx={{ color: '#fff' }} />
                </MenuItemComponent> */}
            </List>

        </Box>

    )
}






