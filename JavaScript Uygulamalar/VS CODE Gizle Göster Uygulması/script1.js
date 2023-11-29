

/* gizle göster uygulaması */

hideShow1=()=>{
    var pic=document.querySelector('#picture');
    if(pic.style.display=='none')
    {
        pic.style.display='block';
    }
    else
    {
       pic.style.display='none';
    }
}

hideShow2=()=>{
    var _input=document.querySelector('#input');
    if(_input.style.display=='none')
    {
        _input.style.display='block';
    }
    else
    {
       _input.style.display='none';
    }
}