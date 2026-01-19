import "./styles.css";
import { useState } from "react";

export default function App() {
  const [isActive, setIsActive] = useState(false); // am Anfang ist die Box aus, deswegen false
  //let isActive = false;

  function handleClick() {
    setIsActive(!isActive);

    //isActive = !isActive;
    // Check that the value changes correctly.
    console.log(isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>
        {isActive ? "Deactivate" : "Activate"}
      </button>
    </main>
  );
}

// Wenn isActive wahr ist, füge die Klasse box-active hinzu, ansonsten füge nichts hinzu
