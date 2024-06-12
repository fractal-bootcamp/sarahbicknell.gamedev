// Question 1 (Beginner)
function a(name) {
    return "Hello, " + name + "!";
  }
  a("Alice")
  // OUTPUT: 
  //Hello Alice !
  
  // Question 2 (Beginner)
  function b(num) {
    return num * num;
  }
  b(5)
  // OUTPUT: 
  //25
  
  // Question 3 (Beginner) IS EVEN
  function c(num) {
    return num % 2 === 0;
  }
  c(7)
  //FALSE 
  
  // Question 4 (Intermediate) MULTIPLY
  function d(a, b) { 
    if (b === 0) {
      return 0;
    }
    return a + d(a, b - 1);
  }
  d(3, 4)
  // 12
  
  // Question 5 (Intermediate)
  function e(n) {
    if (n === 0) {
      return 1;
    }
    return n * e(n - 1);
  }
  console.log("Question 5:", e(5));
  // Question 5: 120 
  
  
  // Question 6 (Intermediate)
  function f(arr) {
    if (arr.length === 0) {
      return 0;
    }
    return arr[0] + f(arr.slice(1));
  }
  console.log("Question 6:", f([1, 2, 3, 4, 5]));
  // Question 6: 15
  
  // Question 7 (Intermediate)
  function g(n) {
    if (n <= 1) {
      return n;
    }
    return g(n - 1) + g(n - 2);
  }
  console.log("Question 7:", g(6));
  //Question 7: 29 ?
  
  // Question 8 (Intermediate)
  function h(str) {
    if (str.length <= 1) {
      return true;
    }
    if (str[0] !== str[str.length - 1]) {
      return false;
    }
    return h(str.slice(1, -1));
  }
  h("racecar")
  // true
  
  // Question 9 (Intermediate)
  function j(num) {
    if (num < 10) {
      return num;
    }
    return (num % 10) + j(Math.floor(num / 10));
  }
  j(1234)
  //259.4
  
  // Question 10 (Intermediate)
  function k(a, b) {
    if (b === 0) {
      return a;
    }
    return k(b, a % b);
  }
  k(48, 18)
  //6
  
  // Question 11 (Intermediate)
  function l(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    if (str.length === 0) {
      return 0;
    }
    return vowels.includes(str[0].toLowerCase()) ? 1 + l(str.slice(1)) : l(str.slice(1));
  }
  l("JavaScript")
  // 3
  
  // Question 12 (Intermediate) EXPONENTIATION
  function m(base, exponent) {
    if (exponent === 0) {
      return 1;
    }
    return base * m(base, exponent - 1);
  }
  m(2, 5)
  //32