"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

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
      
      <h1>🚀 ChatGo</h1>

      <button
        onClick={() => router.push("/chat")}
        style={{
          marginTop: "20px",
          padding: "12px 25px",
          borderRadius: "12px",
          border: "none",
          background: "#22c55e",
          color: "white",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        دخول
      </button>

    </div>
  );
}