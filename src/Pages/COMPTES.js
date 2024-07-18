import React from "react";
import Togglebtn from "../Components/ToggleBtn";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { userProfileUpdateAsyncThunk } from "../store/pagesSlices/authSlice";
import { toast } from "react-toastify";
import Compressor from 'compressorjs';

const COMPTES = () => {
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  const dispatch = useDispatch()
  const [email, setEmail] = useState(user?.email);
  const [name, setName] = useState(user?.userName);
  const [file, setFile] = useState(null);
  const [isCopied, setIsCopied] = useState(null);
  const [avatarImage, setAvatarImage] = useState(null);
  console.log('file', file)
  const handleFileChange = (e) => {
    e.preventDefault();
    const selectedFile = e.target.files[0];

    new Compressor(selectedFile, {
      quality: 0.8,
      success: (compressedResult) => {
        setFile(compressedResult);
        if (selectedFile) {
          const reader = new FileReader();
          reader.onload = () => {
            setAvatarImage(reader.result);
          };
          reader.readAsDataURL(selectedFile);

        }
      },
    });
  };


  const handleSubmit = () => {
    if (!email.trim() || !name.trim() || !file) {
      alert("Fill in all fields");
      return;
    }
    const formData = new FormData();
    formData.append("email", email);
    formData.append("userName", name);
    formData.append("avatar", file);
    for (const value of formData.values()) {
      console.log("value formData", value);
    }

    dispatch(
      userProfileUpdateAsyncThunk({
        formData,
      })
    );
  };

  const handleCopy = (value) => {
    const promptText = value;

    // Create a temporary textarea
    const textarea = document.createElement("textarea");
    textarea.value = promptText;
    document.body.appendChild(textarea);

    // Select and copy the text using the Clipboard API
    textarea.select();
    try {
      document.execCommand("copy");
      setIsCopied(value);
      setTimeout(() => setIsCopied(false), 1000);
      setIsCopied(toast.success("Copied Successfully!", {
        autoClose: 2000,
      }));
    } catch (err) {
      console.error("Unable to copy text:", err);
      // setIsCopied(false);
    } finally {
      // Remove the temporary textarea
      document.body.removeChild(textarea);
    }
  };


  let userData = JSON.parse(sessionStorage.getItem("user"));
  console.log("🚀 ~ COMPTES ~ userData:", userData)
  return (
    <div className="Compelete_page">
      <div className="compte_heading">
        <h1>Mon compte</h1>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="input-field">
            <label htmlFor="email">Votre email</label>
            <input
              type="email"
              id="email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="pillulerouge@gmail.com"
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="input-field">
            <label htmlFor="email">Code de parainnage</label>
            <div className="Flex_box">
              <input
                type="text"
                id="email"
                name="email"
                value={`https://app.themorpheus.ai/refferal/${user?.userName}`}
                placeholder="nripghhiahgrhigeiggn4543252ATGNG3314Gg"
                className="input"
              />
              <Button
                variant="primary"
                onClick={() =>
                  handleCopy(
                    `https://app.themorpheus.ai/refferal/${user?.userName}`
                  )
                }
              >
                {isCopied ? "Copied" : "COPIER"}
              </Button>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="input-field">
            <label htmlFor="name">Votre identifiant</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="qndrrRoux"
            />
          </div>
          <label for="fileInput" className="custom-file-input">
            <input
              type="file"
              id="fileInput"
              className="file"
              onChange={handleFileChange}
              accept="image/*"
            />
            Upload File
          </label>
        </div>
        <div className="col-lg-6">
          <div className="input-field">
            <label htmlFor="email">Votre forfait</label>
            <div className="Flex_box">
              <div className="Flex_box_2 flex-grow-1">
                <p className="d-sm-flex d-none">
                  {" "}
                  <Togglebtn className="mt-2" />{" "}
                  <span className="ps-2">{userData?.subscriptionPlan}:</span>
                </p>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="150 crédit - 3 génération par jours - Export en HD "
                  className="input"
                />
              </div>
              <Link to="/annuel">
                {" "}
                <Button variant="primary">Upgrade</Button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="Button_box">
        <p>Quels sont vos centres d’intérêts</p>
        <div className="Button_content">
          <Button variant="primary">Publicité</Button>
          <Button variant="primary">Architecture</Button>
          <Button variant="primary">Art</Button>
          <Button variant="primary">Éducation</Button>
          <Button variant="primary">Mode</Button>
          <Button variant="primary">Film/Série</Button>
          <Button variant="primary">Design d’intérieur </Button>
          <Button variant="primary">Marketing</Button>
          <Button variant="primary">Design UI</Button>
          <Button variant="primary">Génération d’image</Button>
          <Button variant="primary">Jeux vidéo</Button>
          <Button variant="primary">Création de contenu</Button>
        </div>
      </div>
      <div className="flex_box_3">
        <div>
          <Togglebtn />
        </div>
        <div>
          <p className="ms-md-4">
            Je confirme avoir au minimum 18 ans et je veux pouvoir voir du
            contenu NSFW
          </p>
        </div>
      </div>

      <div className="flex_box_4">
        <div>
          <Button className="btn-1 me-4">Annuler</Button>
        </div>
        <div>
          <Button onClick={handleSubmit} className="btn-2">
            Sauvegarder
          </Button>
        </div>
      </div>
    </div>
  );
};

export default COMPTES;
