export default function ProdottoUnico({prodotto}) {
const {title, price, description, category, image} = prodotto;
    return(
        <div className="container shadow p-4 d-flex flex-row align-items-center gap-4 rounded prodotto-transparent">
            <img className="img-prodotto" src={image} alt={title}/>
            <div className="d-flex flex-column">
            <span className={`badge d-inline-block align-self-start text-secondary py-2 px-3 ${category === "men's clothing" ? "bg-primary-subtle" : category === "jewelery" ? "bg-warning-subtle" : category === "electronics" ? "bg-dark-subtle" : category === "women's clothing" ? "bg-danger-subtle" : ""} `}>{category}</span>
            <h1>{title}</h1>
            <p className="fw-bold">Descrizione prodotto:</p><span>{description}</span>
            <br/>
            <p className="fst-italic fw-bold">Prezzo: <span className="text-danger">{price}$</span></p>
            </div>
            
            </div>
    )
}