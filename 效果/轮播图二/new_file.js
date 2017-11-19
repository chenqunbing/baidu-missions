$(function(){
	var currIndex=0;
	var imgLen=$(".list li").length;
	
	var autoChange=setInterval(function(){
		if(currIndex<imgLen-1){
			currIndex++;
		}else{
			currIndex=0;
		}
		changeTo(currIndex);
	},2500);
	
	function changeTo(num){
		var goLeft=num*650;
		$('.list').animate({left:"-"+goLeft+'px'},500);
		$('.infoLis').find('li').removeClass('infoOn').eq(num).addClass('infoOn');
		$('.indexList').find('li').removeClass('indexOn').eq(num).addClass('indexOn');
		
	}
	
	$('#prev').hover(function(){
		clearInterval(autoChange);
	},function(){
		autoChangeAgain();
	});
	$('#prev').click(function(){
		currIndex=(currIndex>0)?(--currIndex):(imgLen-1);
		changeTo(currIndex);
	})
	$('#next').hover(function(){
		clearInterval(autoChange);
	},function(){
		autoChangeAgain();
	})
	$("#next").click(function(){
		currIndex=(currIndex<imgLen-1)?(++currIndex):0;
		changeTo(currIndex);
	})
	$('.indexList').find('li').each(function(item){
		$(this).hover(function(){
			clearInterval(autoChange);
			changeTo(item);
			currIndex=item;
		},function(){
			autoChangeAgain();
		});
	});
	function autoChangeAgain(){
		autoChange=setInterval(function(){
			if(currIndex<imgLen-1){
				currIndex++;
			}else{
				currIndex=0;
			}
			changeTo(currIndex);
		},2500);
	}


	
	
	
	
	
});
