import React from 'react'
import Prizingtop from './prizingtop';
import Button from 'react-bootstrap/Button';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import Acordianbox from './Acordianbox';
import {useSelector} from "react-redux";
const Mensuel = () => {

    let userlocal = useSelector((state) => state.auth?.user);
;



    return (
        <div className='Annuel'>
            <div >
                <Prizingtop />
            </div>
            <div className='container'>
                <div className='row'>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className='card'>
                            <div className='header-card'>
                                <div>
                                    <h5>GRATUIT</h5>
                                </div>
                                <div className='payment-box'>
                                    <h4> <span className='h1'>0€</span>/MOIS</h4>
                                </div>
                                <div className='d-flex'>
                                    <Button>Creer un compte gratuit</Button>
                                </div>

                            </div>
                            <div className='token-box'>
                                <hr />
                                <p>{userlocal?.total_points_earned || 0} TOKENS PAR MOIS</p>
                                <hr />
                            </div>
                            <div className='content-box'>
                                <div className='flex-box-9'>
                                    <p><CheckIcon /></p>
                                    <p className='ms-2'>Generer jusqua 9 images par mois</p>
                                </div>
                                <div className='flex-box-9'>
                                    <p><CheckIcon /></p>
                                    <p className='ms-2'>Realiser jusqu'a 75 echanges (chat) par mois</p>
                                </div>
                                <div className='flex-box-9'>
                                    <p><CheckIcon /></p>
                                    <p className='ms-2'>Tokens gratuils lorsque la balance est inferieur a 150</p>
                                </div>
                            </div>
                            <div className='content-box-2'>
                                <div className='flex-box-9'>
                                    <p><CheckIcon /></p>
                                    <p className='ms-2'>Jusqua 1 generation en cours</p>
                                </div>
                                <div className='flex-box-11'>
                                    <p><CloseIcon /></p>
                                    <p className='ms-2'>Generation privee</p>
                                </div>
                                <div className='flex-box-11'>
                                    <p><CloseIcon /></p>
                                    <p className='ms-2'>Infrastructure prioritaire</p>
                                </div>
                                <div className='flex-box-11'>
                                    <p><CloseIcon /></p>
                                    <p className='ms-2'>File d'attente express</p>
                                </div>
                                <div className='flex-box-11'>
                                    <p><CloseIcon /></p>
                                    <p className='ms-2'>Retroactivite des tokens par mois</p>
                                </div>
                            </div>

                            <div className='card-2'>
                                <div className='content-box'>
                                    <h6>
                                        Modeles d'IA disponibles
                                    </h6>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Modeles d'IA: GPT-4</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Modeles d'IA: Llama</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Modeles d'IA: DALL-E2</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Modeles d'IA: SDXL 0.9</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Modeles d'IA: SDXL 1.0</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Modeles d'IA: StableDiffusion 1.5</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Modeles d'IA: StableDiffusion 2.1</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Modeles d'IA: DreamShaperV7</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Modeles d'IA: AbsoluteReality v1.6</p>
                                    </div>

                                </div>
                                <div className='content-box'>
                                    <h6>
                                        Generations & Usages
                                    </h6>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Chat prompt</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Image-2-Image</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Image Prompts</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Prompt Generation</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Tiling</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Usage Commercial</p>
                                    </div>
                                    <div className='flex-box-11'>
                                        <p><CloseIcon /></p>
                                        <p className='ms-2'>Generation Privee</p>
                                    </div>
                                    <div className='flex-box-11'>
                                        <p><CloseIcon /></p>
                                        <p className='ms-2'>File d-attente express</p>
                                    </div>
                                    <div className='flex-box-11'>
                                        <p><CloseIcon /></p>
                                        <p className='ms-2'>Retroactivite des tokens par mois</p>
                                    </div>

                                </div>
                            </div>

                            <div className='token-box'>
                                <hr />
                                <p>AVANTAGES SPEC</p>
                                <hr />
                            </div>
                            <div className='flex-box-11'>
                                <p><CloseIcon /></p>
                                <p className='ms-2'>Access anticipe aux nouvelles fonctionnalites</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className='card'>
                            <div className='header-card'>
                                <div>
                                    <h5>éveillé</h5>
                                </div>
                                <div className='payment-box'>
                                    <h4><del>11.99</del><span className='h1'>11,99€</span>/MOIS</h4>
                                </div>
                                <div className='d-flex'>
                                    <Button>Créer un compte Éveillé</Button>
                                </div>

                            </div>
                            <div className='token-box'>
                                <hr />
                                <p>8500 TOKENS PAR MOIS</p>
                                <hr />
                            </div>
                            <div className='content-box'>
                                <div className='flex-box-9'>
                                    <p><CheckIcon /></p>
                                    <p className='ms-2'>Générer jusqu’à 531 images par mois</p>
                                </div>
                                <div className='flex-box-9'>
                                    <p><CheckIcon /></p>
                                    <p className='ms-2'>Realiser jusqu'a 4250 echanges (chat) par mois</p>
                                </div>
                                <div className='flex-box-9'>
                                    <p><CheckIcon /></p>
                                    <p className='ms-2'>Tokens gratuils lorsque la balance est inferieur a 150</p>
                                </div>
                            </div>
                            <div className='content-box-2'>
                                <div className='flex-box-9'>
                                    <p><CheckIcon /></p>
                                    <p className='ms-2'>Jusqua 5 generation en cours</p>
                                </div>
                                <div className='flex-box-9'>
                                    <p><CheckIcon /></p>
                                    <p className='ms-2'>Generation privee</p>
                                </div>
                                <div className='flex-box-9'>
                                    <p><CheckIcon /></p>
                                    <p className='ms-2'>Infrastructure prioritaire</p>
                                </div>
                                <div className='flex-box-11'>
                                    <p><CloseIcon /></p>
                                    <p className='ms-2'>File d'attente express</p>
                                </div>
                                <div className='flex-box-11'>
                                    <p><CloseIcon /></p>
                                    <p className='ms-2'>Retroactivite des tokens par mois</p>
                                </div>
                            </div>

                            <div className='card-2'>
                                <div className='content-box'>
                                    <h6>
                                        Modeles d'IA disponibles
                                    </h6>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Modeles d'IA: GPT-4</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Modeles d'IA: Llama</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Modeles d'IA: DALL-E2</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Modeles d'IA: SDXL 0.9</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Modeles d'IA: SDXL 1.0</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Modeles d'IA: StableDiffusion 1.5</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Modeles d'IA: StableDiffusion 2.1</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Modeles d'IA: DreamShaperV7</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Modeles d'IA: AbsoluteReality v1.6</p>
                                    </div>

                                </div>
                                <div className='content-box'>
                                    <h6>
                                        Generations & Usages
                                    </h6>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Chat prompt</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Image-2-Image</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Image Prompts</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Prompt Generation</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Tiling</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Usage Commercial</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Generation Privee</p>
                                    </div>
                                    <div className='flex-box-11'>
                                        <p><CloseIcon /></p>
                                        <p className='ms-2'>File d-attente express</p>
                                    </div>
                                    <div className='flex-box-11'>
                                        <p><CloseIcon /></p>
                                        <p className='ms-2'>Retroactivite des tokens par mois</p>
                                    </div>

                                </div>
                            </div>

                            <div className='token-box'>
                                <hr />
                                <p>AVANTAGES SPEC</p>
                                <hr />
                            </div>
                            <div className='flex-box-9'>
                                <p><CheckIcon /></p>
                                <p className='ms-2'>Access anticipe aux nouvelles fonctionnalites</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className='card'>
                            <div className='header-card'>
                                <div>
                                    <h5>affranchi</h5>
                                </div>
                                <div className='payment-box'>
                                    <h4><del>29.99</del><span className='h1'>29,99€</span>/MOIS</h4>
                                </div>
                                <div className='d-flex'>
                                    <Button>Créer un compte Affranchi</Button>
                                </div>

                            </div>
                            <div className='token-box'>
                                <hr />
                                <p>25000 TOKENS PAR MOIS</p>
                                <hr />
                            </div>
                            <div className='content-box'>
                                <div className='flex-box-9'>
                                    <p><CheckIcon /></p>
                                    <p className='ms-2'>Generer jusqua 1562 images par mois</p>
                                </div>
                                <div className='flex-box-9'>
                                    <p><CheckIcon /></p>
                                    <p className='ms-2'>Realiser jusqu'a 12500 echanges (chat) par mois</p>
                                </div>
                                <div className='flex-box-9'>
                                    <p><CheckIcon /></p>
                                    <p className='ms-2'>Tokens gratuils lorsque la balance est inferieur a 150</p>
                                </div>
                            </div>
                            <div className='content-box-2'>
                                <div className='flex-box-9'>
                                    <p><CheckIcon /></p>
                                    <p className='ms-2'>Jusqua 10 generation en cours</p>
                                </div>
                                <div className='flex-box-9'>
                                    <p><CheckIcon /></p>
                                    <p className='ms-2'>Generation privee</p>
                                </div>
                                <div className='flex-box-9'>
                                    <p><CheckIcon /></p>
                                    <p className='ms-2'>Infrastructure prioritaire</p>
                                </div>
                                <div className='flex-box-9'>
                                    <p><CheckIcon /></p>
                                    <p className='ms-2'>File d'attente express</p>
                                </div>
                                <div className='flex-box-11'>
                                    <p><CloseIcon /></p>
                                    <p className='ms-2'>Retroactivite des tokens par mois</p>
                                </div>
                            </div>

                            <div className='card-2'>
                                <div className='content-box'>
                                    <h6>
                                        Modeles d'IA disponibles
                                    </h6>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Modeles d'IA: GPT-4</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Modeles d'IA: Llama</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Modeles d'IA: DALL-E2</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Modeles d'IA: SDXL 0.9</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Modeles d'IA: SDXL 1.0</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Modeles d'IA: StableDiffusion 1.5</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Modeles d'IA: StableDiffusion 2.1</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Modeles d'IA: DreamShaperV7</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Modeles d'IA: AbsoluteReality v1.6</p>
                                    </div>

                                </div>
                                <div className='content-box'>
                                    <h6>
                                        Generations & Usages
                                    </h6>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Chat prompt</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Image-2-Image</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Image Prompts</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Prompt Generation</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Tiling</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Usage Commercial</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Generation Privee</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>File d-attente express</p>
                                    </div>
                                    <div className='flex-box-11'>
                                        <p><CloseIcon /></p>
                                        <p className='ms-2'>Retroactivite des tokens par mois</p>
                                    </div>

                                </div>
                            </div>

                            <div className='token-box'>
                                <hr />
                                <p>AVANTAGES SPEC</p>
                                <hr />
                            </div>
                            <div className='flex-box-9'>
                                <p><CheckIcon /></p>
                                <p className='ms-2'>Access anticipe aux nouvelles fonctionnalites</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className='card'>
                            <div className='header-card'>
                                <div>
                                    <h5>Érudit</h5>
                                </div>
                                <div className='payment-box'>
                                    <h4><del>59.99</del><span className='h1'>59,99€</span>/MOIS</h4>
                                </div>
                                <div className='d-flex'>
                                    <Button>Créer un compte Érudit</Button>
                                </div>

                            </div>
                            <div className='token-box'>
                                <hr />
                                <p>60000 TOKENS PAR MOIS</p>
                                <hr />
                            </div>
                            <div className='content-box'>
                                <div className='flex-box-9'>
                                    <p><CheckIcon /></p>
                                    <p className='ms-2'>Generer jusqua 3750 images par mois</p>
                                </div>
                                <div className='flex-box-9'>
                                    <p><CheckIcon /></p>
                                    <p className='ms-2'>Realiser jusqu'a 300000 echanges (chat) par mois</p>
                                </div>
                                <div className='flex-box-9'>
                                    <p><CheckIcon /></p>
                                    <p className='ms-2'>Tokens gratuils lorsque la balance est inferieur a 150</p>
                                </div>
                            </div>
                            <div className='content-box-2'>
                                <div className='flex-box-9'>
                                    <p><CheckIcon /></p>
                                    <p className='ms-2'>Jusqua 20 generation en cours</p>
                                </div>
                                <div className='flex-box-9'>
                                    <p><CheckIcon /></p>
                                    <p className='ms-2'>Generation privee</p>
                                </div>
                                <div className='flex-box-9'>
                                    <p><CheckIcon /></p>
                                    <p className='ms-2'>Infrastructure prioritaire</p>
                                </div>
                                <div className='flex-box-9'>
                                    <p><CheckIcon /></p>
                                    <p className='ms-2'>File d'attente express</p>
                                </div>
                                <div className='flex-box-9'>
                                    <p><CheckIcon /></p>
                                    <p className='ms-2'>Retroactivite des tokens par mois</p>
                                </div>
                            </div>

                            <div className='card-2'>
                                <div className='content-box'>
                                    <h6>
                                        Modeles d'IA disponibles
                                    </h6>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Modeles d'IA: GPT-4</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Modeles d'IA: Llama</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Modeles d'IA: DALL-E2</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Modeles d'IA: SDXL 0.9</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Modeles d'IA: SDXL 1.0</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Modeles d'IA: StableDiffusion 1.5</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Modeles d'IA: StableDiffusion 2.1</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Modeles d'IA: DreamShaperV7</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Modeles d'IA: AbsoluteReality v1.6</p>
                                    </div>

                                </div>
                                <div className='content-box'>
                                    <h6>
                                        Generations & Usages
                                    </h6>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Chat prompt</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Image-2-Image</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Image Prompts</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Prompt Generation</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Tiling</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Usage Commercial</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Generation Privee</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>File d-attente express</p>
                                    </div>
                                    <div className='flex-box-9'>
                                        <p><CheckIcon /></p>
                                        <p className='ms-2'>Retroactivite des tokens par mois</p>
                                    </div>

                                </div>
                            </div>

                            <div className='token-box'>
                                <hr />
                                <p>AVANTAGES SPEC</p>
                                <hr />
                            </div>
                            <div className='flex-box-9'>
                                <p><CheckIcon /></p>
                                <p className='ms-2'>Access anticipe aux nouvelles fonctionnalites</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <Acordianbox />
                </div>
            </div>
        </div>
    )
}

export default Mensuel
