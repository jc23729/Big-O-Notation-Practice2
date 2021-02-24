// Step One: Simplifying Expressions
// Simplify the following big O expressions as much as possible:
//Product rule If Big o is the product of multiple terms, drop constant terms
// O(n + 10)
0(n)
// O(100 * n)
// O(25)
// O(n^2 + n^3)
// O(n + n + n + n)
// O(1000 * log(n) + n)
// O(1000 * n * log(n) + n)
// O(2^n + n^2)
// O(5 + 3 + 1)
// O(n + n^(1/2) + n^2 + n * log(n)^10)


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

O(n^2 + n + 1)