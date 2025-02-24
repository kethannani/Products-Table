import React, { useState } from 'react';

const Products = () => {
    const [prod, setProd] = useState([
        {id: 1, name: "Printed Cotton Jacket", tag1: "Unsex", tag2: "Bag", var: 2, price: "$45.00", Stock: 999, Low: 500},
        {id: 2, name: "Blue Faux Leather", tag1: "Unsex", tag2: "Bag", var: 2, price: "$45.00", Stock: 999, Low: 500},
        {id: 3, name: "Tribal Waterfall West", tag1: "Unsex", tag2: "Bag", var: 2, price: "$45.00", Stock: 999, Low: 500},
        {id: 4, name: "Braver Bomber Jacket", tag1: "Unsex", tag2: "Bag", var: 2, price: "$45.00", Stock: 999, Low: 500},
        {id: 5, name: "Olove Drape Vest", tag1: "Unsex", tag2: "Bag", var: 2, price: "$45.00", Stock: 999, Low: 500},
        {id: 6, name: "Black Denim Jacket", tag1: "Unsex", tag2: "Bag", var: 2, price: "$45.00", Stock: 999, Low: 500},
        {id: 7, name: "Army Green Jacket", tag1: "Unsex", tag2: "Bag", var: 2, price: "$45.00", Stock: 999, Low: 500}
    ]);

    const [selectedRows, setSelectedRows] = useState([]);

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedRows(prod.map(item => item.id)); // Select all
        } else {
            setSelectedRows([]); // Deselect all
        }
    };

    const handleRowSelect = (e, id) => {
        if (e.target.checked) {
            setSelectedRows([...selectedRows, id]);
        } else {
            setSelectedRows(selectedRows.filter(itemId => itemId !== id));
        }
    };

    return (
        <div className='container'>
            <div className="header">
                <h1>Products</h1>
                Dashboard/Products
            </div>
            <div className="main">
                <table>
                    <thead>
                        <tr>
                            <th>
                                <input
                                    type="checkbox"
                                    onChange={handleSelectAll}
                                    checked={selectedRows.length === prod.length}
                                />
                            </th>
                            <th>Product</th>
                            <th>Tags</th>
                            <th colSpan="4">NYC Outlet</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>Var</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Low</th>
                        </tr>
                    </thead>
                    <tbody>
                        {prod.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={selectedRows.includes(item.id)}
                                        onChange={(e) => handleRowSelect(e, item.id)}
                                    />
                                </td>
                                <td>{item.name}</td>
                                <td>{item.tag1} {item.tag2}</td>
                                <td>{item.var}</td>
                                <td>{item.price}</td>
                                <td>{item.Stock}</td>
                                <td>{item.Low}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Products;
