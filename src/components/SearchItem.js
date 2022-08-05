import { useState } from 'react'

function SearchItem(props) {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [price, setPrice] = useState(0);
    const [brand, setBrand] = useState("");

    const buttonClicked = () => {
        props.filterItems({ name: name, type: type, price: price, brand: brand })
    }
    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col">
                    <label htmlFor="name-field">Name: </label><br></br>
                    <input type="text" className="form-control" id="name-input" value={name} onChange={(e) => {
                        setName(e.target.value);
                    }} />
                </div>

                <div className="col">
                    <label htmlFor="type-field">Type: </label><br></br>
                    <input type="text" className="form-control" id="type-input" value={type} onChange={(e) => {
                        setType(e.target.value);
                    }} />
                </div>

                <div className="col">
                    <label htmlFor="price-field">Price: </label><br></br>
                    <input type="number" className="form-control" id="price-input" value={price} onChange={(e) => {
                        setPrice(e.target.value);
                    }} />
                </div>

                <div className="col">
                    <label htmlFor="brand-field">Brand: </label><br></br>
                    <input htmlFor="text" className="form-control" id="brand-input" value={brand} onChange={(e) => {
                        setBrand(e.target.value);
                    }} />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-4" />
                <button type="button" className="col-4 btn btn-primary" onClick={buttonClicked}>Search</button>
            </div>
        </div>
    );
}


export default SearchItem;