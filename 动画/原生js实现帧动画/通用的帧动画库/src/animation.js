'use strict'

var loadimage=require('./imageLoader');
var Timeline=require('./timeline');

//初始化状态
var STATE_INITIAL=0;
//开始状态
var STATE_START=1;
//停止状态
var STATE_STOP=2;
//同步任务
var TASK_SYNC=0;
//异步任务
var TASK_ASYNC=1;

/**帧动画库类
 * @constructor
 */
function Animation(){
	this.taskQueue=[];
	this.index=0;
	var timeline=new Timeline();
	this.state=STATE_INITIAL;
	
}

/**
 * 添加一个同步任务，去预加载图片
 * @param {Object} imgList  图片数组
 */
Animation.prototype.loadImage=function(imgList){
	var taskFn=function(next){
		loadImage(imgList.slice(),next);
	};
	var type=TASK_SYNC;
	
	return this._add(taskFn,type);
	
};

/**
 * 添加一个异步定时任务，通过定时改变图片背景位置，实现帧动画
 * @param {Object} ele dom对象
 * @param {Object} positions  背景位置数组
 * @param {Object} imgUrl   图片地址
 */
Animation.prototype.changePosition=function(ele,positions,imgUrl){
	
};

/**
 * 添加一个异步定时任务，通过定时改变img标签的src属性，实现帧动画
 * @param {Object} ele  img标签
 * @param {Object} imgList  图片数组
 */
Animation.prototype.changeSrc=function(ele,imgList){
	
};


/**
 * 高级用法，添加一个人异步定时执行的任务，
 * 该任务自定义动画每帧执行的任务函数
 * @param {Object} taskFn 自定义每帧执行的任取函数
 */
Animation.prototype.enterFrame=function(taskFn){
	
};

/**
 * 添加一个同步任务，可以在上一个任务完成后执行回调函数
 * @param {Object} callback 回调函数
 */
Animation.prototype.then=function(callback){
	
};

/**
 * 开始执行任务 异步定时任务执行的间隔
 * @param {Object} interval
 */
Animation.prototype.start=function(interval){
	if(this.state===STATE_START){
		return this;
	}
	
	//如果任务链中没有任务，则返回
	if(!this.taskQueue.length){
		return this;
	}
	
	this.state=STATE_START;
	this.interval=interval;
	this._runTask();
	return this;
};

/**
 * 添加一个同步任务，该任务回退到上一个任务
 * 重复上一个任务的效果
 * @param {Object} times  重复的次数
 */
Animation.prototype.repeat=function(times){
	
};

/**
 * 添加一个同步任务，相当于repeat（）更友好的接口，无限循环上一次任务
 */
Animation.prototype.repeatForever=function(){
	
};

/**
 * 设置当前任务执行后，开始下一个任务的等待时间
 * @param {Object} time 等待的时长
 */
Animation.prototype.wait=function(time){
	
};


/**
 * 暂停当前异步定时任务
 */
Animation.prototype.pause=function(){
	
};


/**
 * 重新执行上一次暂停的任务
 */
Animation.prototype.restart=function(){
	
};


/**
 * 释放资源
 */
Animation.prototype.dispose=function(){
	
};

/**
 * 添加一个任务到任务队列中
 * @param {Object} taskFn 任务方法
 * @param {Object} type 任务类型
 */
Animation.prototype._add=function(taskFn,type){
	this.taskQueue.push({
		taskFn:taskFn,
		type:type
	});
	
	retur this;
};

/**
 * 执行任务
 */
Animation.prototype._runTask=function(){
	if(!this.taskQueue||this.state!=STATE_START){
		return;
	}
	//任务执行完毕
	if(this.index===this.taskQueue){
		this.dispose();
		return;
	}
	//获得任务链上的当前任务
	var task=this.taskQueue[this.index];
	if(task.type===TASK_SYNC){
		this._syncTask(task);
	}else{
		this._asyncTask(task);
	}
};

/**
 *  同步任务
 * @param {Object} task 执行的任务对象
 */
Animation.prototype._syncTask=function(task){
	var me=this;
	var next=function(){
		//切换到下一个任务
		me._next();
	}
	var taskFn=task.taskFn;
	taskFn(next);
};
/**
 * 异步任务
 * @param {Object} task 执行的任务对象
 */
Animation.prototype._asyncTask=function(task){
	
}

/**
 * 切换到下一个任务
 */
Animation.prototype._next=function(){
	this.index++;
	this._runTask();
};



