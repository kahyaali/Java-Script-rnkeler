

/* tc kimlik numarası doğrulama kontrolü */

/*
   1. tc kimlik numarası 11 haneden oluşmalıdır

   2. tc kimlik numarası sadece rakam içermelidir

   3. tc kimlik numarasının ilk rakamı 0 olamaz

   4. ilk 10 hanenin toplamının 10'a bölümünden kalan son 11. haneyi vermelidir

   5. 1,3,5,7,9 hanelerinin toplamının 7 katı ile  2,4,6,8 haneli değerlerinin toplamı çıkartılır sonucun 10 bölümünden kalan 10. haneyi verir

*/

/* değişkenleri tanımlıyoruz */

var TcId,Btn,resFalse,resTrue,odd=0,even=0,result,i,j,z,TcTotal=0;

TcId=document.querySelector('#tc'); /* tc no alıyoruz inputtan */
resFalse=document.querySelector('#resultFalse');
resTrue=document.querySelector('#resultTrue');
Btn=document.querySelector('#btn');




Btn.addEventListener('click',function(){
    
     /* tek haneli rakamlar toplamı 1,3,5,7,9 haneli rakamlar */

    for(i=0;i<9;i+=2)
    {
        odd+=Number(TcId.value[i]);
    }
    odd*=7;
  
    /* çift haneli rakamlar toplamı 2,4,6,8 haneli rakamlar */

    for(j=1;j<8;j+=2)
    {
        even+=Number(TcId.value[j]);
    }
    result=Math.abs(odd-even);

    for(z=0;z<10;z++)
    {
        TcTotal+=Number(TcId.value[z]);
    }
     
    resFalse.style.display='block';
    if(TcId.value=="")
    {
        resFalse.textContent='TC Alanı Boş Geçilemez!!!';
    }
    
    else if(TcId.value.length!==11) /* TC kimlik numarası 11 hanelimi onun kontrolünü yapıyor */
    {
        resFalse.textContent='Kimlik Numarası 11 Haneli Olmak Zorundadır!!!';
    }
    else if(isNaN(TcId.value)) /* numaramı harf mi giriyor kontrolünü yapıyoruz */
    {
        resFalse.textContent='TC Kimlik Numarası Sadece Rakamlardan Oluşmalıdır!!!';
    }
    else if(TcId.value[0]==0) /* tc kimlik numarasının ilk rakamı 0 olamaz onun kontrolünü yapıyoruz */
    {
        resFalse.textContent='TC Kimlik Numarasının İlk Rakamı 0 Olamaz!!!';
    }
    else if(result%10 !=Number(TcId.value[9]))
    {
        resFalse.textContent='Girilen Kimlik Numarası Gerçek Bir TC Değildir!!! 1';
    }
    else if(TcTotal%10 !=Number(TcId.value[10]))
    {
         resFalse.textContent='Girilen Kimlik Numarası Gerçek Bir TC Değildir!!! 2';
    }
    else
    {
        resFalse.style.display='none';
        resTrue.style.display='block';
        resTrue.textContent='Girilen TC NO Gerçek Bir Değerdir';
    }
});