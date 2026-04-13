"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
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
  );
}