debounce(防抖)
===

将重复的事件合为一个事件
例：点击之后，事件2s之后再执行。多次点击之后，2s之后执行.

实际场景，输入框输入远程匹配。多次输入触发多次change事件，延时0.2s发送请求

```

function debounce(action,delay){
  var timer = null;

  return function(){
    clearTimeout(timer);
    timer = setTimeout( function(){
      action();
    }, delay);
  };

};

function test(){
  console.log('test');
};

var test_debounce = debounce(test,2000);

for(var i =0;i<5;i++){
  test_debounce();
}
```