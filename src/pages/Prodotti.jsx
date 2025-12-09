import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"

export default function Prodotti() {
const [prodotti, setNewProdotti] = useState([])
    useEffect(() => { 
        axios.get("https://fakestoreapi.com/products").then((resp) => {
            setNewProdotti(resp.data)
        })
    }, [])

    return (
        <div className="container">
            <h1>I nostri prodotti in evidenza</h1>
            <div className="row">
            
            {/* card */}
            {prodotti.map((prodotto, index) =>{
            const {title, price, description, category, image} = prodotto;
            return (
                <div className="col-3 py-4" key={index}>
            <div className="card h-100 border-0 transparent shadow">
                <img src={image} className="card-img-top py-2 px-4" alt={title}/>
                    <div className="card-body py-3">
                        <span className={`badge text-secondary py-2 px-3 ${category === "men's clothing" ? "bg-primary-subtle" : category === "jewelery" ? "bg-warning-subtle" : category === "electronics" ? "bg-dark-subtle" : category === "women's clothing" ? "bg-danger-subtle" : ""} `}>{category}</span>
                        <h5 className="card-title py-3 fw-bold">{title}</h5>
                        <p className="card-text fst-italic descrizione-prodotto">{description}</p>
                        <p className="fst-italic fw-bold">Prezzo: <span className="text-danger">{price} $</span></p>
                    </div>
            </div>
            </div>
            )
        })}
            </div>
        </div>
        
    )
}