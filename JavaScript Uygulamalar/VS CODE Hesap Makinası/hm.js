
const display = document.querySelector('.calculator-input');
const keys=document.querySelector('.calculator-keys');

/*ilk aşamada 0 bilgisini atıyor hesap makinasına */
let displayValue='0';
let firstValue= null;
let operator=null;
let waitingForSecondValue=false;

updateDisplay();

function updateDisplay(){
display.value=displayValue;
}

keys.addEventListener('click',function(e){
  const element=e.target; /*target diyerek sadece element olanları alıyoruz*/
  const value=element.value;
  /*element.matches metodu ile buton olup olmadığı kontrolu yapıyoruz buton değil ise return ile bitiriyoruz */
  if(!element.matches('button'))
  {
    return;
  }
  switch(value)
  {

    case '+' : 
    case '-' :
    case '*' :
    case '/' :
    case '=' :
        handleOperator(value);
        break;
        case '.' :
            inputDecimal();
            break;
            case 'clear': /*value bilgisi clear olarak girildi */
            clear();
            break;
            default :
            inputNumber(element.value);
  }
 /*updateDisplay() metodu her durumda çalışacağı için son kısımda bıraktık */
  updateDisplay();
});

function inputNumber(num)
{
    if(waitingForSecondValue)
    {
        displayValue=num;
        waitingForSecondValue=false;
    }
    else
    {
        displayValue=displayValue==='0'? num:displayValue+num;
    }
 }
   

function inputDecimal()
{
    /*includes metodu aracılığı ile displayvalue içerisinde . operatoru var mı yok mu onu kontrol ediyoruz varsa tekrar koymuyoruz
    yoksa nokta operatorunu koyuyoruz */
    if(!displayValue.includes('.'))
    {
        displayValue+='.';
    }
}

/*clear butonuna bastığımızda verileri temizliyoruz */
function clear()
{
    displayValue='0';
    firstValue='0';
    waitingForSecondValue=false;
}

function handleOperator(nextoperator)
{
    const value=parseFloat(displayValue);
    if(operator && waitingForSecondValue)
    {
        operator=nextoperator;
        return;
    }
    if(firstValue===null) /*daha önce bu değer oluşturulmadı ise */
    {
       firstValue=value;
    }
    else if(operator)
    {
      const result = calculate(firstValue,value,operator);
      displayValue=`${parseFloat(result.toFixed(7))}`; /*toFixed()7 diyerek virgülden sonra 7 basamak göster demek */
      firstValue=result;
    }
    waitingForSecondValue=true;
    operator=nextoperator;
}

function calculate(first,second,operator)
{
    if(operator==='+')
    {
        return first + second;
    }
    else if(operator==='-')
    {
        return first - second;
    }
    else if(operator==='*')
    {
        return first * second;
    }
    else if(operator==='/')
    {
        return first / second;
    }
     return second; /*hiç bir operatore uymayan giriş var ise ikinci veriyi tekrar geri gönderiyoruz */
}