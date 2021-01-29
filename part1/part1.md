1. What will happen at line 11 and why?
   
   At line 11, `console.log(i)` will print the value of `i` which after the for loop would be equal to the length of `prices` to the console. Because `var` is used when declaring `i` so `i` is function-scoped and can be accessed outside the for loop where it was declared.

2. What will happen at line 12 and why?
   
   At line 12, `console.log(discountedPrice)` will print the value of `discountPrice` to the console. At line 12, `discountedPrice` will equal the last element in `prices` * (1 - `discount`) because `discountedPrice` is in a for loop and its value is updated each iteration but after the last iteration, it will contain the last element in `prices` since the for loop goes from `i = 0` to `i < prices.length` the last `i` that would have been used in line 6 would be when `i` equals prices.length - 1 which is the last index of `prices`. And since the `var` is used, `discountedPrice` is function-scoped.

3. What will happen at line 13 and why?
   
   At line 13, `console.log(finalPrice)` will print the value of `finalPrice` to the console. Since at line 13, we have already iterated through `prices` in the for loop so `finalPrice` will contain the last `discountedPrice` * 100 rounded and then divided by 100. And once again since the `var` is used, `finalPrice` is function-scoped.

4. What will the function return if we call discountPrices([100, 200, 300], .5) ? Give a brief explanation.
   
   The function will return [50, 100, 150] because if we call `discountPrices([100, 200, 300], .5) ` , the array [100, 200, 300] will be stored in `prices` and 0.5 will be stored in `discount`. For the for loop, the following things happen: the for loop iterates three times because `prices.length` = 3 and on each element it calculates the element * (1 - 0.5) which is stored in `discountedPrice` and for 100, 200, 300 respectively `discountedPrice` will store 50, 100, 150.Then Math.round rounds it to the nearest integer after multiplying it by 100 and then divides by 100 which is rounding the `discountedPrice` to the ones place and stores it in `finalPrice` and for 50, 100, 150 respectively it will store 50, 100, 150. And then pushed into the `discounted` array. So for 100 we will get 50 pushed in to `discounted`, for 200 we push 100 and for 300 we push 150. So when we return `discounted` we get [50, 100, 150].

5. What will happen at line 11 and why?
   
   At line 11, there will be an error because we used `let` to declare `i` and that limits `i` to the scope that it was declared in which is the for loop. So outside the for loop, you can't access `i` since it's out of scope.

6. What will happen at line 12 and why?
   
    At line 12, there will be an error because we used `let` to declare `discountedPrice` and that limits `discountedPrice` to the scope that it was declared in which is the for loop. So outside the for loop, you can't access `discountedPrice` since it's out of scope.

7. What will happen at line 13 and why?
   
   At line 13, `finalPrice` will be print to the console because `finalPrice` was declared by `let` in the scope of the whole function (outside the for loop). So it's not restricted to the scope of the for loop like the previous two.

8.  What will the function return for discountPrices([100, 200, 300], .5)? Give a brief explanation.
   
   The function will return [50, 100, 150] because if we call `discountPrices([100, 200, 300], .5) ` , the array [100, 200, 300] will be stored in `prices` and 0.5 will be stored in `discount`. For the for loop, the following things happen: the for loop iterates three times because `prices.length` = 3 and on each element it calculates the element * (1 - 0.5) which is stored in `discountedPrice` and for 100, 200, 300 respectively `discountedPrice` will store 50, 100, 150.Then Math.round rounds it to the nearest integer after multiplying it by 100 and then divides by 100 which is rounding the `discountedPrice` and stores it in `finalPrice` and for 50, 100, 150 respectively it will store 50, 100, 150. And then pushed into the `discounted` array. So for 100 we will get 50 pushed in to `discounted`, for 200 we push 100 and for 300 we push 150. So when we return `discounted` we get [50, 100, 150].
  
9.  What will happen at line 11 and why?
    
    At line 11, we will actually never get to line 11 because there is an error due to `finalPrice` being declared by `const` which doesn't allow it to be overwritten and in the for loop it's attempting to overwrite it in line 7. But also disregarding that, as explained in #5 `i` is declared by `let` which makes it scope to be only the for loop and thus, not accessible outside the for loop. And so either way, it's an error.
  
10. What will happen at line 12 and why?
    
    At line 12, we will actually never get to line 12 because there is an error due to `finalPrice` being declared by `const` which doesn't allow it to be overwritten and in the for loop it's attempting to overwrite it in line 7. But if we just care about line 12, then we would get an error as well since the `discountedPrice` is declared using `const` so it's scope restricted to the for loop where it's declared. So it's not accessible outside the for loop. And so either way, it's an error.

11. What will happen at line 13 and why?
    
    At line 13, we will actually never get to line 13 because there is an error due to `finalPrice` being declared by `const` which doesn't allow it to be overwritten and in the for loop it's attempting to overwrite it in line 7. But if we disregard that then 0 will be print to the console since that's what `finalPrice` on line 3 with the scope of the whole function was declared as.
  
12. What will the function return for discountPrices([100, 200, 300], .5)? Give a brief explanation.
    
    Disregarding the errors that will cause the function to not successfully run, the function will return [0, 0, 0] since `finalPrice` cannot be overwritten so only 0's are pushed into `discounted` for three times since the loop iterates `prices.length` many times.

13. Given the above Object, write the notation for:  (These should be in your part1.md)

    - Accessing the value of the name property in the student object
      - student.name 
    - Accessing the value of the Grad Year property in the student object
      - student['Grad Year'] 
    - Calling the function for the greeting property in the student object
      - student.greeting() 
    - Accessing the name property of the object in the Favorite Teacher property in student
      - student['Favorite Teacher'].name
    - Access the first index in the array of the courseLoad property of the student object
      - student.courseLoad[0] 

14. Arithmetic

    - ‘3’ + 2
      - '32'
      - Because the '3' is a string literal so we are concatenating the '3' and the 2 with the +. 
    - ‘3’ - 2
      -  1
      -  The subtraction sign turns the string literal '3' into an int and so it does 3 - 2 which equals 1.
    - 3 + null
      - 3
      - null turns into 0 because it's considered as no value when adding an int to it according to Numeric Conversion, it gives 3 + 0 which equals 3.
    - ‘3’ + null
      - '3null'
      - Once again, since '3' is a string literal, it will concatenate the 'null' as a string literal.
    - true + 3
      - 4
      - true is turned into 1 because of Numeric Conversion and thus, 1 + 3 is equal to 4.
    - false + null
      - 0
      - According to Numeric Conversion, false is converted to 0 and null is also converted to 0. And 0 + 0 = 0.
    - “3” + undefined
      - '3undefined'
      - '3' is a string literal and so 'undefined' is concatenated to '3'with the + sign.
    - “3” - undefined
      - NaN
      - undefined cannot be converted into a number so the subtraction will fail and output 'NaN' which is not a number.

15. Comparison

    - ‘2’ > 1
      - true
      - '2' becomes the int 2 and 2 > 1 is true
    - ‘2’ < ‘12’
      - false
      - string comparison will lead dictionary comparison where the third letter will result in 'o' being greater than 'e'.
    - 2 == ‘2’
      - true
      - The right side '2' will be turned into an int and 2 == 2 is true. 
    - 2 === ‘2’
      - false
      - === is strictly equal and because they are different types (int and string literal) so it's false
    - true == 2
      - false
      - true is converted to 1 because of Numeric Conversion and 1 == 2 is false
    - true === Boolean(2)
      - true
      - Boolean(2) is equal to true and true is strictly equal to true so the comparison is true.

16. Explain the difference between the == and === operators.
    
    === is strictly equals so there will be no type conversion. == lets conversion happen so even if the two sides weren't originally the same type, they might be converted and end up equaling.

17. From the code snippet below, explain what gets printed and why.  (This should be in your part1.md)
    
    'How are you?' is printed because we first go to the first if condition and see that 2 == true is false because true would be 1. So we move on to the else if after it. Any number other than 0 is true so 2 is true and we go into this statement and print 'How are you?' to the console.

18. Code in part1-question18.js
    
19. If the function below is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result. (This should be in your part1.md)
    
    The result would be [6, 8, 10] because first of all, doSomething is callback in modfiyArray. And then the for loop would iterate a total of three times, with 1, 2, 3 respectively and newArr pushed the value of this whole chunk where callback is doSomething which adds 2 and then returns the element + 2 to function(x) which multiplies it by 2. So we get 6, 8, 10 respectively.  

20. Code in part1-question20.js
    
21. What is the output of this code? (This should be in your part1.md)
    The output is 1 4 3 2
