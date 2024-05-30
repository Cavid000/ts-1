function printNumbers(num) {

    if (num < 1) {
        console.error('num must be greater than 1');
        return;
    }

    if (!Number.isInteger(num)) {
        num = Math.trunc(num);
    }

    for (var i = 1; i <= num; i++) {
        console.info(i);
    }
}

printNumbers(10);


// Creating array
let arr = [4, 8, 7, 13, 12]

// Creating variable to store the sum
let sum = 0;

// Running the for loop
for (let i = 0; i < arr.length; i++) {
	sum += arr[i];
}

console.log("Sum is " + sum) // Prints: 44


function isEven(n) {
    n = Number(n);
    return n === 0 || !!(n && !(n%2));
  }
  
  function isOdd(n) {
    return isEven(Number(n) + 1);
  }

  template <typename T> int sgn(T val) {
    return (T(0) < val) - (val < T(0));
}

name= str((input("Enter the name: ")))

i = len(name)

while i in range(len(name)) > 0:
    print(name[i], end = '')
    i = i - 1

    const weekDAY = new Array(7);
    weekDAY[1] = 'Sunday' ;
    weekDAY[2] = 'Monday';
    weekDAY[3] = 'Tuesday';
    weekDAY[4] = 'Wednesday';
    weekDAY[5] = 'Thursday';
    weekDAY[6] = 'Friday';
    weekDAY[7] = 'Saturday';
    
    function returnDay(x) {
      return (x < 1) || (x > 7) ? null :
      } else {
        let thisDay = weekDAY[x]
        return thisDay;
      }
    

      // C program to demonstrate syntax of binary arithmetic
// operators
#include <stdio.h>

int main()
{
	int a = 10, b = 4, res;

	// printing a and b
	printf("a is %d and b is %d\n", a, b);

	res = a + b; // addition
	printf("a + b is %d\n", res);

	res = a - b; // subtraction
	printf("a - b is %d\n", res);

	res = a * b; // multiplication
	printf("a * b is %d\n", res);

	res = a / b; // division
	printf("a / b is %d\n", res);

	res = a % b; // modulus
	printf("a %% b is %d\n", res);

	return 0;
}

/* example counter app */

const incrCounter = () => {
    let count = 0;

  return () => {
    return ++count;
  }
}

/* now use the counter */

incrCounter()();
incrCounter()();
alert(incrCounter()()); // expect 3 but gets 1