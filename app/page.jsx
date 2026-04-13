export default function Home() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      flexDirection: "column",
      backgroundColor: "#0f172a",
      color: "white"
    }}>
      <h1 style={{ fontSize: "40px" }}>
        🚀 ChatGo
      </h1>
      <p>مرحبا بك فالتطبيق ديالك 💬</p>
      <button style={{
        marginTop: "20px",
        padding: "10px 20px",
        borderRadius: "10px",
        border: "none",
        background: "#22c55e",
        color: "white"
      }}>
        دخول
      </button>
    </div>
  );
}