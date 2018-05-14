
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
