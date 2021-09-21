import {Link} from   'react-router-dom';
import '../styles/navbar.css'
const  Navbar = ()=>{
    

    return(
        <nav className="navbar">
            {
                 (
                <>
                <Link ><b>LOGOUT</b></Link>
                <br />
                 {/* onClick={logout} */}
                 
                
                 <Link to ='/landinPage'><b> HOME</b></Link>
                 <br /> 
                 <Link to ='/login'><b>LOGIN</b></Link>
                 <br />
                 <Link to='/signup'><b>SIGN UP</b></Link>
                 <br />
                </>
                 )}

        </nav>

    )
   
} 

export default Navbar;