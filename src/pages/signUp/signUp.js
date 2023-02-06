/*import 'bootstrap/dist/css/bootstrap.min.css';*/
import { Link } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../services/firebase"
import pyre from '../../assets/images/pyre.svg';
import './signUp.scss';
import '../../stylesheets/_colors.scss';
import '../../stylesheets/_fonts.scss';
import ContinueGoogleButton from "../../components/buttons/continueGoogleButton/ContinueGoogleButton"
import SignUpForms from "./signUp-forms/signUp-forms";
import './signUp-personal-info.scss';
import { useState } from 'react';





function SignUp() {
	const [step, setStep] = useState(0);

	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
	const [senhaConfirm, setSenhaConfirm] = useState("");
	const [nome, setNome] = useState("");
	const [tipo, setTipo] = useState("");
	const [cpfCnpj, setCpfCnpj] = useState("");
	const [telefone, setTelefone] = useState("");
	const [cep, setCep] = useState("");
	const [estado, setEstado] = useState("");
	const [cidade, setCidade] = useState("");
	const [bairro, setBairro] = useState("");
	const [rua, setRua] = useState("");
	const [numero, setNumero] = useState("");


	const handleGoogleSingIn = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
			.then((result) => {
				console.log(result);
			})
			.catch((error) => {
				console.log(error);
			})
	}

	const handleCreateUser = () =>{

		let user = {
			user_type: "pessoa",
			name: "MICHEL",
			email: "AKSJDKAJSKD@gmail.com",
			password: "1234654",
			phone_number: "123478949",
			cpf_cnpj: "1222",
			imageURL: "1234"
		}
		fetch('http://localhost:4200/users/signup', {
			method: "POST",
			body: JSON.stringify(user),
			headers: {"Content-type": "application/json; charset=UTF-8"}
			})
			.then(response => response.json()) 
			.then(json => console.log(json))
			.catch(err => console.log(err));
		

	}

	const getCEP = async (e) => {

		const cep = e.target.value.replace(/\D/g, '');
		const url = `https://viacep.com.br/ws/${cep}/json`;
		const options = {
			method: "GET",
			mode: "cors",
			headers: {
				'content-type': 'application/json;charset=utf-8',
			}
		}


		fetch(url, options).then(
			response => response.json()
		).then(
			data => {
				console.log(data)
				setCidade(data.localidade);
				setRua(data.logradouro);
				setEstado(data.uf);
				setBairro(data.bairro);
			},
			document.getElementById("numero").focus(),
			//document.getElementById("numero")
		)


	}



	return (
		<>
			<div className="container">
				{step === 0 && (
					<div className="sign-up-container">
						<div className='d-flex justify-content-center mt-5'>
							<img src={pyre} height={141} alt="logo" />
						</div>

						<p className='d-flex justify-content-center font-h2-40-ubuntu login_text mt-5 mb-5'>Cadastro</p>

						<div className='mx-auto'>
							<div className='container p-5 main_signup color_gray'>
								<div className="mb-4 color_gray"><ContinueGoogleButton signIn={handleGoogleSingIn} /></div>
								<div className='ouline font-subtitle-16-ubuntu color_gray'>ou</div>
								<div className='m-0 mt-4 mb-3 color_gray'>
									<button type="button" className="signInSignOut font-button-20-ubuntu" onClick={() => { setStep(state => state + 1) }}>Cadastrar com email</button>
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
										<input className="check-input" type="radio" name="user_type" id="employer" onChange={() => setTipo("employer")} />
										<label className="font-subtitle-12-ubuntu mb-0" for="inlineRadio1">Sou empreendedor</label>
									</div>

									<div>

										<input className="check-input" type="radio" name="user_type" id="student" checked onChange={() => setTipo("student")} />
										<label className="font-subtitle-12-ubuntu mb-0" for="inlineRadio2">Sou Estudante</label>
									</div>

								</div>

								{/*email*/}
								<div className="input-field d-flex flex-column">
									<label className="font-subtitle-16-ubuntu"> Email </label>
									<input type="Email" placeholder="email@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
								</div>
								{/*password*/}
								<div className="input-field d-flex flex-column">
									<label className="font-subtitle-16-ubuntu"> Senha </label>
									<input type="Password" placeholder="" value={senha} onChange={(e) => setSenha(e.target.value)} />
								</div>
								{/*password-confirm*/}
								<div className="input-field d-flex flex-column">
									<label className="font-subtitle-16-ubuntu"> Repetir senha </label>
									<input type="Password" placeholder="" value={senhaConfirm} onChange={(e) => setSenhaConfirm(e.target.value)} />
								</div>

								<div className='row m-0 mt-4 mb-3 color_gray'>
									<button type="button" className="signInSignOut font-button-20-ubuntu" onClick={() => { setStep(state => state + 1) }}>Próximo</button>
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
							{/*Nome*/}
							<div className="input-field d-flex flex-column">
								<label className="font-subtitle-16-ubuntu"> Nome Completo </label>
								<input placeholder="Nome Completo" value={nome} onChange={(e) => setNome(e.target.value)} />
							</div>

							{/*CPF/CNPJ*/}
							<div className="input-field d-flex flex-column">
								<label className="font-subtitle-16-ubuntu"> CPF ou CNPJ </label>
								<input placeholder="CPF/CNPJ" value={cpfCnpj} onChange={(e) => setCpfCnpj(e.target.value)} />
							</div>
							{/*CPF/CNPJ*/}
							<div className="input-field d-flex flex-column">
								<label className="font-subtitle-16-ubuntu"> Telefone </label>
								<input placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
							</div>

						</div>

						<div className="d-flex justify-content-end">
							<div className='mr-5'>
								<button onClick={() => { setStep(state => state - 1) }}>Anterior</button>
							</div>
							<div className='ml-4'>
								<button type="button" onClick={() => { setStep(state => state + 1) }}>Próximo</button>

							</div>
						</div>
					</div>
				)}
				{step === 3 && (
					<div className="container">
						<SignUpForms loadingProgress={60}></SignUpForms>

						<div className="input-fields d-flex">
							<div className="right-address-inputs">
								{/*CEP*/}
								<div className="input-field d-flex flex-column">
									<label className="font-subtitle-16-ubuntu"> CEP </label>
									<input placeholder="Cep" value={cep} maxlength="10" onBlur={getCEP} onChange={(e) => setCep(e.target.value)} />
								</div>
								{/*Cidade*/}
								<div className="input-field d-flex flex-column">
									<label className="font-subtitle-16-ubuntu"> Cidade </label>
									<input placeholder="Cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} />
								</div>
								{/*rua*/}
								<div className="input-field d-flex flex-column">
									<label className="font-subtitle-16-ubuntu"> Rua </label>
									<input placeholder="Rua" value={rua} onChange={(e) => setRua(e.target.value)} />
								</div>
							</div>

							<div className="left-address-inputs">
								{/*estado*/}
								<div className="input-field d-flex flex-column">
									<label className="font-subtitle-16-ubuntu"> Estado </label>
									<input placeholder="Rua" value={estado} onChange={(e) => setEstado(e.target.value)} />
								</div>
								{/*bairro*/}
								<div className="input-field d-flex flex-column">
									<label className="font-subtitle-16-ubuntu"> Bairro </label>
									<input placeholder="Bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} />
								</div>
								{/*numero*/}
								<div className="input-field d-flex flex-column">
									<label className="font-subtitle-16-ubuntu"> Número </label>
									<input placeholder="Número" value={numero} id="numero" onChange={(e) => setNumero(e.target.value)} />
								</div>

							</div>


						</div>

				<div className="d-flex justify-content-end buttons-line">
					<button type="button" onClick={() => {setStep(state => state - 1)}}>Anterior</button>
					<button type="button" onClick={handleCreateUser}>Finalizar Cadastro</button>
				</div>

					</div>
				)}
				{step === 4 && (
					<>
						<SignUpForms loadingProgress={100}></SignUpForms>



						<div className="d-flex justify-content-end buttons-line">
							<button type="button" onClick={() => { setStep(state => state - 1) }}>Anterior</button>
							<button type="button" onClick={() => { }}>Finalizar Cadastro</button>
						</div>
					</>
				)}
			</div>
		</>
	);
}

export default SignUp;

