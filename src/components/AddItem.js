import { useState } from 'react'

function AddItem(props) {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [price, setPrice] = useState(0);
    const [brand, setBrand] = useState("");

    const buttonClicked = () => {
        props.addItems({
            name: name,
            type: type,
            price: price,
            brand: brand
        });

        setName("");
        setType("");
        setPrice(0);
        setBrand("");
    }

    return (
        <div className="container">
            <div className="col">
                <div className="row">
                    <label htmlFor="name-field">Add A Name: </label>
                    <input type="text" className="form-control" id="name-input" value={name} onChange={(e) => {
                        setName(e.target.value);
                    }} />
                </div>
                <div className="row">
                    <label htmlFor="type-field">Add a Type: </label>
                    <input type="text" className="form-control" id="type-input" value={type} onChange={(e) => {
                        setType(e.target.value);
                    }} />
                </div>
                <div className="row">
                    <label htmlFor="price-field">Add a Price: </label>
                    <input type="number" className="form-control" id="price-input" value={price} onChange={(e) => {
                        setPrice(e.target.value);
                    }} />
                </div>
                <div className="row">
                    <label htmlFor="brand-field">Add a Brand: </label>
                    <input htmlFor="text" className="form-control" id="brand-input" value={brand} onChange={(e) => {
                        setBrand(e.target.value);
                    }} />
                </div>
                <div className="row">
                    <button type="button" className="btn btn-primary" onClick={buttonClicked}>Add Item</button>
                </div>

            </div>

        </div>
    )
}

export default AddItem;