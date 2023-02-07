import 'bootstrap/dist/css/bootstrap.min.css';
import './header.scss';
import pyre from '../../assets/images/pyre.svg';
import { useNavigate } from 'react-router-dom'
import '../../stylesheets/_fonts.scss';
import { getAuth, signOut } from "firebase/auth";
import icone from '../../assets/images/icon.svg';

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
						<div className='col'>
							<a href="/">
								<img src={pyre} height={55} alt="logo" />
							</a>
						</div>
						<div className="font-button-20-ubuntu col "> 
							<a href='/projects'>
							Explorar 
							</a>
						</div>
						<div className="font-button-20-ubuntu col">
						<a href='/projects/new'>
							Criar Projeto 
						</a>
						</div>
					</div>
				</div>
				<div className='container'>
						<div className='row justify-content-end'>
							<a href="/profile" className='col-3 '>

								<img src={icone} height={45} alt="perfil" className='mt-3 m-l-3' />
								<p>Meu Perfil</p>
							</a>
						</div>
				</div>

			</div>

		</header>
	);

}

export default Header;
