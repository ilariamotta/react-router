import axios from "axios";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react";
import ProdottoUnico from "../components/ProdottoUnico";


export default function ProdottoSingolo() {
    const { id } = useParams();
    const [prodottoSingolo, setProdottoSingolo] = useState(null)
    const navigate = useNavigate();
    

    useEffect(() => {axios.get(`https://fakestoreapi.com/products/${id}`)
    .then((resp) => {
        setProdottoSingolo(resp.data)
    })
    .catch((err) => {
        console.log(err);
        navigate("/prodotti")
    })
}, [id]);

 function tornaIndietro(event) {
    event.preventDefault()
    navigate(-1)
 }

    return (
        <div className="padding-150">
            
            {prodottoSingolo !== null && <ProdottoUnico prodotto={prodottoSingolo}/>}
            <div className="text-center padding-150"><button className="bottone-prodotto" onClick={tornaIndietro}>Torna indietro</button></div>
            
            </div>
    )
}