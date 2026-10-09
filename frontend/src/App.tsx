import { useEffect, useState } from "react";

type Health = {
  status: string;
  service: string;
  database: string;
};

export default function App() {
  const [health, setHealth] = useState<Health | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5001/api/health")
      .then((response) => {
        if (!response.ok) throw new Error("API request failed");
        return response.json();
      })
      .then(setHealth)
      .catch(() => setError("Cannot connect to the API. Is the backend running?"));
  }, []);

  return (
    <main style={{ fontFamily: "sans-serif", padding: "40px" }}>
      <h1>Helpdesk Platform</h1>
      <p>Your first full-stack application.</p>

      <h2>Backend status</h2>

      {error && <p role="alert" style={{ color: "red" }}>{error}</p>}

      {health && (
        <section>
          <p>API: {health.status}</p>
          <p>Service: {health.service}</p>
          <p>Database: {health.database}</p>
        </section>
      )}
    </main>
  );
}