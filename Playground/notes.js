////////////////////Product Rule///////////////////////////////////
//constanst are numbers

0(4*n)= 0(n)
0(512*n)=0(n)

//because 1/3 is still
// a number or cosntant value so you can drop it
O(n/3) = O(n / 1/3) = O(n)
//product rule example in this case your just rewriting it to 0^2 power
0(5*n*n)= 0(n*n) = O(n^2)
0(765) = O(1)


/////////////////////Sum rule /////////////////////////////////
//is the sum of multipe terms, only keep the largest term, drop the rest
// N can be any variable, could be 1 or 10000
O(n+1000) = 0(n)
//just choose the term thats bigger n squared is bigger
O(n^2 +n) = O(n^2)

O(n + 500 + n^3 + n^2)= O(n^3)


//Putting it all together apply the product rule followed by the sum rule

O(5n^2 + 100n + 17)
//apply product rule and drop all constants
O(n^2 + n + 1) = 
// then we just use the sume rule to choose the biggest one
O(n^2 + n + 1) = O(n^2)

O(n/3)^6 + 10n))
//Product rule// =
O(n^6 +n)=
O(n^6)
///////////////////////////////Time Complexity/////////////////////////////////////////
Time complexity Example 1

//this for loop has given us a loop of O(n)
const foo = (n) => {
    for (let a = 0; a < n; a++) {
        console.log(a);
    }
    // focusing on b loop  O(n) and c  O(n)
    for (let b = 0; b < n; b++) {
        for (let c = 0; c < n; c++) {
            console.log(b + "," + c)
        }
    }
};

foo(10)

// The biggest factors that affect Big O are the number of steps 
// and the number of iterations the program takes in repeating structures like the for loop.

// If you are iterating over a single collection of elements using one loop, then run-time will be O(n).

// If you are iterating over half of the collection, it will be O(n/2) -> O(n).

// If you are iterating over two separate collections using two different loops, so it will become O(n+m) -> O(n).

// If you are iterating over two different collections using two nested loops, so it will become O(n*m) -> O(n²).

// If you are sorting a collection, this becomes O(n*log(n)).


// You have a list of integers, and for each index you want to find the product of every integer except the integer at that index.

// Write a function get_products_of_all_ints_except_at_index() that takes a list of integers and returns a list of the products.

// For example, given: