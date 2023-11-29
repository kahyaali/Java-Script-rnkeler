

/* buton yakalama oyunu */

var cnt=0,obj,xpos,ypos;
obj=document.querySelector('#btn');
obj.onmouseover=function()
{
    cnt++; /* mouse ile tıklayamadığımda sayacı 1 arttır */
    xpos=parseInt(Math.random()*1000);
    ypos=parseInt(Math.random()*700);
    obj.style.left=xpos+'px';
    obj.style.top=ypos+'px';
    obj.style.width=this.clientWidth+10+'px';
    obj.style.height=this.clientHeight+10+'px';
}

obj.onclick=function()
{
     alert(cnt+' .cı seferde yakaladınız');
     obj.style.width='100px';
     obj.style.height='100px';
     cnt=0;
}