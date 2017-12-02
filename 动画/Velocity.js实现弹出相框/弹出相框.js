$(function(){
	
	//定义变量，（动画元素，事件变量）
	
	var container=$('.container');
	var box=$('.box');
	var buddy=$('.buddy');
	var pop=$('.pop');
	var open=$('.btn');
	var close=$('.close');
	var imgs=pop.find('img');
	
	//自定义动画
	$.Velocity.RegisterUI('hong.slideUpIn',{
		defaultDuration:500,
		calls:[
//			[{opacity:[1,0],translaterY:[0,100]}]
			[{opacity:[1,0]}]
		]
	});
	
	//定义动画序列
	var seqInit=[
		{
			elements:container,
			properties:'hong.slideUpIn',
			options:{
				delay:300
			}
		},
		{
			elements:box,
			properties:'hong.slideUpIn',
			options:{
				sequenceQueue:false 
//				这个属性使得动画同时执行,默认的是依次执行
			}
		},
		{
			elements:buddy,
			properties:'hong.slideUpIn',
			options:{
				sequenceQueue:false ,
				delay:600
			}
		}
	];
	
	$.Velocity.RunSequence(seqInit);
	
	//查看更多按钮点击后的动画
	
	$.Velocity.RegisterUI('hong.slideDownOut',{
		defaultDuration:300,
		calls:[
//			[{opacity:[0,1],translaterY:[100,0]}]
			[{opacity:[0,1]}]
		]
	});
	$.Velocity.RegisterUI('hong.scaleIn',{
		defaultDuration:300,
		calls:[
			[{opacity:[1,0],scale:[1,0.3]}]
		]
	});
	$.Velocity.RegisterUI('hong.scaleOut',{
		defaultDuration:300,
		calls:[
			[{opacity:[0,1],scale:[0.3,1]}]
		]
	});
	
	
	
	var seqClick=[
		{
			elements:container,
			properties:'hong.slideDownOut',
		},
		{
			elements:box,
			properties:'hong.slideDownOut',
			options:{
				sequenceQueue:false 
//				这个属性使得动画同时执行,默认的是依次执行
			}
		},
		{
			elements:container,
			properties:'hong.slideUpIn',
		},
		{
			elements:pop,
			properties:'hong.slideUpIn',
			options:{
				sequenceQueue:false 
//				这个属性使得动画同时执行,默认的是依次执行
			}
		},
		{
			elements:imgs,
			properties:'hong.scaleIn'
		}
	];
	
	//事件绑定
	open.on('click',function(){
		$.Velocity.RunSequence(seqClick);
	});
	
	
	var seqClose=[
		{
			elements:imgs,
			properties:'hong.scaleOut'
		},
		{
			elements:container,
			properties:'hong.slideDownOut'
		},
		{
			elements:pop,
			properties:'hong.slideDownOut',
			options:{
				sequenceQueue:false 
//				这个属性使得动画同时执行,默认的是依次执行
			}
		},
		{
			elements:container,
			properties:'hong.slideUpIn'
		},
		{
			elements:box,
			properties:'hong.slideUpIn',
			options:{
				sequenceQueue:false 
//				这个属性使得动画同时执行,默认的是依次执行
			}
		}
	];
	
	close.on('click',function(){
		$.Velocity.RunSequence(seqClose);
	});
})
