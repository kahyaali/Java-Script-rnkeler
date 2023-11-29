

class Musteri extends MigrosBase
{
      constructor(isim,soyisim,iskart,urunler)
      {
        super(isim,soyisim,iskart,urunler); /* super metodu ile verileri MigrosBase tarafına aktardık oradan miras alıyoruz */
        
      }
     
      /* bu metodu MigrosBase class'ındaki metoda aktardık süper metodu ile bu metodu çağırınca Migrosbase'deki hesapla metodu çalışacak*/
      hesapla()
      {
       return super.hesapla();
      }
}