var box = (function(){
    return{
        init(ele){
            this.ele = document.querySelector(ele);
            this.event();
        },
        event(){
            _this = this;
            _this.ele.onmouseenter = function(e){
                e = e || window.event;
                target = e.target || e.srcElement;
                
            }
        }
    }
}())
box.init('#box');


