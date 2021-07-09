import React, { useState } from "react";
import Diet from "../Diet/Diet";
import { Container } from "./homeStyle";

function Home() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmiResult, setBmiResult] = useState(null);
  const [status, setStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  function calculateBMI() {
    let bmi = Number(weight / (height / 100) ** 2).toFixed(2);
    setBmiResult(bmi);

    let bmiStatus = getStatus(bmi);

    setStatus(bmiStatus);
    setWeight("");
    setHeight("");
  }

  function getStatus(bmi) {
    if (bmi < 0) return "Hatalı veri girdiniz";
    else if (bmi < 18.5) return "Zayıfsınız";
    else if (bmi >= 18.5 && bmi < 24.9) return "Normal";
    else if (bmi >= 25 && bmi < 29.9) return "Fazla Kilolusunuz";
    else if (bmi >= 30 && bmi < 39.9) return "Obezsiniz";
    else if (bmi >= 40) return "Morbid obezsiniz";
  }
  return (
    <Container>
      <div>
        <form onSubmit={handleSubmit}>
          <h2>Vücut Kitle İndeksini Hesapla</h2>
          <div className="height">
            <label>Boy</label>
            <input
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Cm"
            />
          </div>
          <div className="weight">
            <label>Kilo</label>
            <input
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Kg"
            />
          </div>
          <button type="submit" onClick={calculateBMI}>
            Hesapla
          </button>
          {bmiResult < 0 && <span>Hatalı değer girdiniz!</span>}
          {bmiResult && bmiResult > 0 && (
            <>
              <div className="results">
                <p>Durumunuz: {status}</p>
                <p>VKİ: {bmiResult}</p>
              </div>
            </>
          )}
        </form>
      </div>
      {bmiResult && bmiResult > 0 && (
        <div className="diet">
          <Diet />
        </div>
      )}
    </Container>
  );
}

export default Home;
