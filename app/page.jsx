export default function Home() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      flexDirection: "column",
      backgroundColor: "#0f172a",
      color: "white",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
        🚀 ChatGo
      </h1>

      <p style={{ opacity: 0.8 }}>
        مرحبا بك فالتطبيق ديالك 💬
      </p>

      <button style={{
        marginTop: "20px",
        padding: "12px 25px",
        borderRadius: "12px",
        border: "none",
        background: "#22c55e",
        color: "white",
        fontSize: "16px",
        cursor: "pointer"
      }}>
        دخول
      </button>
    </div>
  );
}