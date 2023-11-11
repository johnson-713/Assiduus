import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonIcon from '@mui/icons-material/Person';
import ContactsIcon from '@mui/icons-material/Contacts';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import {  Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Link to="/" style={{textDecoration: "none", color: "#000"}}>
            <SidebarRow Icon={DashboardIcon} title='Dashboard' />
            </Link>
            <Link to="/" style={{textDecoration: "none", color: "#000"}}>
            <SidebarRow Icon={AccountBalanceWalletIcon} title='Accounts' />   
            </Link>
            <Link to="/" style={{textDecoration: "none", color: "#000"}}>
            <SidebarRow Icon={AttachMoneyIcon} title='Payroll' />    
            </Link>
            <Link to="/" style={{textDecoration: "none", color: "#000"}}>
            <SidebarRow Icon={DescriptionIcon} title='Reports' />   
            </Link>
            <Link to="/" style={{textDecoration: "none", color: "#000"}}>
            <SidebarRow Icon={PersonIcon} title='Advisor' />    
            </Link>
            <Link to="/" style={{textDecoration: "none", color: "#000"}}>
            <SidebarRow Icon={ContactsIcon} title='Contacts' />   
            </Link>    
        </div>
    )
}

export default Sidebar;