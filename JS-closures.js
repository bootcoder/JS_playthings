counter = 5
var privateNum = (
function() {
	var counter = 0;
	return function() {
		return counter ++;
	};
}()
);


document.write(counter + '<br/>'); //exterior var remains untouched

document.write(privateNum() + '<br/>'); // interior var has interior scope and 
document.write(privateNum() + '<br/>'); // is incremented independent of exterior
document.write(privateNum() + '<br/>');

document.write(counter + '<br/>'); //exterior var remains untouched
