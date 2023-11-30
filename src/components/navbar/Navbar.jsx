import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.css"
import {Link, useNavigate} from "react-router-dom"
import {Container, Row, Button} from "reactstrap"


const Navbar = () => {
  const navigate = useNavigate()
  const { user, dispatch } = useContext(AuthContext);

  const logout = () =>{
    dispatch({type: 'LOGOUT'})
    navigate("/")
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/">
          <span className="logo">
            AIRBNB HOTELS
          </span>
        </Link>
        {
            user? (
            <>
            <div className="d-flex align-items-center gap-4">{user.username}</div>
              <Button className="btn btn-dark" onClick={logout}>Logout</Button>
            </>
            ) :(
            <>
              <Button className='btn secondary__btn'>
            <Link to="/login">
              Login
            </Link>
          </Button>
          <Button className='btn primary__btn'>
            <Link to="/register">
              Register
            </Link>
          </Button>  
            </>) 
            }
      </div>
    </div>
  )
}

export default Navbar