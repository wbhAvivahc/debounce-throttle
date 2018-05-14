
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