

/* Main Sayfası */

let mesaj= `Migros'a Hoşgeldiniz
Money Kartınız Var mı?
1- Evet
2- Hayır`;


/* tamam tıklarsam bana true gelecek sonuc iptal dersem false gelecek */
let iskart=confirm(mesaj);
let odenecekTutar;

const urunler=[
    {urunAdi:'süt',fiyat:10},
    {urunAdi:'ekmek',fiyat:20},
    {urunAdi:'zeytin',fiyat:30},
    {urunAdi:'yumurta',fiyat:40}
];

if(iskart)
{
    let isim=prompt('Adını Giriniz');
    let soyisim=prompt('Soyadınızı Giriniz');
    const mst=new Musteri(isim,soyisim,iskart,urunler);
    odenecekTutar= mst.hesapla();
    console.log(odenecekTutar);
    alert(`Müşteri Bilgileri: ${mst.isim} ${mst.soyisim} Ödenecek Tutar: ${odenecekTutar}`);
}
else
{
    const mst=new Musteri(null,null,iskart,urunler);
    odenecekTutar=mst.hesapla();
    console.log(odenecekTutar);
    alert(`Odenecek Tutar: ${odenecekTutar}`);
}