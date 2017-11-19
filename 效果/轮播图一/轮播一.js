window.onload=function(){
	
	//手动点击切换图片
	var list=document.getElementById("list");
	var prev=document.getElementById("prev");
	var next=document.getElementById("next");
	var container=document.getElementById("container");
	var buttons=document.getElementById("buttons").getElementsByTagName('span');
	var index=1;
	
	function animation(offset){
		var newLeft=parseInt(list.style.left)+offset;
		if(newLeft<-2600){
			list.style.left=0+'px';
		}else if(newLeft>0){
			list.style.left=-2600+'px';
		}else{
			list.style.left=newLeft+'px';
		}
	}
	prev.onclick=function(){
		index-=1;
		if(index<1){
			index=5;
		}
		buttonShow();
		animation(650);
	}
	next.onclick=function(){
		index+=1;
		if(index>5){
			index=1
		}
		buttonShow();
		animation(-650);
	}
	//设置定时的自动播放
	var timer;
	
	function play(){
		timer=setInterval(function(){
			next.onclick();
		},5000);
	}
	play();
	
	//当鼠标悬浮停止播放
	
	function stop(){
		clearInterval(timer);
	}
	
	container.onmouseover=function(){
		stop();
	}
	container.onmouseleave=function(){
		play();
	}
	
	//点击左右键对应小圆点
	function buttonShow(){
		for (var i=0;i<buttons.length;i++){
			if(buttons[i].className='on'){
				buttons[i].className='';
			}
		}
		buttons[index-1].className='on';		
	}
	
	
	//点击小圆点播放
	
	for(var i=0;i<buttons.length;i++){
		(function(i){
			buttons[i].onclick=function(){
				var clickIndex=parseInt(this.getAttribute('index'));
				var offset=650*(index-clickIndex);
				animation(offset);
				index=clickIndex;
				buttonShow();
			}
		})(i)
	}
	
	
	
}
