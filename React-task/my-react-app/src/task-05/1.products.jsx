import React, { useState } from "react";

export default function ProductList() {
  const [isGrid, setIsGrid] = useState(true);
  const [filter, setFilter] = useState("");
  const [hovered, setHovered] = useState(null);

  const products = [
    { name: "Light", id: 100, price: 1300 },
    { name: "Speaker", id: 101, price: 5000 },
    { name: "Laptop", id: 102, price: 50000 },
  ];   

  // FILTER LOGIC
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(filter.trim().toLowerCase())
  );

  return (
    <>
      <h2>Product List</h2>

      {/* Filter Input */}
      <input
        type="text"
        placeholder="Search products..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ padding: 8, marginBottom: 15, width: "60%" }}
      />

      <br />

      {/* Toggle Button */}
      <button onClick={() => setIsGrid(!isGrid)}>
        Switch to {isGrid ? "List View" : "Grid View"}
      </button>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <p style={{ marginTop: 20 }}>No products available</p>
      )}

      <div
        style={{
          marginTop: 20,
          display: "grid",
          gridTemplateColumns: isGrid ? "repeat(2, 1fr)" : "repeat(1, 1fr)",
          gap: "10px",
        }}
      >
        {/* Render Products */}
        {filteredProducts.map((p) => (
          <div
            key={p.id}
            onMouseEnter={() => setHovered(p.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: 6,
              display: "flex",
              flexDirection: isGrid ? "column" : "row",
              alignItems: isGrid ? "flex-start" : "center",
              justifyContent: "space-between",
              gap: isGrid ? "6px" : "20px",
              transition: "0.3s",
              background: hovered === p.id ? "#f0f8ff" : "white",
              color: 'black'
            }}
          >
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}