			function getFibonacci()
			{
				var limit = document.getElementById("limit").value;
				
				fibonacciSeries(limit);
			}
			function fibonacciSeries(limit)
			{
				var first_num = 0, second_num = 1, next_num, outputElement;
 
				if(limit != '')
				{
					outputElement = document.getElementById("output"); 
					
					outputElement.innerHTML = "";
					outputElement.innerHTML = "<br>";
					outputElement.innerHTML += first_num + "<br>";
					outputElement.innerHTML += second_num + "<br>";
					while(limit > 2)
					{       
					   next_num   = first_num + second_num;
					   first_num  = second_num;
					   second_num = next_num;
					   outputElement.innerHTML += next_num + "<br>";
					   limit--;
					}
				}else{
					document.getElementById("output").innerHTML = "Please enter a value!";
				}
			}

getFibonacci();