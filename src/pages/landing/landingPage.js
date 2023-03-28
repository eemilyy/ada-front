import LoginNavButton from '../../components/buttons/loginNavButton/LoginNavButton';
import NotSignedupHeader from '../../components/notSignedupHeader/notSignedupHeader';
import './landingPage.scss';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="d-flex flex-column landing-page">
            <NotSignedupHeader></NotSignedupHeader>
            <div className="d-flex flex-column align-items-center center-text justify-content-center">
                <h1 className="font-h1-64-ubuntu"> Criar e participar de novos projetos nunca foi tão simples. </h1>
                <p className="font-subtitle-24-500-ubuntu"> Com o Ada, você consegue criar e participar de diversos projetos, tudo em um só lugar. </p>

                <div className="d-flex align-items-center center-buttons">
                    <div onClick={() => navigate('/signup')}><LoginNavButton> Cadastrar </LoginNavButton></div>
                    <div onClick={() => navigate('/sobre')} className="text-header font-button-20-ubuntu link center-link">Saiba mais</div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;
