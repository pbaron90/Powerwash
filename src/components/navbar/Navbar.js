import { Link } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to ='/' className='logo'>LOGO</Link>
      <ul>
        <CustomLink to ='/about' className='nav-link'> About</CustomLink>
        <CustomLink to ='./services' className='nav-link'>Services</CustomLink>
        <CustomLink to ='./faq' className='nav-link'>FAQ</CustomLink>
        <CustomLink to ='./contact' className='nav-link'>Contact</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink ({ to, children, ...props }) {
  return (
    <li>
      <Link to ={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
export default Navbar