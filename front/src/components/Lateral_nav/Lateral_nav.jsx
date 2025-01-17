import '../../styles/main.scss';
import relaxation from '../../public/relaxation.png';
import natation from '../../public/natation.png';
import cyclisme from '../../public/cyclisme.png';
import musculation from '../../public/musculation.png';

function LateralNav() {
    return (
        <div className='lateral-nav'>
            <nav>
                <ul>
                    <li>
                        <img src={relaxation} alt="Relaxation" />    
                    </li>
                    <li>
                        <img src={natation} alt="Natation" />
                    </li>
                    <li>
                        <img src={cyclisme} alt="Cyclisme" />
                    </li>
                    <li>
                        <img src={musculation} alt="Musculation" />
                    </li>
                </ul>
            </nav>
            <p>Copyright, SportSee 2020</p>
        </div>
    );
}

export default LateralNav;