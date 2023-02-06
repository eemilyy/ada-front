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
                                <h1 className='font-h3-32-ubuntu'>Titulo</h1>
                                <p>Descrição</p> {/*DEIXAR INTERATIVO*/}
                                <p>Empresa</p>
                            </div>
                            <button type='button'>Saiba mais</button>
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