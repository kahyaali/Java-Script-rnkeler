

// Eleman Ekleme

const form=document.querySelector('form');  // form elementini alıyoruz
const input=document.querySelector('#txttaskname'); // input elementini alıyoruz
const btnDeleteAll=document.querySelector('#btndeleteall'); // Delete all butonunu alıyoruz
const taskList=document.querySelector('#task-list'); // ul elementini alıyoruz
let items ;


// Load Items
LoadItems(); // fonksiyonu çağırdık




// function oluşturuyoruz -call event listeners 
eventListeners(); // fonksiyonu çağırdık

// formda submit olduğunda fonksiyon içinde başka bir fonksiyonu çağırıyoruz 
// bu fonksiyonda tüm eventleri çağırıyoruz
function eventListeners(){

    // submit event'ini kullanıyoruz
   form.addEventListener('submit',addNewItem);

   // delete an item - bir li elementini silmek istediğimizde
    taskList.addEventListener('click',deleteItem);

    // Delete All Item - Tüm li elementlerini silmek istersek
    btnDeleteAll.addEventListener('click',deleteAllItems);
}

// funciton LoadItem fonksiyonunu oluşturuyoruz
function LoadItems()
{
    items=getItemsFromLS(); // bir fonksiyondan değerleri items değişkenine atıyor
    // items dizisi içerisine foreach ile dönüyoruz ve CreateItem fonksiyonu ile elementleri oluşturuyoruz
    items.forEach(function(item){
        CreatItem(item);
    })
}

//getItemsFromLS
function getItemsFromLS()
{
    if(localStorage.getItem('items')===null)
    {
        items=[]; // items değişkenini diziye çevirdik
    }
    else
    {
        items=JSON.parse(localStorage.getItem('items'));
    }
    return items;
}

// set item to local storage - local storage'ye değer ekliyoruz
function setItemToLS(text)
{
   items=getItemsFromLS();
   items.push(text);
   localStorage.setItem('items',JSON.stringify(items));
}

// deleteItemFromLS - local storagedende elementleri silmek için sayfayı refresh edince geri gelmesin diye
function deleteItemFromLS(text)
{
     items=getItemsFromLS();
     items.forEach(function(item,index){
     if(item===text)
     {
        items.splice(index,1); // indexten sonra kaç tane eleman silmek istiyorsak onu yazıyoruz 1 tane sileceğimiz için 1 yazdık
     }
     });
     localStorage.setItem('items',JSON.stringify(items));
}

// funciton creat item fonksiyonunu oluşturduk
function CreatItem(text)
{
   // creat li elementlerini oluşturuyoruz
   const li=document.createElement('li'); // li elementi oluşturuyoruz
   li.className='list-group-item list-group-item-secondary'; // li elementine class verdik
   li.appendChild(document.createTextNode(text)); // li elementinin text'ini atadık
   
   // Creat a elementi oluşturma
   const a=document.createElement('a');
   a.className='delete-item float-right';
   a.setAttribute('href','#');
   a.innerHTML='<i class="fas fa-times"></i>'; // li elementi sonunda x işaretini çıkarıyor
    // add a to li - li elementi içine a elementini atıyoruz
    li.appendChild(a); // li elementi içine a elementini atadık

    // ad li to ul - ul elementi içine li elementini atıyoruz
    taskList.appendChild(li);

}


// add new item -  buradan yeni itemler ekliyoruz
function addNewItem(e){
    if(input.value==='')
    {
        alert('Add New Item');
    }

    //create ietm
     CreatItem(input.value); // burada inputtan gelen değeri gönderiyoruz fonksiyona

     // Save to local storage
     setItemToLS(input.value); // local storage'ye kayıt ettik elemanları silsek bile sayfayı refresh edince geri gelir birde local storagedende silme gerekir


    // clear input - element eklendikten sonra en son input değerini temizliyoruz
    input.value='';

    e.preventDefault();
}

// delete an Item - bu fonksiyon ile tek tek li elementlerini siliyoruz
 function deleteItem(e){
        if(e.target.className==='fas fa-times') // x iconuna tıklamışız demek class değerinden yakalıyoruz
        {
            if(confirm('Silmek istediğinizden eminmisiniz ?'))
            {
              // e.target ile iconu yakalarız parentElement ile a etiketini yakalarız ikinci parentelement ile silinecek olan li elementini yakalarız
            e.target.parentElement.parentElement.remove();
           
            // delete local storage
            deleteItemFromLS(e.target.parentElement.parentElement.textContent);
            }
        }
  e.preventDefault();
 }

 // Delete All Items
 function deleteAllItems(e)
 {
    // 1. yöntem
    // if(confirm('Tüm elemanları silmek istiyormusunuz ?'))
    // {
    //  taskList.innerHTML='';
    // }


    // 2. yöntem
    if(confirm('Tüm elemanları silmek istiyormusunuz ?'))
    {
          while(taskList.firstChild)
          {
             taskList.removeChild(taskList.firstChild);
          }
          localStorage.clear(); // local storagedeki tüm elemanları siler
    }
    e.preventDefault();  
    // Delete All butonuda a etiketi olduğu için e.preventDefault(); yapıyoruz refresh etmesin sayfayı diye
    // buton ekleseydik type buton olan ozaman e.preventDefault(); eklemeye gerek kalmayacaktı
 }