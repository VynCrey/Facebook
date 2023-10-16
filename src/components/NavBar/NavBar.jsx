import './NavBar.css'
import img from '../NavBar/LogoFacebook.png'
import SvgIcon from '@mui/material/SvgIcon';
import SearchIcon from '@mui/icons-material/Search';
import CartWidget from './CartWidget/CartWidget';
import NoAccountsIcon from '@mui/icons-material/NoAccounts';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Link } from 'react-router-dom';


function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

const NavBar = ({nombre}) => {
    
  return (
    <div className="NavBar"> 
        <div>
        <Link to={"/"}><img src={img} className='Facebook'/></Link>
        <SearchIcon/>
        </div>
        <div>
          <Link to={"/"}><HomeIcon color="primary" /></Link>
          <Link to={"/abaut"}><li>Abaut</li></Link>
          <Link to={"/contact"}><li>Contact</li></Link>
          <Link to={"/category/Human"}><AccountBoxIcon/></Link>
          <Link to={"/category/Alien"}><NoAccountsIcon/></Link>
          
          Bienvenido a {nombre}
        </div>
        <div>
        
        <CartWidget/>
        </div>
    </div>
  )
}

export default NavBar