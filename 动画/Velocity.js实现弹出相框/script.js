$(function(){
//	$('#div1').velocity(
//		{
//			width:'300px',
//		},{
//			duration:3000,
//			complete:function(){
//				$('#div2').velocity(
//					{
//						width:'300px',
//					},{
//						duration:3000,
//						complete:function(){
//							$('#div3').velocity(
//								{
//									width:'300px',
//								},{
//									duration:3000
//								}
//							)
//						}
//					});
//			}
//		});
//		

//改为动画序列
//	var seq=[
//		{
//			elements:$('#div1'),
//			properties:{width:'300px'},
//			options:{duration:1000},
//				
//		},
//		{
//			elements:$('#div2'),
//			properties:{width:'300px'},
//			options:{duration:1000}
//		},
//		{
//			elements:$('#div3'),
//			properties:{width:'300px'},
//			options:{duration:1000}
//		}
//	];
//	
//	$.Velocity.RunSequence(seq);
//	

//实现当我的鼠标放在div上面，div左右摇摆,这里直接调用官网上的方法
	$('#div1').on('mouseover',function(){
		$(this).velocity('callout.shake');
	});
	
	//自定义动画,第一个是动画的名称
	//可以使用RegisterEffect或者RegisterUI
	$.Velocity.RegisterEffect('lixin.plus',{
		defaultDuration:300,
		calls:[
			[{scaleX:1.1},0.5],
			[{scaleX:1.0},0.5]
		]
	});
	$('#div2').on('mouseover',function(){
		$(this).velocity('lixin.plus');
	});
		
	
	
	
	
	
});
