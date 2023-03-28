import pyre from '../../assets/images/pyre.svg';
import { useNavigate } from 'react-router-dom';
import LoginNavButton from './../buttons/loginNavButton/LoginNavButton';

import './notSignedupHeader.scss';

function NotSignedupHeader() {
    const navigate = useNavigate();

    return (
        <div className="d-flex justify-content-between landing-header">
            <div className="d-flex align-items-center group-header">
                <img src={pyre} height={55} alt="logo" />
                <div className="font-button-20-ubuntu link"> <a href='/' className=' text-blue'>Explorar</a></div>
                <div className="font-button-20-ubuntu link"> <a href='/sobre' className=' text-blue'>Sobre</a></div>

                {/* <div className="font-button-20-ubuntu link"> Criar projeto </div>
                <div className="font-button-20-ubuntu link"> Sobre nós </div> */}
            </div>

            <div className="d-flex align-items-center group-header">
                <div onClick={() => navigate('/signup')} className="text-header font-button-20-ubuntu link"> Cadastrar </div>
                <div onClick={() => navigate('/login')}> <LoginNavButton> Login </LoginNavButton> </div>
            </div>
        </div>
    )
}

export default NotSignedupHeader;