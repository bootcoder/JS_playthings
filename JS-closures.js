counter = 5
var privateNum = (
function() {
	var counter = 0;
	return function() {
		return counter ++;
	};
}()
);


 var text = 'outside';
	function logIt(){
	    console.log(text);
	    var text = 'inside';
	};
	logIt();

document.write(counter + '<br/>'); //exterior var remains untouched

document.write(privateNum() + '<br/>'); // interior var has interior scope and 
document.write(privateNum() + '<br/>'); // is incremented independent of exterior
document.write(privateNum() + '<br/>');

document.write(counter + '<br/>'); //exterior var remains untouched



(function() {
  console.log(1)
  setTimeout(function(){console.log(2)}, 100)
  setTimeout(function(){console.log(3)}, 0)
  console.log(4)
})()




var charTime; // charTime===35
function someTypeAheadFunction (val) {
  var ajaxCall = function(val){
    // $.ajax().done()
  } 
  
  clearTimeout(charTime); // => clearTimeout(24)
  charTime = setTimeout(function(value){
    ajaxCall(value);
  },300) // => chartime === 35
  

 
};

var fib = [0, 1];
for (var i = 2; i < n; i++) {
    fib[ i ] = fib[ i - 1 ] + fib[ i - 2 ];
    console.log(fib);
}
