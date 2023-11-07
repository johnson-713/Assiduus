import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonIcon from '@mui/icons-material/Person';
import ContactsIcon from '@mui/icons-material/Contacts';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="container">
            <div className="container__logo">
                <img src="https://www.assiduusglobal.com/images/assiduus-logo-dark.webp" alt="" />
            </div>
            <div className="conatiner__sidebar">
                <div className="container__sidebar--content">
                    <DashboardIcon style={{ width: 20, padding: 10}} />
                    <p>Dashboard</p>
                </div>
                <div className="container__sidebar--content">
                    <AccountBalanceWalletIcon style={{ width: 20, padding: 10}} />
                    <p>Accounts</p>
                </div>
                <div className="container__sidebar--content">
                    <AttachMoneyIcon style={{ width: 20, padding: 10}} />
                    <p>Payroll</p>
                </div>
                <div className="container__sidebar--content">
                    <DescriptionIcon style={{ width: 20, padding: 10}} />
                    <p>Reports</p>
                </div>
                <div className="container__sidebar--content">
                    <PersonIcon style={{ width: 20, padding: 10}} />
                    <p>Advisor</p>
                </div>
                <div className="container__sidebar--content">
                    <ContactsIcon style={{ width: 20, padding: 10}} />
                    <p>Contacts</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;