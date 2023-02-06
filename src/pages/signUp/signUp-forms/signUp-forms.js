import './signUp-forms.scss';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function SignUpForms({ loadingProgress }) {

    return (
        <div>

            <div className="d-flex justify-content-between">
                <div className="pageInfo">
                    <h1 className="font-h2-56-ubuntu mt-5"> Cadastro </h1>
                    <p className="font-subtitle-24-ubuntu font-weigth-500 primary-grey-text-color">
                        Algumas informações pessoais serão necessárias para
                        que você possa financiar ou publicar um projeto.
                        Não se preocupe, respeitamos a Lei de Proteção
                        de Dados (LGPD) e suas informações estarão seguras
                        conosco.
                    </p>

                    <h3 className="font-h3-32-ubuntu form-title"> Informações Pessoais </h3>
                </div>

                <div style={{ width: 200, height: 200}} className="mt-5">
                    {loadingProgress === 60 ? <CircularProgressbar value={66} text={"60"} styles={buildStyles({ pathTransitionDuration: 0.5, })}/> : <CircularProgressbar value={100} text={"100"} styles={buildStyles({  })} />}
                </div>
            </div>
        </div>
    )
}

export default SignUpForms;