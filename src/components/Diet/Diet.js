import React from "react";
import "./diet.css";

function Diet() {
  return (
    <div className="container">
      <h2>Diyet Programı</h2>
      <h4>Sabah </h4>
      <p>
        {" "}
        Haşlanmış yumurta (1 adet) Kızarmış kepek ekmeği (2 dilim) Maydanoz (8
        adet) Yağsız beyaz peynir (2 dilim) Domates (1 adet) Salatalık (1 adet)
      </p>
      <h4>Ara Öğün</h4>
      <p>
        Yağsız yoğurt (1 kase) Ceviz (3 adet) Yeşil elma (1 adet) Zencefilli ve
        tarçınlı, şekersiz az yağlı süt (1 bardak)
      </p>
      <h4>Akşam</h4>
      <p> Izgara balık (1 porsiyon) Zeytinyağlı taze fasulye (1 tabak) Söğüş yeşillik (1 kase)</p>
    </div>
  );
}

export default Diet;
