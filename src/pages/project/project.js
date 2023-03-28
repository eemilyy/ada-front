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
                                <h1 className='text-blue'>Serviços em Destaque</h1>
                            </div>
                            <hr></hr>
                            <div>
                                <h1 className='font-h3-32-ubuntu'>Desenvolvimento de uma API Rest</h1>
                                <p className='font-18-ubuntu'>Criação e desenvolvimento de uma API Rest para uma aplicação de empresa de tecnologia</p> {/*DEIXAR INTERATIVO*/}
                                <p className='font-18-ubuntu mb-4'>Solucções Tecno</p>
                            </div>
                            <a href='/projects/show' className='btn-sm'>Saiba mais</a>
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