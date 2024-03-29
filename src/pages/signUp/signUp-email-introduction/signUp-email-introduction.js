import pyre from '../../../assets/images/pyre.svg';
import './signUp-email-introduction.scss';
import SignInSignOutButton from "../../../components/buttons/signInSignOutButton/SignInSignOutButton"
import Input from './../../../components/input/input';

function SignUpEmailIntroduction() {
    return (
        <div className="sign-up-container">
            <div className='d-flex justify-content-center mt-5'>
                <img src={pyre} height={141} alt="logo" />
            </div>

            <p className='d-flex justify-content-center font-h2-40-ubuntu login_text mt-5 mb-5'>Cadastro</p>

            <div className='mx-auto'>
                <div className='container p-5 main_signup'>
                    
                    <div className='d-flex justify-content-between mb-3'>

                        <div className='justify-content-center'>
                            <input className="check-input" type="radio" name="user_type" id="employer" />
                            <label className="font-subtitle-12-ubuntu mb-0" for="inlineRadio1">Sou empreendedor</label>
                        </div>                        
                    
                        <div>

                            <input className="check-input" type="radio" name="user_type" id="student" />
                            <label className="font-subtitle-12-ubuntu mb-0" for="inlineRadio2">Sou Estudante</label>
                        </div>
                        
                    </div>



                    <Input label="Email"></Input>
                    <Input type="password" label="Senha"></Input>
                    <Input type="password" label="Repetir senha"></Input>
                    <div className='row m-0 mt-4 mb-3 color_gray'>
                        <SignInSignOutButton>Cadastrar</SignInSignOutButton>
                    </div>
                </div>
            </div>
            <div className="bottom_text d-flex justify-content-center font-body-20-700-roboto mt-4 p-2">
                Já tem conta?
                <a href='?#' className="signup font-body-20-700-roboto">&nbsp;Faça login</a>
            </div>
            <div className="d-flex justify-content-center text-grey font-body-16-roboto font-weigth-400">
                Ao criar uma conta você concorda com os
                <a className="external-links" href='/'>&nbsp;Termos de Serviço.</a>
            </div>
            <div className="d-flex justify-content-center text-grey font-body-16-roboto font-weigth-400">
                Para mais informações acesse nossa
                <a className="external-links" href='/'>&nbsp;Política de Privacidade.</a>
            </div>
        </div>
    );
}

export default SignUpEmailIntroduction;