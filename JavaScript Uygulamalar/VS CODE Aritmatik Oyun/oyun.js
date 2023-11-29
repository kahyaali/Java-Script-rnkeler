

var num1,num2,operator,result,answer,True=0,False=0;
num1=document.getElementById('number1');
num2=document.getElementById('number2');
operator=document.getElementById('operator');
result=document.getElementById('result');
answer=document.getElementById('answer');
True=document.getElementById('true');
False=document.getElementById('false');

/*rast gele sayı üretimi */

function randomNumber(max,min)
{
    var number=Math.floor(Math.random()*(max-min))+min;
    return number;
}

/*oyun başladığında yada soru tahmini sonrası yeni soru oluşturma */

function yeniSoru()
{
    var operation=['+','-','*','/'];
    operator.textContent=operation[randomNumber(4,0)]; // operatör seçimi yapıyoruz operatör işaretini gösterecek
    num1.textContent=randomNumber(50,0);
    num2.textContent=randomNumber(50,0);
    
    /*kalansız bölme işlemi yapacak koşul */
    if(operation.textContent=="/")
    {
        while(true)
        {
           num2.textContent=randomNumber(50,0);
           if(num1.textContent % num2.textContent==0)
           {
               break; // döngüden çık
           }
        }
    }
}

/*sayfa yüklendiğinde yeni soru soran fonksiyonum yeniSoru() çalıştır */
window.onload=function()
{
   yeniSoru();
}

/*cevapla butonuna basıldığında değerlendirme işlemi yapma */
answer.onclick=function()
{
   var ans,n1,n2;
   n1=Number(num1.textContent); // number değere dönüştürdük
   n2=Number(num2.textContent); // number değere dönüştürdük
   switch(operator.textContent)
   {
       case '+': ans=n1+n2; break;
       case '-': ans=n1-n2; break;
       case '*': ans=n1*n2; break;
       case '/': ans=n1/n2; break;
       default: break;
   }
   if(result.value==ans)
   {
     True.textContent=Number(True.textContent)+1;
   }
   else
   {
    False.textContent=Number(False.textContent)+1;
   }
   yeniSoru(); // cevap verdikten sonra yeniSoru() fonskiyonunu çağırıyoruz
}
