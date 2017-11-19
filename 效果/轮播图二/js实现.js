window.onload=function(){
	
	var list=document.getElementsByClassName('list')[0];
	var prev=document.getElementById("prev");
	var next=document.getElementById("next");
	var wrapper=document.getElementById("wrapper");
	var indexs=document.getElementsByClassName('indexList')[0].getElementsByTagName('li');
	var index=1;
	var infos=document.getElementsByClassName('infoLis')[0].getElementsByTagName('li');
	
	
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
		indexListShow();
		infoLisShow();
		animation(650);
	}
	next.onclick=function(){
		index+=1;
		if(index>5){
			index=1;
		}
		indexListShow();
		infoLisShow();
		animation(-650);
	}
	
	var timer;
	function play(){
		timer=setInterval(function(){
			next.onclick();
		},2500);
	}
	play();
	function stop(){
		clearInterval(timer);
	}
	wrapper.onmouseover=function(){
		stop();
	}
	wrapper.onmouseleave=function(){
		play();
	}
	
	function indexListShow(){
		for(var i=0;i<indexs.length;i++){
			if(indexs[i].className='indexOn'){
				indexs[i].className='';
			}
		}
		
		indexs[index-1].className='indexOn';
	}
	function infoLisShow(){
		for(var i=0;i<infos.length;i++){
			if(infos[i].className='infoOn'){
				infos[i].className='';
			}
		}
		infos[index-1].className='infoOn';
	}
	
	for(var i=0;i<indexs.length;i++){
		(function(i){
			indexs[i].onclick=function(){
				var clickIndex=parseInt(this.getAttribute('index'));
				var offset=650*(index-clickIndex);
				animation(offset);
				index=clickIndex;
				indexListShow();
			}
		})(i)
	}
	
}
