

class MigrosBase
{
    indirimOrani=20;
    
   
    constructor(isim,soyisim,iskart,urunler)
    {
        this.isim=isim;
        this.soyisim=soyisim,
        this.iskart=iskart;
        this.urunler=urunler;
    }
    hesapla()
    {
          let odenecekTutar=0;
        /* ürünler null yada boş değilse o zaman hesaplama yapmaya geçebiliriz */
        if(this.urunKontrol(this.urunler))
        {
           
            if(this.iskart)
            {
                    /* Money Kart var */
                    this.urunler.forEach(urun => {
                       odenecekTutar+=(urun.fiyat*(100-this.indirimOrani)/100);
                    });
            }
            else
            {
               /* Money Kart Yok */
               this.urunler.forEach(urun => {
                odenecekTutar+=urun.fiyat;
            });
            }
            
        }
        else
        {
            alert('En az bir tane ürün satıl almalısınız!!!');
        }
        return odenecekTutar;
    }

    urunKontrol(urunler)
    {

        /* sepette ürün var ise veya null değilse true null veya sepet boş ise false dönecek */
        if(urunler!=null && urunler.length>0)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}