import React, { useEffect, useState } from "react";
import { Reviews } from "./Components/Reviews";
import { Title } from "./Components/Title";
import data from "./data/data";
import "./Styles/App.css";

function App() {
  const [reviews, SetReviews] = useState(data);

  useEffect(() => {
    SetReviews(data);
  }, []);

  return (
    <main>
      <Title />
      <Reviews reviews={reviews} />
    </main>
  );
}

export default App;
