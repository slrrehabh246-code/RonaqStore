export default function Categories() {
  const cats = [
    { name: "Accessories", count: "12 Items", icon: "💎" },
    { name: "Bags & Wallets", count: "8 Items", icon: "👜" },
    { name: "Home Decor", count: "15 Items", icon: "🏺" },
    { name: "Jewelry", count: "10 Items", icon: "💍" },
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8fafc", padding: "40px 20px", fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "36px", fontWeight: "bold", color: "#0f172a", marginBottom: "10px" }}>Store Categories</h1>
        <p style={{ color: "#64748b", marginBottom: "30px" }}>Explore collections by category.</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
          {cats.map((c, i) => (
            <div key={i} style={{ backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "30px", textAlign: "center" }}>
              <div style={{ fontSize: "40px", marginBottom: "10px" }}>{c.icon}</div>
              <h3 style={{ fontWeight: "bold", fontSize: "18px", color: "#0f172a" }}>{c.name}</h3>
              <p style={{ color: "#64748b", fontSize: "14px", marginTop: "5px" }}>{c.count}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}