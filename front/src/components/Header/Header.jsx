import logo from '../../public/logo(1).png';
import '../../styles/main.scss';

function Header() {
    return (
        <header>
            <img src={logo} alt="logo SportSee" />
            <nav>
                <ul>
                    <li>Accueil</li>
                    <li>Profil</li>
                    <li>Réglage</li>
                    <li>Communauté</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;