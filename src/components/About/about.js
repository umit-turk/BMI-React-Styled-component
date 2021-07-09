import React from "react";
import { Container } from "./aboutStyle";

function About() {
  return (
    <>
      <Container>
        <h2>Vücut Kitle İndeksi Nedir?</h2>
        <p>
          Vücut kitle indeksi; ağırlığın boyun karesine bölünmesi formülü ile
          hesaplanmaktadır. Burada ağırlık kilogram ve boy da metre cinsinden
          alınmaktadır. VKİ olarak kısaltılmaktadır. Body mass index olarak da
          bilinmektedir ve BMI da denmektedir. Bireyin ideal kilosunu
          görebilmesi ve hangi ağırlık kategorisinde olduğunu öğrenebilmesi
          açısından kullanılan bir formüldür.
        </p>
        <img src="https://i2.milimaj.com/i/milliyet/75/0x0/5c8da92945d2a09e009c6efe" />
        <h2>Vücut Kitle İndeksi Hesaplaması Nasıl Yapılır?</h2>
        <p>
          VKİ olarak kısaltılan vücut kitle indeksi hesaplaması, kilonun boyun
          karesine bölünmesiyle yapılmaktadır. Ağırlığınız boyunuzun karesine
          bölündüğünde çıkan sonucun ifade ettiği anlam, Dünya Sağlık Örgütü’nün
          referans aralığı kapsamında hesaplanmaktadır. Çıkan sonuç 30’un
          üzerindeyse obez, 40’ın üzerindeyse morbid obez ve 50’nin üzerindeyse
          süper obez olarak kabul edilmektedir. Vücut kitle indeksi hesaplaması
          yapılırken sadece ağırlık ve boy dikkate alınmaktadır. Ancak detaylı
          vücut kitle indeksi için hesaplama kapsamında yaş, cinsiyet, vücut yağ
          yüzdesi ve bel çevresi gibi değerler de dikkate alınmaktadır. Vücut
          kitle indeksi hesaplaması sonucunda vücudunda sağlığını bozacak ölçüde
          aşırı yağ birikimi olanlar, uzman kontrolünde hesaplayarak bu
          değerleri kendileri için ideal olan seviyeye getirebilmektedirler.
        </p>
        <img src="https://www.dralpercelik.com/wp-content/uploads/2021/02/vucut-kitle-indeksi.png" />
        <h2>
          Vücut Kitle İndeksi Hesaplamasında Obezite Sınıflandırması Nasıl
          Yapılır?
        </h2>
        <p>
          Dünya Sağlık Örgütü’nün yaptığı obezite sınıflandırmasında çıkan vücut
          kitle endeksi değeri kapsamında yapılması gereken yorumlar aşağıdaki
          gibidir:
        </p>
        <ul>
          <li>18.5 kg/m2’nin altında olanlara zayıf denmektedir.</li>
          <li>
            18.5 kg/m2 ile 24.9 kg/m2 arasında olanlar normal kilolu kabul
            edilmektedir.
          </li>
          <li>
            Fazla kiloda olup olmadığınızı merak ederek vücut kitle indeksi
            hesaplaması yaptırdığınızda; sonuç 25 kg/m2 ile 29.9 kg/m2 arasında
            çıkmış ise, fazla kilolu kabul edilmektesiniz.
          </li>
          <li>
            Hesaplama sonrasında 30 kg/m2 ile 39.9 kg/m2 arasında sonuca
            ulaşanlara obez denmektedir.
          </li>
          <li>
            40 kg/m2 üzerinde çıkan sonuçlar için ileri derecede obez, yani
            morbid obez denmektedir.
          </li>
        </ul>
        <h2>Yaş Aralıklarına Göre İdeal Vücut Kitle İndeksi Nedir?</h2>
        <p>
          Yaşa göre kişinin ideal vücut kitle indeksi de farklılık
          göstermektedir. Yaşlara göre olması gereken body mass index referans
          aralıkları aşağıda belirtilmiştir:
        </p>
        <ul>
          <li>
            19-24 yaş arası için ideal referans aralığı 19-24 BMI olmaktadır.
          </li>
          <li>
            25-34 yaş arasındaysanız kilonuzun boyunuzun karesine oranının 20-25
            BMI aralığında olması gerekmektedir.
          </li>
          <li>
            35-44 yaş aralığında olanlar için ideal vücut kitle indeksi 21-26
            BMI olmaktadır.
          </li>
          <li>45-54 yaş aralığı için ideal body mass index, 22-27 BMI’dır.</li>
          <li>
            55-64 yaş aralığındaysanız ideal kilonuzun boyunuzun karesine
            oranının 23-28 BMI olması gerekmektedir.
          </li>
          <li>
            65 yaş ve üzeri için vücut kitle indeksinin ideal değeri 24-29 BMI
            olmaktadır.
          </li>
        </ul>  
      </Container>
    </>
  );
}

export default About;
