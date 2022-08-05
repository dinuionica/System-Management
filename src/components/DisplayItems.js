
const displayEveryField = (item) => {
    return (
        <tr>
            <th>{item.id}</th>
            <td>{item.name}</td>
            <td>{item.type}</td>
            <td>{item.price}</td>
            <td>{item.brand}</td>
        </tr>
    );
}

function DisplayItems(props) {
    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <th>All items </th>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Price</th>
                        <th>Brand</th>
                    </tr>
                </thead>
                <tbody>
                    {props.items.map(displayEveryField)}
                </tbody>
            </table>
        </div>
    );
}
export default DisplayItems;