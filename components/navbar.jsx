import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import TranslateIcon from '@mui/icons-material/Translate';
export default function NavBar() {

    return (
        <>
            <header className="topbar">
                <nav className="top-navbar ">
                    <a >
                        <img src="/images/q.jpg" />
                        <img src="/images/aq.jpg" />
                    </a>
                </nav>
                <div className='r-menu'>
                    <ul>
                        <li>
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        </li>
                        <li>
                            <IconButton>
                                <TranslateIcon />
                            </IconButton>
                        </li>
                        <li>
                            <IconButton>
                                <DarkModeIcon />
                            </IconButton>
                        </li>
                        <li>
                            <IconButton>
                                <NotificationsNoneIcon />
                            </IconButton>

                        </li>
                        <li>
                            <Avatar>
                                <PersonIcon />
                            </Avatar>
                        </li>
                    </ul>
                </div>
            </header >
        </>
    )
}
