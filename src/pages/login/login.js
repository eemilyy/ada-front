/*import 'bootstrap/dist/css/bootstrap.min.css';*/
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {auth} from "../../services/firebase"

import pyre from '../../assets/images/pyre.svg';
import './login.scss';
import '../../stylesheets/_colors.scss';
import '../../stylesheets/_fonts.scss';
import SignInSignOutButton from "../../components/buttons/signInSignOutButton/SignInSignOutButton"
import ContinueGoogleButton from "../../components/buttons/continueGoogleButton/ContinueGoogleButton"
import Input from "../../components/input/input";

function Login() {
		const ref = useRef(null);
		const ref2 = useRef(null);
		const [senha,setSenha] = useState("");
		const [email,setEmail] = useState("");
		const [isLogged, setIsLogged] = useState(false)
		const [userID, setUserID] = useState("");
		const [userToken, setUserToken] = useState("");

		
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


		const handleSignIn = (e) => {
			console.log("logando...");

			// let user = {
			// 	user_type: tipo,
			// 	name: nome,
			// 	email: email,
			// 	password: senha,
			// 	phone_number: telefone,
			// 	cpf_cnpj: cpfCnpj,
			// 	imageURL: ""
			// }

			let credencials = {
				email: email,
				password: senha
			}

//-----------------------------------------------------------
			const url = "http://localhost:4200/users/login";
			const options = {
				method: "POST",
				mode: "cors",
				body: JSON.stringify(credencials),
				headers: {
					'content-type': 'application/json;charset=utf-8',
				}
			}

			fetch(url, options).then(
				response => response.json()
			).then(
				data => {
					console.log(data);
					//console.log(data.id)
					//console.log(data.token)
					setUserID(data.id);
					setUserToken(data.token);
				    localStorage.setItem("user_token",userToken);
					localStorage.setItem("user",userID);
					console.log("usuario logado com sucesso")
					window.location.href = "/projects"
				},
			)
			.catch(err => console.log(err));
//-----------------------------------------------------------
	
			if(isLogged){
				console.log("logado com sucesso");
				console.log(userID)
			}
			else{
				console.log("Usuário ou senha inválida");
			}



			// localStorage.setItem("user_token", "uasdfnausdnufsudf");
			// localStorage.setItem("user",JSON.stringify(user));

			// console.log(localStorage.getItem("user_token"));
			// console.log(localStorage.getItem("user"));
			
			//window.location.reload(false);
		}

		return (
		<>
			<div className='d-flex justify-content-center mt-5'>
				<img src={pyre} height={141} alt="logo"/>
			</div>
 	   
			<p className='d-flex justify-content-center font-h2-40-ubuntu login_text mt-5 mb-5'>Login</p>

			<div className='mx-auto text-white'>

				<div className='container p-5 main_login color_gray'>
					<div className='row color_gray'>
						<div className="color_gray" >
							{/*email*/}
							<div className="input-field d-flex flex-column">
								<label className="font-subtitle-16-ubuntu"> Email </label>
								<input type="Email" placeholder="email@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
							</div>
						</div>
						<div className="mt-1 color_gray">

							{/*password*/}
							<div className="input-field d-flex flex-column">
								<label className="font-subtitle-16-ubuntu"> Senha </label>
								<input type="Password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
							</div>
						</div>
					</div>
					<div className='row m-0 mt-4 mb-3 color_gray'>
						<button className="signInSignOut font-button-20-ubuntu" onClick={handleSignIn}>Entrar</button>
					</div>
					<div className='ouline font-subtitle-16-ubuntu color_gray'>ou</div>
					<div className="mb-4 mt-3 color_gray"><ContinueGoogleButton signIn = {handleGoogleSingIn}/></div>
				</div>
			</div>
			<div className="font-body-20-700-roboto d-flex justify-content-center mt-4 p-2" >Novo por aqui?&nbsp;
				<Link to="/signup" className="font-body-20-700-roboto signup">Cadastre-se</Link>
			</div>
		</>
	);
  }

  export default Login;
