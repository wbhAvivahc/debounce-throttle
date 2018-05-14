
throttle (节流)
======

到达时间，立刻执行，在时间之前不管有什么执行多少次。

例： 点击执行了5次，时间段设置为2s，则到达两秒以后执行一次。

利用闭包注册一个内部函数可以访问的时间，将这个时间保存下载，以便下次进程的使用


实际场景： 鼠标滑动，浏览器大小变化,在一定时间内需要看到现象
```
function throttle(action,delay){
  
  let start_time = 0;
  
  return function(){
    const current_time = +new Date();
    if(current_time - start_time > delay){
      action();
      start_time = current_time;
    }
  }
};

function test(){
  console.log('test');
}

var test_throttle = throttle(test,2000);
for(var i =0;i<5;i++){
  test_throttle();
}
```