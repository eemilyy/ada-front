import '../../stylesheets/_fonts.scss'
import Header from '../../components/header/header';
import './project.scss'

function Project() {
    return (
        <>
        <Header></Header>

            <div className='container'>
                <div className='row'>
                    <div className='col-8'>
                        <div className='card-project'>
                            <div className='font-h1-64-ubuntu'>
                                <h1 className='text-blue'>Projetos em Destaque</h1>
                            </div>
                            <hr></hr>
                            <div>
                                <h1 className='font-h3-32-ubuntu'>Desenvolvimento de uma API Rest</h1>
                                <p>Criação e desenvolvimento de uma API Rest para uma aplicação de empresa de tecnologia</p> {/*DEIXAR INTERATIVO*/}
                                <p>Solucções Tecno</p>
                            </div>
                            <button type='button'><a href='/projects/show'>Saiba mais</a></button>
                            <hr></hr>
                        </div>

                    </div>
                    <div className='col-4'>
                        <div className='card-project'>
                            <img src='https://static.portugues.com.br/2022/04/1-anuncio-publicitario.jpg' alt='Anuncio' className='image'></img>
                        </div>
                    </div>
                </div>    
                

            </div>

        </>
    );
}
export default Project