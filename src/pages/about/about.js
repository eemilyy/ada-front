import '../../stylesheets/_colors.scss';
import '../../stylesheets/_fonts.scss';
import NotSignedupHeader from '../../components/notSignedupHeader/notSignedupHeader';
import AdaImage from '../../assets/images/adacut.jpg';
import './about.scss';
import '../../stylesheets/_fonts.scss'


import { useNavigate } from 'react-router-dom';

function About(){
    return(
        <>
        <NotSignedupHeader></NotSignedupHeader>
        <img src={AdaImage} alt='Imagem de Ada Lovelance' className='image-ada'></img>
        <div>

            <h1 className='font-h1-64-ubuntu d-flex justify-content-center'>Projeto Ada</h1>
            <p className='font-subtitle-24-ubuntu text'>O nome do projeto veio a partir de Ada Lovelance, uma matemática e escritora inglesa reconhecida principalmente por ter escrito o primeiro algoritmo para ser processado por uma máquina, a máquina analítica de Charles Babbage. Seu legado está marcado até hoje, sendo um simbolo da representatividade feminina.</p>
        </div>

        </>
    )
}

export default About;