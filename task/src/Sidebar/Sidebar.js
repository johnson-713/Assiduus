import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonIcon from '@mui/icons-material/Person';
import ContactsIcon from '@mui/icons-material/Contacts';
import './Sidebar.css';
import SidebarRow from './SidebarRow';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarRow Icon={DashboardIcon} title='Dashboard' />
            <SidebarRow Icon={AccountBalanceWalletIcon} title='Accounts' />
            <SidebarRow Icon={AttachMoneyIcon} title='Payroll' />
            <SidebarRow Icon={DescriptionIcon} title='Reports' />
            <SidebarRow Icon={PersonIcon} title='Advisor' />
            <SidebarRow Icon={ContactsIcon} title='Contacts' />
        </div>
    )
}

export default Sidebar;