import logo from '../assets/img/logo.png'
import '../assets/style/header.css'

function Header() {
  return (
    <header>
        <img src={logo}></img>
        <h1>CineOpinions</h1>
    </header>
  );
}
export default Header;
