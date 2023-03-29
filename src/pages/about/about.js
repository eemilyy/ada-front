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
            <p className='font-subtitle-24-ubuntu text'>O nome do projeto veio a partir de Ada Lovelance, uma matemática e escritora inglesa do século XIX. Ela é amplamente considerada como a primeira programadora de computador da história. Por causa de suas realizações e visão, Ada Lovelace é frequentemente considerada uma pioneira da ciência da computação e uma inspiração para mulheres que buscam carreiras em ciência, tecnologia, engenharia e matemática. O dia 15 de outubro é comemorado como o "Dia de Ada Lovelace" em homenagem à sua contribuição para a ciência da computação.</p>
        </div>

        <div>
            <h1 className='font-h1-64-ubuntu d-flex justify-content-center'>O que faz o Projeto Ada?</h1>
            <p className='font-subtitle-24-ubuntu text'>O projeto Ada atua como intermediário e oferece suporte aos estudantes que buscam se adequar ao mercado de trabalho, bem como aos empreendedores que desejam incluir estudantes com competências atraentes para o desenvolvimento de seus serviços. Estudantes se candidatam a participar de serviços, e empresários lançam serviços e aceitam estudanes em seus serviços.
            Esses serviços incluem desde desenvolvimento até manutenção técnica. </p>
        </div>

        </>
    )
}

export default About;