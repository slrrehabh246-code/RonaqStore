export default function Products() {
  const allProducts = [
    { id: 1, name: "Elegance Gold Watch", price: "$299.00", category: "Accessories", icon: "✨" },
    { id: 2, name: "Minimalist Leather Bag", price: "$450.00", category: "Bags", icon: "👜" },
    { id: 3, name: "Classic Silk Scarf", price: "$120.00", category: "Accessories", icon: "🧣" },
    { id: 4, name: "Modern Ceramic Vase", price: "$199.00", category: "Home", icon: "🏺" },
    { id: 5, name: "Silver Elegance Ring", price: "$150.00", category: "Jewelry", icon: "💍" },
    { id: 6, name: "Designer Sunglasses", price: "$210.00", category: "Accessories", icon: "🕶️" },
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8fafc", padding: "40px 20px", fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "36px", fontWeight: "bold", color: "#0f172a", marginBottom: "10px" }}>All Products</h1>
        <p style={{ color: "#64748b", marginBottom: "30px" }}>Browse our complete catalog of luxury items.</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
          {allProducts.map((p) => (
            <div key={p.id} style={{ backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "20px" }}>
              <div style={{ height: "140px", backgroundColor: "#f1f5f9", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "40px", marginBottom: "15px" }}>
                {p.icon}
              </div>
              <span style={{ fontSize: "12px", color: "#64748b", textTransform: "uppercase" }}>{p.category}</span>
              <h3 style={{ fontWeight: "bold", fontSize: "18px", color: "#0f172a", marginTop: "4px" }}>{p.name}</h3>
              <p style={{ color: "#d97706", fontWeight: "bold", marginTop: "8px" }}>{p.price}</p>
              <button style={{ width: "100%", marginTop: "15px", backgroundColor: "#0f172a", color: "#ffffff", padding: "10px", borderRadius: "6px", border: "none", cursor: "pointer", fontWeight: "bold" }}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}