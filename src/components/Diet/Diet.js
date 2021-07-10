import React from "react";
import "./diet.css";

function Diet({ bmiResult }) {
  return (
    <div className="container">

       {/* zayıf */}
       {bmiResult < 18.5 && (
         <>
         <h2>Diyet Programı</h2>
         <h4>Sabah </h4>
         <p>
           {" "}
           Haşlanmış yumurta (3 adet) Kızarmış kepek ekmeği (2 dilim) Maydanoz
           (8 adet) Yağlı beyaz peynir (2 dilim) Domates (1 adet) Salatalık (1
           adet)
         </p>
         <h4>Ara Öğün</h4>
         <p>
           Yağlı yoğurt (1 kase) Ceviz (3 adet) Muz (1 adet) Zencefilli
           ve tarçınlı, şekersiz az yağlı süt (1 bardak)
         </p>
         <h4>Akşam</h4>
         <p>
           {" "}
           Izgara balık (1 porsiyon) Zeytinyağlı taze fasulye (1 tabak) Söğüş
           yeşillik (1 kase)
         </p>
         {/* zayıf */}
       </>
      )}

            {/* Normal */}
      {(bmiResult >= 18.5 && bmiResult < 24.9 ) && (
        <>
          <h2>Diyet Programı</h2>
          <h4>Sabah </h4>
          <p>
            {" "}
            Tavada yumurta (2 adet) Kızarmış kepek ekmeği (2 dilim) Maydanoz
            (8 adet) Yağlı beyaz peynir (2 dilim) Domates (1 adet) Salatalık (1
            adet)
          </p>
          <h4>Ara Öğün</h4>
          <p>
            Yağlı yoğurt (1 kase) Ceviz (3 adet) Kırmızı elma (1 adet) Zencefilli
            ve tarçınlı, şekersiz az yağlı süt (1 bardak)
          </p>
          <h4>Akşam</h4>
          <p>
            {" "}
            Izgara kırmızı et (1 porsiyon) Zeytinyağlı dolma (1 tabak) Söğüş
            yeşillik (1 kase)
          </p>
        </>
      )}
       {/* Normal */}

        {/* fazla kilolu */}
      {(bmiResult >= 25 && bmiResult < 29.9 ) && (
        <>
          <h2>Diyet Programı</h2>
          <h4>Sabah </h4>
          <p>
            {" "}
            Haşlanmış yumurta (2 adet) Kızarmış kepek ekmeği (2 dilim) Maydanoz
            (8 adet) Yağsız beyaz peynir (2 dilim) Domates (1 adet) Salatalık (1
            adet)
          </p>
          <h4>Ara Öğün</h4>
          <p>
            Yağsız yoğurt (1 kase) Ceviz (3 adet) Yeşil elma (1 adet) Zencefilli
            ve tarçınlı, şekersiz az yağlı süt (1 bardak)
          </p>
          <h4>Akşam</h4>
          <p>
            {" "}
            Izgara balık (1 porsiyon) Zeytinyağlı taze fasulye (1 tabak) Söğüş
            yeşillik (1 kase)
          </p>
        </>
      )}
      {/* fazla kilolu */}


      {/* Obez */}
      {(bmiResult >= 30 && bmiResult < 39.9 ) && (
        <>
          <h2>Diyet Programı</h2>
          <h4>Sabah </h4>
          <p>
            {" "}
            Haşlanmış yumurta (2 adet) Kızarmış kepek ekmeği (2 dilim) Maydanoz
            (8 adet) Yağsız beyaz peynir (2 dilim) Domates (1 adet) Salatalık (1
            adet)
          </p>
          <h4>Ara Öğün</h4>
          <p>
            Yağsız yoğurt (1 kase) Ceviz (3 adet) Yeşil elma (1 adet) Zencefilli
            ve tarçınlı, şekersiz az yağlı süt (1 bardak)
          </p>
          <h4>Akşam</h4>
          <p>
            {" "}
            Izgara balık (1 porsiyon) Zeytinyağlı taze fasulye (1 tabak) Söğüş
            yeşillik (1 kase)
          </p>
        </>
      )}
      {/* Obez */}
      

      {/* Morbid Obez */}
      {bmiResult >= 40  && (
        <>
          <h2>Diyet Programı</h2>
          <h4>Sabah </h4>
          <p>
            {" "}
            Haşlanmış yumurta (2 adet) Kızarmış kepek ekmeği (2 dilim) Maydanoz
            (6 adet) Yağsız beyaz peynir (2 dilim) Domates (1 adet) Salatalık (1
            adet)
          </p>
          <h4>Ara Öğün</h4>
          <p>
            Yağsız yoğurt (1 kase) Ceviz (3 adet) Portakal (1 adet) Zencefilli
            ve tarçınlı, şekersiz az yağlı süt (1 bardak)
          </p>
          <h4>Akşam</h4>
          <p>
            {" "}
            Izgara Tavuk (1 porsiyon) Kurufasulye (1 tabak) Söğüş
            yeşillik (1 kase)
          </p>
        </>
      )}
      {/* Morbid Obez */}
     
    </div>
  );
}

export default Diet;
