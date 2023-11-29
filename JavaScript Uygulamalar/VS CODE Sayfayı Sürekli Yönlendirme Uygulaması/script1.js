

/* sayfayı sürekli yönlendirme uygulaması */

//window.location.href='https://www.google.com';

go('#res1','https://www.google.com',10); /* fonksiyonu çağırdık */

function go(ID,Address,Second)
{
  if(Second===0)
  {
    window.location.href=Address;
    return;
  }
  document.querySelector(ID).textContent=Second+' saniye sonra yönlendirileceksiniz';
  Second--;

  setTimeout(function()
  {
    go(ID,Address,Second);
  },1000);

}

