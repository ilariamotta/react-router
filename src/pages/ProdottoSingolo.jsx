import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { useState } from "react";


export default function ProdottoSingolo() {
    const { id } = useParams();
    const [prodottoSingolo, setProdottoSingolo] = useState({})

    useEffect(() => {axios.get(`https://fakestoreapi.com/products/${id}`)
    .then((resp) => {
        setProdottoSingolo(resp.data)
    });
}, [id]);

const {title, price, description, category, image} = prodottoSingolo;

    return (
        <div className="padding-150">
            <div className="container bg-white shadow p-4 d-flex flex-row align-items-center gap-4 rounded">
            <img className="img-prodotto" src={image} alt={title}/>
            <div className="d-flex flex-column">
            <h1>{title}</h1>
            <p>Descrizione prodotto:</p>
            <p>{description}</p>
            <p>Prezzo: <span>{price}$</span></p>
            </div>
            
            </div>
            </div>
    )
}