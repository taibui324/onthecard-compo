import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>On The Card </h1>
      <div className="links">
        <Link to="/" style={{ 
          color: 'white', 
          backgroundColor: '#f13586',
          borderRadius: '8px'}}>Edit</Link>

        <Link to="/youtube" style={{ 
          color: 'white', 
          backgroundColor: '#f13586',
          borderRadius: '8px' 
        }}>Youtube Link</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;