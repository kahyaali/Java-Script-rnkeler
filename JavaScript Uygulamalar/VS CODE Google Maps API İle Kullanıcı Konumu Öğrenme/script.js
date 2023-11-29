

/*google maps api ile kullanıcı konumu öğrenme */

/*latitude enlem anlamına gelir longitude boylam anlamına gelir biz konum alırken enlem ve boylam bilgilerini alıyoruz */
/*opencagedata.com buradan konum apimizi alabiliriz üyelik istiyor 

  (7ff92b6888c742719dd07824347c1c0b) api key
  https://api.opencagedata.com/geocode/v1/json?q=LAT+LNG&key=7ff92b6888c742719dd07824347c1c0b url
  adres bilgisini alıyoruz konum bilgisini ekleyeceğiz

  https://developers.google.com/maps/documentation/javascript/overview?hl=tr#maps_map_simple-html
*/
let latitude,longitude="";

/*geolocation kullanıcının tarayıcısı tarafından destekleniyor ise if bloğu çalışır eğer desteklenmez ise else bloğu çalışır*/
if(navigator.geolocation)
{
    /*konum bilgisini bu şekilde alıyoruz aldıktan sonra onSuccess ve onError fonksiyonlarına başarılı yada hatalı şeklinde atıyoruz */
   navigator.geolocation.getCurrentPosition(onSuccess,onError); 
}
else
{
    alert('tarayıcınız konum bilgisini alamıyor');
}

function onSuccess(position)
{
     latitude=position.coords.latitude;
     longitude=position.coords.longitude;
     initMap();

    const apiKey="7ff92b6888c742719dd07824347c1c0b";
    const url=`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

    fetch(url)
    .then(response=>response.json())
    .then(res=>{
          let details=res.results[0].components;
          let {country,postcode,province}=details;

           document.getElementById("results").innerHTML=`
             <p>ülke: ${country}</p>
             <p>posta kodu: ${postcode}</p>
             <p>şehir: ${province}</p>
          `;
    });

}


function onError(error)
{
  if(error.code==1) /*kullanıcı erişim iznini iptal eder ise 1 bilgisi döner */
  {
      alert('Kullanıcı erişim iznini red etti');
  }
  else if(error.code==2) /* konum alınamaz ise 2 bilgisi döner */
  {
      alert('Konum alınamadı');
  }
  else
  {
    alert('Bir hata oluştu');
  }
}

 let map;
 function initMap() 
 {
  map = new google.maps.Map(document.getElementById("map"),
  {
    center: { lat: latitude, lng: longitude },
    zoom: 8,
  });


   /*harita üzerinde konum bilgisini işaretler */
  const marker=new google.maps.Marker({
    position:{ lat: latitude, lng: longitude },
    map:map,
  });
}

