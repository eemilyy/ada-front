import '../../../../stylesheets/_fonts.scss'
import Input from "../../../../components/input/input";
import './form-card.scss'
import NavBar from '../../../../components/header/header'
import CancelButton from '../../../../components/buttons/cancelButton/cancelButton';
import { useState } from 'react';

function CreateProject() {
    const [projectCreated, setProjectCreated] = useState(false);

    const handleCreateProject = () =>{
        let project = {
            user_id: "75e30048-54e5-4c3d-8dc6-15246cc3673e",
            name: "a",
            description: "a",
            phone_number: "a",
        }
        fetch('http://localhost:4200/projects/new', {
			method: "POST",
			body: JSON.stringify(project),
			headers: { "Content-type": "application/json; charset=UTF-8" }
		})
			.then(response => response.json())
			.then(json => console.log(json),setProjectCreated(true))
			.catch(err => console.log(err));
    }
    
    return (
        <>
            <NavBar></NavBar>
            <div className='container col-3 mt-5'>
                <div className=''>

                    <p className='text-center font-h2-56-ubuntu mb-5'>Novo Serviço</p>

                    <div className='mx-auto mt-5 d-flex justify-content-center project-container'>
                        <div>

                            <div className=" d-flex flex-column">
                                <label className="font-subtitle-16-ubuntu"> Titulo do Serviço </label>
                                <input placeholder="Desenvolvimento Web" />
                            </div>
                            <div className=" d-flex flex-column">
                                <label className="font-subtitle-16-ubuntu"> Descrição do Serviço </label>
                                <input placeholder="Breve descrição do projeto" />
                            </div>
                            <div className=" d-flex flex-column">
                                <label className="font-subtitle-16-ubuntu"> Preço do Serviço </label>
                                <input placeholder="0,00" />
                            </div>
                            <div className=" d-flex flex-column">
                                <label className="font-subtitle-16-ubuntu"> Contato </label>
                                <input placeholder="DDD e sem caracteres especiais" />
                            </div>

                            <div className='row mt-4'>
                                <div className='col'>
                                    <CancelButton ><a href='/projects'>Cancelar</a></CancelButton>

                                </div>

                                <div className='col'>

                                <button type='button' className='font-subtitle-16-ubuntu' onClick={handleCreateProject}>Criar</button>
                                </div>
                            </div>


                        </div>


                    </div>



                </div>
            </div>
        </>

    )
}

export default CreateProject;