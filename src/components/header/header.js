import 'bootstrap/dist/css/bootstrap.min.css';
import './header.scss';
import pyre from '../../assets/images/pyre.svg';
import { useNavigate } from 'react-router-dom'
import '../../stylesheets/_fonts.scss';
import { getAuth, signOut } from "firebase/auth";
import icone from '../../assets/images/icon.svg';
import LoginNavButton from './../buttons/loginNavButton/LoginNavButton';


function Header() {
	const navigate = useNavigate();
	const auth = getAuth();
	const user = auth.currentUser;

	const handleLogOut = () => {
		signOut(auth);
		
		console.log("saindo...");
		window.location.href = "/"
	}


	return (
		<header>
			<div className="header d-flex align-items-center justify-content-around">
				<div className='container justify-content-start'>
					<div className="row justify-content-around align-items-center">
						<div className='col m-l-3'>
							<a href="/">
								<img src={pyre} height={55} alt="logo" />
							</a>
						</div>
						<div className="font-button-20-ubuntu col txt-orange "> 
							<a href='/projects'>
							Explorar 
							</a>
						</div>
						
						<div className="font-button-20-ubuntu col txt-orange ">
						<a href='/projects/new'>
							Criar Serviço 
						</a>
						</div>
					</div>
				</div>
				<div className='container'>
						<div className='row justify-content-end'>
						<div className='col-3' onClick={() => navigate('/profile')}> <LoginNavButton> Perfil </LoginNavButton> </div>

							{/* <a href="/profile" className='col-3 '>
								<p>Meu Perfil</p>
							</a> */}
						</div>
				</div>

			</div>

		</header>
	);

}

export default Header;
