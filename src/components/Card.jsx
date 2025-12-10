import { Link } from "react-router-dom";

export default function Card({ prodotto }) {
    const {title, price, description, category, image, id} = prodotto;
    return (
    <div className="card h-100 border-0 transparent shadow">
                <img src={image} className="card-img-top py-2 px-4" alt={title}/>
                    <div className="card-body py-3">
                        <span className={`badge text-secondary py-2 px-3 ${category === "men's clothing" ? "bg-primary-subtle" : category === "jewelery" ? "bg-warning-subtle" : category === "electronics" ? "bg-dark-subtle" : category === "women's clothing" ? "bg-danger-subtle" : ""} `}>{category}</span>
                        <h5 className="card-title py-3 fw-bold">{title}</h5>
                        <p className="card-text fst-italic descrizione-prodotto">{description}</p>
                        <p className="fst-italic fw-bold">Prezzo: <span className="text-danger">{price} $</span></p>
                        <Link className="bottone-prodotto"to={`/prodotti/${id}`}>Vedi dettagli prodotto</Link>
                    </div>
            </div>
            )
}