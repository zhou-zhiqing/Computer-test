var swper = document.querySelector('.swper');
var swperLi = swper.children;
var order = document.querySelector('.order');
var orderLi = order.children;
var lq = document.querySelector('.lq');
var rq = document.querySelector('.rq');


var index = 0;
var timer = setInterval(autoPlay,5000);
function autoPlay(){
    if(index == swperLi.length - 1){
        swper.style.left = 0;
        index = 1;
    }else{
        index++;
    }
    for(var i = 0; i < orderLi.length; i++){
        orderLi[i].className = '';
    }
    animate({
        ele:swper,
        param:{
            left:-index*390
        }
    });
    orderLi[index == orderLi.length ? 0 : index].className = 'orr';
}
lq.onclick = function(){
    if(index == 0){
        index = 3;
        swper.style.left = -index*390 + 'px';
    }else{
        index--;
    }
    for(var i=0;i<orderLi.length;i++){
        orderLi[i].className = '';
    }
    animate({ele:swper,param:{
        left:-index * 390
    }});
    orderLi[index].className = 'orr';
}
rq.onclick = function(){
    if(index == 2){
        index = 0;
        swper.style.ltft = 0;
        
    }else if(index == orderLi.length - 1){
        index = orderLi.length -1;
    }else{
        index++;
    }
    for(var i = 0; i < orderLi.length; i++){
        orderLi[i].className = '';
    }
    animate({
        ele:swper,
        param:{
            left:-index*390
        }
    });
    orderLi[index].className = 'orr';
}
for(let i = 0; i < orderLi.length; i++){
    orderLi[i].onmouseover = function(){
        index = i;
        for(var j = 0; j <orderLi.length; j++){
            orderLi[j].className = '';
        }
        animate({ele:swper,param:{
            left:-index * 390
        }});
        orderLi[index].className = 'orr';
    }
}









