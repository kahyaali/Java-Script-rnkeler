

const container=document.querySelector('.container'); /*container div elementinin özelliklerini atadık */
const count=document.getElementById('count');
const amount=document.getElementById('amount');
const select=document.getElementById('movie');
const seats=document.querySelectorAll('.seat:not(.reserved'); /*reserve olanları katma diyoruz seçtiğimiz elemanın index numarasını almak için
hepsini seçiyoruz */

 getFromLocalStorage();/*LocalStorage'den verileri çekiyoruz */
calculateTotal();

/*click eventi için oluşturuyoruz */
container.addEventListener('click',function(e){
    /*e.target tıklanan elemanın div olarak verir çünkü koltukları div olarak açtık bize target class seat olan elemanları verir */
  if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved'))
  {
    /*varsa silsin yoksa eklesin istediğimiz için toggle metodunu kullanıyoruz selected varsa siler yoksa ekler
    koltuğa tıklayınca classList'e yoksa ise selected ekler var ise selected ifadesini siler*/
    e.target.classList.toggle('selected');
    calculateTotal();
  }
});

select.addEventListener('change',function(e){
  calculateTotal();
});

function calculateTotal()
{
    /*birden fazla seçim yapacağımız için querySelectorAll metodunu kullandık ve seçili olan koltukları alıyoruz */
   const selectedSeats=container.querySelectorAll('.seat.selected');
   const selectedSeatsArr=[];
   const seatsArr=[];
   /*bu şekilde de diziye ekleme yapabilirim */
   selectedSeats.forEach(function(seat){
    selectedSeatsArr.push(seat);
   });

   seats.forEach(function(seat){
    seatsArr.push(seat);
   });

  
   

   /*seçili elemanı tüm elemanlar içinde kaçıncı indexte onu buluyoruz */
   let selectedSeatIndex =selectedSeatsArr.map(function(seat){
      return seatsArr.indexOf(seat);
   });
     console.log(selectedSeatIndex);
   
   let selectedSeatCount=selectedSeats.length;
   count.innerText = selectedSeatCount;
   amount.innerText=selectedSeatCount*select.value;

   // fonksiyonu çağırdık
   SaveToLocalStorage(selectedSeatIndex);
}

function getFromLocalStorage()
{
  const selectedSeats=JSON.parse(localStorage.getItem('SelectedSeats'));
   if(selectedSeats!=null && selectedSeats.length>0)
   {
         seats.forEach(function(seat,index){
             if(selectedSeats.indexOf(index)>-1) /*değer bulamaz ise -1 döner indexOf metodu */
             {
                        seat.classList.add('selected'); /*seat class'ına selected ekliyoruz LocalStorageden geliyor */
             }
         });
   }

  const selectedMovieIndex=JSON.parse(localStorage.getItem('SelectedMovieIndex'));
  if(selectedMovieIndex!=null)
  {
    select.selectedIndex=selectedMovieIndex;
  }
}

function SaveToLocalStorage(index)
{
  localStorage.setItem('SelectedSeats',JSON.stringify(index));
  localStorage.setItem('SelectedMovieIndex',select.selectedIndex); /*seçili olan filmin index numarasını alıyoruz */
}

