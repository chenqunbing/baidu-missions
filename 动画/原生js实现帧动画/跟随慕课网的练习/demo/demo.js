var imgUrl='rabbit-big.png';
var positions=['0 -854','-174 -852','-349 -852','-524 -852','-698 -852','-873 -852'];
var ele=document.getElementById("rabbit");
animation(ele,positions,imgUrl);

//定时改变position进行动画
function animation(ele,positions,imgUrl){
	ele.style.backgroundImage='url('+imgUrl+')';
	ele.style.backgroundRepeat='no-repeat';
	var index=0;
	function run(){
		var position=positions[index].split(' ');
		ele.style.backgroundPosition=position[0]+'px '+position[1]+'px';
		index++;
		if(index>=positions.length){
			index=0;
		}
		setTimeout(run,80);
	}
	run();
}

//方法二
//function animation(ele,positions,imgUrl){
//	var index=0;
//	ele.style.backgroundImage='url('+imgUrl+')';
//	ele.style.backgroundRepeat='no-repeat';
//	ele.timer=setInterval(function(){
//		var position=positions[index].split(' ');
//		ele.style.backgroundPosition=position[0]+'px '+position[1]+'px';
//		index++;
//		if(index>=positions.length){
//			index=0;
//		}
//	},80);
//}
