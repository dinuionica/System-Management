import "./App.css";
import { useEffect, useState } from 'react'
import SearchItem from "./components/SearchItem"
import AddItem from "./components/AddItem"
import DisplayItems from "./components/DisplayItems";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [data, setData] = useState({ items: [] });
  const [filters, setFilterData] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then(response => response.json())
      .then(data => setData({ items: data }))
  }, [])


  const filterDataParams = (params) => {
    setFilterData(params);
  }

  const addItemsToData = (item) => {
    let currentData = data["items"];

    let optionsRequest = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    }

    fetch("http://localhost:3000/items", optionsRequest)
      .then(response => response.json())
      .then(data => {
        currentData.push(data);
        setData({ items: currentData });
      });

  }

  const filterItemsFromData = (data) => {
    let filtersData = []

    if (!filters.name || !filters.type || !filters.price || !filters.brand) {
      return data;
    }
    for (const item of data) {
      if (filters.name !== "" && item.name !== filters.name) {
        continue;
      }
      if (filters.type !== "" && item.type !== filters.type) {
        continue;
      }
      if (filters.price !== 0 && item.price !== filters.price) {
        continue;
      }
      if (filters.brand !== "" && item.brand !== filters.brand) {
        continue;
      }

      filtersData.push(item);
    }
    return filtersData;
  }

  return (
    <div className="container">
      <div className="row">
        <DisplayItems items={filterItemsFromData(data["items"])} />
      </div>
      <div className="row">
        <SearchItem filterItems={setFilterData} />
      </div>
      <div className="row">
        <AddItem addItems={addItemsToData} />
      </div>
    </div >
  );
}

export default App;
