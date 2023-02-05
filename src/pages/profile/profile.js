import './profile.scss';
import '../../stylesheets/_fonts.scss'

function Profile() {
    return (
        <>
            <div className="page-content page-container">
                <div className="padding">
                    <div className="row profile-container d-flex justify-content-center font-subtitle-16-500-ubuntu">
                        <div className="col-xl-8 col-md-12">
                            <div className="card user-card-full">
                                <div className="row m-l-0 m-r-0">
                                    <div className="col-sm-4 bg-blue user-profile">
                                        <div className="card-block text-center text-white">
                                            <div className="m-b-25">
                                                <img src="https://cdn-icons-png.flaticon.com/512/709/709722.png" className="img-radius" alt="User-Profile-Image" height='100px' />
                                            </div>
                                            <h6 className="f-w-600 font-18-ubuntu">User NAME</h6>
                                        </div>
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="card-block">
                                            <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Informações</h6>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">Email</p>
                                                    <h6 className="text-muted f-w-400">rntng@gmail.com</h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">CPF/CNPJ</p>
                                                    <h6 className="text-muted f-w-400">98979989898</h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 mt-3 f-w-600">Telefone</p>
                                                    <h6 className="text-muted f-w-400">98979989898</h6>
                                                </div>
                                            </div>
                                            <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Endereço</h6>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">Rua</p>
                                                    <h6 className="text-muted f-w-400">Sam Disuja</h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">Número</p>
                                                    <h6 className="text-muted f-w-400">Sam Disuja</h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 mt-3 f-w-600">Bairro</p>
                                                    <h6 className="text-muted f-w-400">Dinoter husainm</h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 mt-3 f-w-600">Cidade</p>
                                                    <h6 className="text-muted f-w-400">Dinoter husainm</h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 mt-3 f-w-600">Estado</p>
                                                    <h6 className="text-muted f-w-400">Dinoter husainm</h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 mt-3 f-w-600">CEP</p>
                                                    <h6 className="text-muted f-w-400">Dinoter husainm</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Profile;