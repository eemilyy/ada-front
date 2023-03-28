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
                                <h1 className='font-h3-32-ubuntu'>Desenvolvolvedor Front-end</h1>
                                <p className='font-18-ubuntu'>Será responsável por desenvolver e implementar soluções utilizando React.js</p> {/*DEIXAR INTERATIVO*/}
                                <p className='font-18-ubuntu mb-4'>WoW ERP</p>
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