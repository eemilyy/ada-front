/*import 'bootstrap/dist/css/bootstrap.min.css';*/
import { Link } from 'react-router-dom';
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {auth} from "../../services/firebase"
import pyre from '../../assets/images/pyre.svg';
import './signUp.scss';
import '../../stylesheets/_colors.scss';
import '../../stylesheets/_fonts.scss';
import ContinueGoogleButton from "../../components/buttons/continueGoogleButton/ContinueGoogleButton"
import { useState } from 'react';




import SignUpForms from "./signUp-forms/signUp-forms";
import Input from './../../components/input/input';
import './signUp-personal-info.scss';






function SignUp() {
	const [step, setStep] = useState(0);

	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
	const [nome, setNome] = useState("");
	const [cpf, setCpf] = useState("");
	const [telefone, setTelefone] = useState("");
	const [cep, setCep] = useState("");
	const [estado, setEstado] = useState("");
	const [cidade, setCidade] = useState("");
	const [bairro, setBairro] = useState("");
	const [rua, setRua] = useState("");
	const [numero, setNumero] = useState("");


	const handleGoogleSingIn = () =>{
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
		.then((result) =>{
			console.log(result);
		})
		.catch((error)=>{
			console.log(error);
		})
	}

	return (
		<>
		<div className="container">
			{step === 0 && (
				<div className="sign-up-container">
					<div className='d-flex justify-content-center mt-5'>
						<img src={pyre} height={141} alt="logo"/>
					</div>
				
					<p className='d-flex justify-content-center font-h2-40-ubuntu login_text mt-5 mb-5'>Cadastro</p>

					<div className='mx-auto teste'>
						<div className='container p-5 main_signup color_gray'>
							<div className="mb-4 color_gray"><ContinueGoogleButton signIn = {handleGoogleSingIn}/></div>
							<div className='ouline font-subtitle-16-ubuntu color_gray'>ou</div>
							<div className='m-0 mt-4 mb-3 color_gray'>
								<button type="button" className="signInSignOut font-button-20-ubuntu" onClick={() => {setStep(state => state + 1)}}>Cadastrar com email</button>
							</div>
						</div>
					</div>
					<div className="font-body-20-700-roboto d-flex justify-content-center mt-4 p-2" >Já tem conta?&nbsp;
						<Link to="/login" className="font-body-20-700-roboto signup">Faça login</Link>
					</div>
				</div>
			)}
			{step === 1 && (
				<div className="sign-up-container">
				<div className='d-flex justify-content-center mt-5'>
					<img src={pyre} height={141} alt="logo" />
				</div>
	
				<p className='d-flex justify-content-center font-h2-40-ubuntu login_text mt-5 mb-5'>Cadastro</p>
	
				<div className='mx-auto'>
					<div className='container p-5 main_signup color_gray'>
						
						<div className='d-flex justify-content-between mb-3'>
	
							<div className='justify-content-center'>
								<input className="check-input" type="radio" name="user_type" id="employer" checked />
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
						<button type="button" className="signInSignOut font-button-20-ubuntu" onClick={() => {setStep(state => state + 1)}}>Próximo</button>
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
			)}
			{step === 2 && (
				<div className="container">
					<SignUpForms loadingProgress={60}></SignUpForms>
					

					<div className="input-fields">
						<Input label="Nome completo"></Input>
						<Input label="CPF/CNPJ"></Input>
						<Input label="Telefone"></Input>
					</div>

					<div className="d-flex justify-content-end buttons-line">
						<button type="button" onClick={() => {setStep(state => state - 1)}}>Anterior</button>
						<button type="button" onClick={() => {setStep(state => state + 1)}}>Próximo</button>
					</div>
				</div>
			)}
			{step === 3 && (
				<div className="container">
				<SignUpForms loadingProgress={100}></SignUpForms>

				<div className="input-fields d-flex">
					<div className="right-address-inputs">
						<Input label="CEP*"></Input>
						<Input label="Cidade*"></Input>
						<Input label="Rua*"></Input>
					</div>

					<div className="left-address-inputs">
						<Input label="Estado*"></Input>
						<Input label="Bairro*"></Input>
						<Input label="Número*"></Input>
					</div>


				</div>

				<div className="d-flex justify-content-end buttons-line">
					<button type="button" onClick={() => {setStep(state => state - 1)}}>Anterior</button>
					<button type="button" onClick={() => {}}>Finalizar Cadastro</button>
				</div>

			</div>
			)}
		</div>
		</>
	);
  }

  export default SignUp;

