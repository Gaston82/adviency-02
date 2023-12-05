import { useState } from "react";
import "./App.css";
import { GiftStructure } from "./types";

function App() {
  const [gifts] = useState<GiftStructure[]>([
    { id: "01", name: "Laptop" },
    { id: "02", name: "Jeans" },
    { id: "03", name: "Smartphone" },
  ]);

  return (
    <main className="container">
      <h1>Regalos</h1>
      <section>
        {gifts.map((gift) => (
          <p key={gift.id}>{gift.name}</p>
        ))}
      </section>
    </main>
  );
}

export default App;
