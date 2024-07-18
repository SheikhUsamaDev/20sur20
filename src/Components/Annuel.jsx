import React from "react";
import Prizingtop from "./prizingtop";
import Button from "react-bootstrap/Button";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Acordianbox from "./Acordianbox";
import { createSubscription } from "react-redux/es/utils/Subscription";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Annuel = () => {
  const handlePayment = async (subscriptionPlan) => {
    console.log("🚀 ~ handlePayment ~ subscriptionPlan:", subscriptionPlan);
    const basePath = process.env.REACT_APP_basePath;
    try {
      const response = await axios.post(
      basePath + "/subscription",
        
        { subscriptionPlan },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      const { paymentUrl } = response.data; // Access data directly

      console.log("🚀 ~ handlePayment ~ paymentUrl:", paymentUrl);
      window.location.href = paymentUrl;
    } catch (error) {
      console.error("Error initiating payment:", error);
    }
  };

  //   let userlocal = useSelector((state) => state.auth?.user);
  let userlocal = useSelector((state) => state.auth?.user);
  console.log("🚀 ~ Annuel>>>>>>>>> ~ userlocal:", userlocal);

  return (
    <div className="Annuel">
      <div>
        {/* <button onClick={()=>handlePayment("Free")}>Pay with Mollie</button> */}

        <Prizingtop />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6 col-12">
            <div className="card">
              <div className="header-card">
                <div>
                  <h5>GRATUIT</h5>
                </div>
                <div className="payment-box">
                  <h4>
                    <span className="h1">0€</span>/MOIS
                  </h4>
                </div>

                <div
                  className="d-flex"
                  style={{
                    cursor: "not-allowed",
                    display: "block",
                    opacity: 0.5,
                    pointerEvents: "none",
                  }}
                >
                  <Button>Creer un compte gratuit</Button>
                </div>
              </div>
              <div className="token-box">
                <hr />
                <p>150 TOKENS PAR MOIS</p>
                <hr />
              </div>
              <div className="content-box">
                <div className="flex-box-9">
                  <p>
                    <CheckIcon />
                  </p>
                  <p className="ms-2">Generer jusqua 9 images par mois</p>
                </div>
                <div className="flex-box-9">
                  <p>
                    <CheckIcon />
                  </p>
                  <p className="ms-2">
                    Realiser jusqu'a 75 echanges (chat) par mois
                  </p>
                </div>
                <div className="flex-box-9">
                  <p>
                    <CheckIcon />
                  </p>
                  <p className="ms-2">
                    Tokens gratuils lorsque la balance est inferieur a 150
                  </p>
                </div>
              </div>
              <div className="content-box-2">
                <div className="flex-box-9">
                  <p>
                    <CheckIcon />
                  </p>
                  <p className="ms-2">Jusqua 1 generation en cours</p>
                </div>
                <div className="flex-box-11">
                  <p>
                    <CloseIcon />
                  </p>
                  <p className="ms-2">Generation privee</p>
                </div>
                <div className="flex-box-11">
                  <p>
                    <CloseIcon />
                  </p>
                  <p className="ms-2">Infrastructure prioritaire</p>
                </div>
                <div className="flex-box-11">
                  <p>
                    <CloseIcon />
                  </p>
                  <p className="ms-2">File d'attente express</p>
                </div>
                <div className="flex-box-11">
                  <p>
                    <CloseIcon />
                  </p>
                  <p className="ms-2">Retroactivite des tokens par mois</p>
                </div>
              </div>

              <div className="card-2">
                <div className="content-box">
                  <h6>Modeles d'IA disponibles</h6>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Modeles d'IA: GPT-4</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Modeles d'IA: Llama</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Modeles d'IA: DALL-E2</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Modeles d'IA: SDXL 0.9</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Modeles d'IA: SDXL 1.0</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Modeles d'IA: StableDiffusion 1.5</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Modeles d'IA: StableDiffusion 2.1</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Modeles d'IA: DreamShaperV7</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Modeles d'IA: AbsoluteReality v1.6</p>
                  </div>
                </div>
                <div className="content-box">
                  <h6>Generations & Usages</h6>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Chat prompt</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Image-2-Image</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Image Prompts</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Prompt Generation</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Tiling</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Usage Commercial</p>
                  </div>
                  <div className="flex-box-11">
                    <p>
                      <CloseIcon />
                    </p>
                    <p className="ms-2">Generation Privee</p>
                  </div>
                  <div className="flex-box-11">
                    <p>
                      <CloseIcon />
                    </p>
                    <p className="ms-2">File d-attente express</p>
                  </div>
                  <div className="flex-box-11">
                    <p>
                      <CloseIcon />
                    </p>
                    <p className="ms-2">Retroactivite des tokens par mois</p>
                  </div>
                </div>
              </div>

              <div className="token-box">
                <hr />
                <p>AVANTAGES SPEC</p>
                <hr />
              </div>
              <div className="flex-box-11">
                <p>
                  <CloseIcon />
                </p>
                <p className="ms-2">
                  Access anticipe aux nouvelles fonctionnalites
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-12">
            <div className="card">
              <div className="header-card">
                <div>
                  <h5>éveillé</h5>
                </div>
                <div className="payment-box">
                  <h4>
                    <span className="h1">10€</span>/MOIS
                  </h4>
                </div>
                <div
                  className="d-flex"
                  style={
                    userlocal?.subscriptionPlan == "Awake" &&
                    userlocal?.total_points_earned > 2
                      ? {
                          cursor: "not-allowed",
                          display: "block",
                          opacity: 0.5,
                          pointerEvents: "none",
                        }
                      : {}
                  }
                  onClick={() => handlePayment("Awake")}
                >
                  <Button>Créer un compte Éveillé</Button>
                </div>
              </div>
              <div className="token-box">
                <hr />
                <p>8500 TOKENS PAR MOIS</p>
                <hr />
              </div>
              <div className="content-box">
                <div className="flex-box-9">
                  <p>
                    <CheckIcon />
                  </p>
                  <p className="ms-2">Générer jusqu’à 531 images par mois</p>
                </div>
                <div className="flex-box-9">
                  <p>
                    <CheckIcon />
                  </p>
                  <p className="ms-2">
                    Réaliser jusqu’a 4250 échanges (chat) par mois
                  </p>
                </div>
                <div className="flex-box-9">
                  <p>
                    <CheckIcon />
                  </p>
                  <p className="ms-2">
                    Tokens gratuits lorsque la balance est inférieur à 150
                  </p>
                </div>
              </div>
              <div className="content-box-2">
                <div className="flex-box-9">
                  <p>
                    <CheckIcon />
                  </p>
                  <p className="ms-2">Jusqu’à 5 génération en cours</p>
                </div>
                <div className="flex-box-9">
                  <p>
                    <CheckIcon />
                  </p>
                  <p className="ms-2">Generation privee</p>
                </div>
                <div className="flex-box-9">
                  <p>
                    <CheckIcon />
                  </p>
                  <p className="ms-2">Infrastructure prioritaire</p>
                </div>
                <div className="flex-box-11">
                  <p>
                    <CloseIcon />
                  </p>
                  <p className="ms-2">File d'attente express</p>
                </div>
                <div className="flex-box-11">
                  <p>
                    <CloseIcon />
                  </p>
                  <p className="ms-2">Retroactivite des tokens par mois</p>
                </div>
              </div>

              <div className="card-2">
                <div className="content-box">
                  <h6>Modeles d'IA disponibles</h6>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Modeles d'IA: GPT-4</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Modeles d'IA: Llama</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Modeles d'IA: DALL-E2</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Modeles d'IA: SDXL 0.9</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Modeles d'IA: SDXL 1.0</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Modeles d'IA: StableDiffusion 1.5</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Modeles d'IA: StableDiffusion 2.1</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Modeles d'IA: DreamShaperV7</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Modeles d'IA: AbsoluteReality v1.6</p>
                  </div>
                </div>
                <div className="content-box">
                  <h6>Generations & Usages</h6>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Chat prompt</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Image-2-Image</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Image Prompts</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Prompt Generation</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Tiling</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Usage Commercial</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Generation Privee</p>
                  </div>
                  <div className="flex-box-11">
                    <p>
                      <CloseIcon />
                    </p>
                    <p className="ms-2">File d-attente express</p>
                  </div>
                  <div className="flex-box-11">
                    <p>
                      <CloseIcon />
                    </p>
                    <p className="ms-2">Retroactivite des tokens par mois</p>
                  </div>
                </div>
              </div>

              <div className="token-box">
                <hr />
                <p>AVANTAGES SPEC</p>
                <hr />
              </div>
              <div className="flex-box-9">
                <p>
                  <CheckIcon />
                </p>
                <p className="ms-2">
                  Access anticipe aux nouvelles fonctionnalites
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-12">
            <div className="card">
              <div className="header-card">
                <div>
                  <h5>affranchi</h5>
                </div>
                <div className="payment-box">
                  <h4>
                    <span className="h1">24€</span>/MOIS
                  </h4>
                </div>
                <div
                  className="d-flex"
                  style={
                    userlocal?.subscriptionPlan == "Freed" &&
                    userlocal?.total_points_earned > 2
                      ? {
                          cursor: "not-allowed",
                          display: "block",
                          opacity: 0.5,
                          pointerEvents: "none",
                        }
                      : {}
                  }
                  onClick={() => handlePayment("Freed")}
                >
                  <Button>Créer un compte Affranchi</Button>
                </div>
              </div>
              <div className="token-box">
                <hr />
                <p>25000 TOKENS PAR MOIS</p>
                <hr />
              </div>
              <div className="content-box">
                <div className="flex-box-9">
                  <p>
                    <CheckIcon />
                  </p>
                  <p className="ms-2">Générer jusqu’à 1562 images par mois</p>
                </div>
                <div className="flex-box-9">
                  <p>
                    <CheckIcon />
                  </p>
                  <p className="ms-2">
                    Réaliser jusqu’a 12500 échanges (chat) par mois
                  </p>
                </div>
                <div className="flex-box-9">
                  <p>
                    <CheckIcon />
                  </p>
                  <p className="ms-2">
                    Tokens gratuits lorsque la balance est inférieur à 150
                  </p>
                </div>
              </div>
              <div className="content-box-2">
                <div className="flex-box-9">
                  <p>
                    <CheckIcon />
                  </p>
                  <p className="ms-2">Jusqu’à 10 génération en cours</p>
                </div>
                <div className="flex-box-9">
                  <p>
                    <CheckIcon />
                  </p>
                  <p className="ms-2">Generation privee</p>
                </div>
                <div className="flex-box-9">
                  <p>
                    <CheckIcon />
                  </p>
                  <p className="ms-2">Infrastructure prioritaire</p>
                </div>
                <div className="flex-box-9">
                  <p>
                    <CheckIcon />
                  </p>
                  <p className="ms-2">File d'attente express</p>
                </div>
                <div className="flex-box-11">
                  <p>
                    <CloseIcon />
                  </p>
                  <p className="ms-2">Retroactivite des tokens par mois</p>
                </div>
              </div>

              <div className="card-2">
                <div className="content-box">
                  <h6>Modeles d'IA disponibles</h6>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Modeles d'IA: GPT-4</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Modeles d'IA: Llama</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Modeles d'IA: DALL-E2</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Modeles d'IA: SDXL 0.9</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Modeles d'IA: SDXL 1.0</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Modeles d'IA: StableDiffusion 1.5</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Modeles d'IA: StableDiffusion 2.1</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Modeles d'IA: DreamShaperV7</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Modeles d'IA: AbsoluteReality v1.6</p>
                  </div>
                </div>
                <div className="content-box">
                  <h6>Generations & Usages</h6>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Chat prompt</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Image-2-Image</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Image Prompts</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Prompt Generation</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Tiling</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Usage Commercial</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Generation Privee</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">File d-attente express</p>
                  </div>
                  <div className="flex-box-11">
                    <p>
                      <CloseIcon />
                    </p>
                    <p className="ms-2">Retroactivite des tokens par mois</p>
                  </div>
                </div>
              </div>

              <div className="token-box">
                <hr />
                <p>AVANTAGES SPEC</p>
                <hr />
              </div>
              <div className="flex-box-9">
                <p>
                  <CheckIcon />
                </p>
                <p className="ms-2">
                  Access anticipe aux nouvelles fonctionnalites
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-12">
            <div className="card">
              <div className="header-card">
                <div>
                  <h5>Érudit</h5>
                </div>
                <div className="payment-box">
                  <h4>
                    <span className="h1">48€</span>/MOIS
                  </h4>
                </div>
                <div
                  className="d-flex"
                  style={
                    userlocal?.subscriptionPlan == "Erudite" &&
                    userlocal?.total_points_earned > 2
                      ? {
                          cursor: "not-allowed",
                          display: "block",
                          opacity: 0.5,
                          pointerEvents: "none",
                        }
                      : {}
                  }
                  onClick={() => handlePayment("Erudite")}
                >
                  <Button>Créer un compte Érudit</Button>
                </div>
              </div>
              <div className="token-box">
                <hr />
                <p>60000 TOKENS PAR MOIS</p>
                <hr />
              </div>
              <div className="content-box">
                <div className="flex-box-9">
                  <p>
                    <CheckIcon />
                  </p>
                  <p className="ms-2">Générer jusqu’à 3750 images par mois</p>
                </div>
                <div className="flex-box-9">
                  <p>
                    <CheckIcon />
                  </p>
                  <p className="ms-2">
                    Réaliser jusqu’a 30000 échanges (chat) par mois
                  </p>
                </div>
                <div className="flex-box-9">
                  <p>
                    <CheckIcon />
                  </p>
                  <p className="ms-2">
                    Tokens gratuits lorsque la balance est inférieur à 150
                  </p>
                </div>
              </div>
              <div className="content-box-2">
                <div className="flex-box-9">
                  <p>
                    <CheckIcon />
                  </p>
                  <p className="ms-2">Jusqua 1 generation en cours</p>
                </div>
                <div className="flex-box-9">
                  <p>
                    <CheckIcon />
                  </p>
                  <p className="ms-2">Generation privee</p>
                </div>
                <div className="flex-box-9">
                  <p>
                    <CheckIcon />
                  </p>
                  <p className="ms-2">Infrastructure prioritaire</p>
                </div>
                <div className="flex-box-9">
                  <p>
                    <CheckIcon />
                  </p>
                  <p className="ms-2">File d'attente express</p>
                </div>
                <div className="flex-box-9">
                  <p>
                    <CheckIcon />
                  </p>
                  <p className="ms-2">Retroactivite des tokens par mois</p>
                </div>
              </div>

              <div className="card-2">
                <div className="content-box">
                  <h6>Modeles d'IA disponibles</h6>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Modeles d'IA: GPT-4</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Modeles d'IA: Llama</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Modeles d'IA: DALL-E2</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Modeles d'IA: SDXL 0.9</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Modeles d'IA: SDXL 1.0</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Modeles d'IA: StableDiffusion 1.5</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Modeles d'IA: StableDiffusion 2.1</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Modeles d'IA: DreamShaperV7</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Modeles d'IA: AbsoluteReality v1.6</p>
                  </div>
                </div>
                <div className="content-box">
                  <h6>Generations & Usages</h6>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Chat prompt</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Image-2-Image</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Image Prompts</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Prompt Generation</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Tiling</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Usage Commercial</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Generation Privee</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">File d-attente express</p>
                  </div>
                  <div className="flex-box-9">
                    <p>
                      <CheckIcon />
                    </p>
                    <p className="ms-2">Retroactivite des tokens par mois</p>
                  </div>
                </div>
              </div>

              <div className="token-box">
                <hr />
                <p>AVANTAGES SPEC</p>
                <hr />
              </div>
              <div className="flex-box-9">
                <p>
                  <CheckIcon />
                </p>
                <p className="ms-2">
                  Access anticipe aux nouvelles fonctionnalites
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Acordianbox />
        </div>
      </div>
    </div>
  );
};

export default Annuel;
