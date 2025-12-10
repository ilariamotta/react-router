import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import Card from "../components/Card"

export default function Prodotti() {
const [prodotti, setNewProdotti] = useState([])
    useEffect(() => { 
        axios.get("https://fakestoreapi.com/products").then((resp) => {
            setNewProdotti(resp.data)
        })
    }, [])

    return (
        <div className="container">
            <h1 className="padding-150">I nostri prodotti in evidenza</h1>
            <div className="row">
            
            {/* card */}
            {prodotti.map((prodotto, index) =>{
            const { id } = prodotto;
            return (
                <div className="col-3 py-4" key={id}>
            <Card prodotto={prodotto} />
            </div>
            )
        })}
            </div>
        </div>
        
    )
}