import '../../stylesheets/_fonts.scss'
import Header from '../../components/header/header';
import './project.scss'

function IndexProject() {

    const handleWhatsapp = (number) => {
        console.log("ENTROU");
        window.open(`https://wa.me/55${number}?text=Tenho%20interesse%20em%20participar%20do%20seu%20projeto`, '_blank')
    }
    var number = 11999275958;
    return (
        <>
            <Header></Header>

            <div className='container'>
                <div className='row'>
                    <div className='col-8'>
                        <div className='card-project'>
                            <div className='font-h1-64-ubuntu'>
                                <h1 className='text-blue'>NOME DO PROJETO</h1>
                            </div>
                            <hr></hr>
                            <div>
                                <h1 className='font-h3-32-ubuntu'>Titulo</h1>
                                <p>Descrição</p> {/*DEIXAR INTERATIVO*/}
                                <p>Empresa</p>
                            </div>
                            <hr></hr>
                            <p className='font-h3-32-ubuntu'>Dados da empresa</p>
                        </div>

                    </div>
                    <div className='col-4'>
                        <div className='card-project'>
                            <p className='font-subtitle-24-ubuntu text-center'>
                                Gostou do projeto?
                            </p>
                           <button type="button" className='btn font-subtitle-16-ubuntu' onClick={()=>(handleWhatsapp(number))}>Conversar com o proprietário</button>
                        </div>
                        <div className='card-project'>
                            <img src='https://static.portugues.com.br/2022/04/1-anuncio-publicitario.jpg' alt='Anuncio' className='image'></img>
                        </div>
                    </div>
                </div>    
                

            </div>
        </>
    );
}

export default IndexProject;