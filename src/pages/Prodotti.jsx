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
            <h1 className="py-4">I nostri prodotti in evidenza</h1>
            <div className="row">
            
            {/* card */}
            {prodotti.map((prodotto, index) =>{
            const {title, price, description, category, image} = prodotto;
            return (
                <div className="col-3 py-4" key={index}>
            <div className="card h-100">
                <img src={image} className="card-img-top" alt={title}/>
                    <div className="card-body">
                        <p>{category}</p>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p>{price}</p>
                    </div>
            </div>
            </div>
            )
        })}
            </div>
        </div>
        
    )
}