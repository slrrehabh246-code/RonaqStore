export default function Index() {
  const products = [
    { 
      id: 1, 
      tag: "BESTSELLER", 
      name: "The Radiance Serum", 
      rating: "★★★★★ (128)", 
      price: "$68.00", 
      img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=500&q=80" 
    },
    { 
      id: 2, 
      tag: "NEW ARRIVAL", 
      name: "Cloud Silk Moisturizer", 
      rating: "★★★★★ (96)", 
      price: "$54.00", 
      img: "https://images.unsplash.com/photo-1608248597359-97bc6483569d?auto=format&fit=crop&w=500&q=80" 
    },
    { 
      id: 3, 
      tag: "BESTSELLER", 
      name: "Velvet Kiss Lipstick", 
      rating: "★★★★★ (214)", 
      price: "$32.00", 
      img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=500&q=80" 
    },
    { 
      id: 4, 
      tag: "THE SIGNATURE", 
      name: "Lumière Eau de Parfum", 
      rating: "★★★★★ (301)", 
      price: "$95.00", 
      img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=500&q=80" 
    },
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#fdfbf7", color: "#2d2926", fontFamily: "sans-serif" }}>
      
      {/* Sub Navbar links style */}
      <div style={{ backgroundColor: "#ffffff", borderBottom: "1px solid #eae5de", padding: "12px 20px", textAlign: "center", fontSize: "14px", color: "#6b635b" }}>
        <span>A LITTLE LUXURY, EVERY DAY.</span> &nbsp;&mdash;&nbsp; <span>DISCOVER YOUR RONAQ RITUAL</span>
      </div>

      {/* Hero Section */}
      <div style={{ backgroundColor: "#f5eee6", padding: "50px 20px", textAlign: "center", borderBottom: "1px solid #eae5de" }}>
        <p style={{ fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", color: "#8c7a6b", marginBottom: "8px" }}>
          The Art of Everyday Beauty
        </p>
        <h1 style={{ fontSize: "40px", fontWeight: "300", fontStyle: "italic", fontFamily: "serif", color: "#2d2926", lineHeight: "1.2" }}>
          Ronaq Beauty, uniquely yours.
        </h1>
        <p style={{ fontSize: "14px", color: "#6b635b", marginTop: "12px", maxWidth: "450px", margin: "12px auto 0" }}>
          Thoughtfully curated. Effortlessly beautiful. Discover the essentials that feel like you.
        </p>

        {/* Hero Banner Images Showcase */}
        <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "30px", flexWrap: "wrap", alignItems: "center" }}>
          <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=300&q=80" alt="Serum" style={{ width: "220px", height: "150px", borderRadius: "8px", objectFit: "cover", boxShadow: "0 5px 15px rgba(0,0,0,0.05)" }} />
          <img src="https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=300&q=80" alt="Lipstick" style={{ width: "220px", height: "150px", borderRadius: "8px", objectFit: "cover", boxShadow: "0 5px 15px rgba(0,0,0,0.05)" }} />
          <img src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=300&q=80" alt="Perfume" style={{ width: "220px", height: "150px", borderRadius: "8px", objectFit: "cover", boxShadow: "0 5px 15px rgba(0,0,0,0.05)" }} />
        </div>
      </div>

      {/* Categories Filter Bar */}
      <div style={{ backgroundColor: "#ffffff", padding: "15px 20px", borderBottom: "1px solid #eae5de", display: "flex", justifyContent: "center", gap: "30px", fontSize: "14px", fontWeight: "500" }}>
        <span style={{ borderBottom: "2px solid #2d2926", paddingBottom: "4px", cursor: "pointer" }}>All essentials</span>
        <span style={{ color: "#8c7a6b", cursor: "pointer" }}>Skincare</span>
        <span style={{ color: "#8c7a6b", cursor: "pointer" }}>Makeup</span>
        <span style={{ color: "#8c7a6b", cursor: "pointer" }}>Perfumes</span>
      </div>

      {/* Products Grid */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "50px 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "25px" }}>
          {products.map((item) => (
            <div key={item.id} style={{ backgroundColor: "#ffffff", border: "1px solid #eae5de", borderRadius: "12px", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 2px 8px rgba(0,0,0,0.02)" }}>
              
              <div style={{ position: "relative", backgroundColor: "#f9f6f0", height: "220px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ position: "absolute", top: "12px", left: "12px", backgroundColor: "#ffffff", border: "1px solid #eae5de", fontSize: "10px", fontWeight: "bold", padding: "3px 8px", borderRadius: "4px", letterSpacing: "1px" }}>
                  {item.tag}
                </span>
                <img src={item.img} alt={item.name} style={{ height: "160px", objectFit: "contain" }} />
              </div>

              <div style={{ padding: "20px" }}>
                <p style={{ fontSize: "12px", color: "#8c7a6b", textTransform: "uppercase", letterSpacing: "1px" }}>Ronaq Skincare</p>
                <h3 style={{ fontSize: "16px", fontWeight: "600", color: "#2d2926", marginTop: "4px" }}>{item.name}</h3>
                <p style={{ fontSize: "12px", color: "#d4a373", marginTop: "6px" }}>{item.rating}</p>
                
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "15px" }}>
                  <span style={{ fontSize: "15px", fontWeight: "bold", color: "#2d2926" }}>{item.price}</span>
                  <button style={{ backgroundColor: "#2d2926", color: "#ffffff", border: "none", padding: "8px 14px", borderRadius: "6px", fontSize: "12px", cursor: "pointer", fontWeight: "500" }}>
                    + Add to bag
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: "#f5eee6", padding: "30px", textAlign: "center", borderTop: "1px solid #eae5de", color: "#8c7a6b", fontSize: "13px" }}>
        <p>&copy; 2026 Ronaq Store. Designed for Elegance.</p>
      </footer>

    </div>
  );
}