     //CODE STRUCTURE

    //STATMENTS
    //    alert('hello world!') ;
    //    alert('world');
    //    //semicolon may be omitted in most cases when a line breaks
    //    alert('Hello')
    //    alert('world')

    //    //some examples in new line

    //    alert(3+
    //    1
    //    +2); //ouput will be 6
       
    //    //But every thing is fine again if we add a semicolon after alert:
    //    alert('All fine now');
    //    [1,2].forEach(alert)

  
     
/*
use strict
the directive looks like a string:
"use strict" or 'use strict'.when it is located at the top
of a script the whole script works the modern way
*/
// "use strict";
// alert('kareem')

/*
variables:
        Most of the time, a javascript application needs to work
        with information.Here are two examples:
        1.)An onlineshop-information might includes goods being sold
        and a shopping cart.
        2.)A chat application-users,messages and much more
        */

        //to create a variable in javascript we can use let keyword
            //     let name='karimulla'
            //    console.log(name);
            //    let message;
            //    message = 'Hello!';
            //    message ='kishore';
            //    console.log(message);
            //two variables declare data

            // let hello = 'hello world!';
            // let message;
            // copy 'Hello world' from hello into message
            // message =hello;
            //now two variables hold the same data
            // alert(hello);
            // alert(message);

            /*
            variable naming:
             There are two limitations on variable names in javascript
             1.) The name must contain only letters,digit, or the symbols $ and _.
             2.) The first character must not be a digit
            3.) When the name contains multiple words,camelCase is commonly used.
            4.) We can't use Reserved names like let,class,return and function
             */
               

               /*
               Constants:
               To declare a constant(unchanging) variable, use const instead of let:
               */
            //    const myBirthday ='16-06-1996';
            //    console.log(myBirthday);

            /*
            let:is a modern variable declaration.The code must be in strict to use
            var:is an old-school variable declaration..Normally we dont use it at all,
            but we'll cover sutable differences
            const: is like let, but the value of the variable cant be changed.
            */
               
               //Exercise task1
            //    let admin,name; //can declare two variable at once
            //    name = "vamsi";
            //    admin = name;
            //    console.log(admin);
               //Exercise task2
            //    let ourPlanetName = "Earth";
            //    let currentUserName = "vamsi";
            //    console.log(ourPlanetName);
            //    console.log(currentUserName);
               //exercise task3
            //    const birthday = '16-16-1996';
            //    const age = someCode(birthday);
              
               
            /*
            Data types in javascript:
            1.)number 2.) string 3.) boolean 4.) null
            5.) undefined 6.) Objects and Symbols 
            7.) typeof Operator
            */

            // let n=123; //Number declaration
            // n=12.345; //number type represent both integer and float
            // alert (1/0);//Infinity represent the mathematical
            // alert ("not a number / 2");//NaN,

            // let str = "Hello"; //string declaration
            // let str2 = 'single quotes';
            // let pharse = `can embed ${str} `;

        // let name = "Narendra";

         //embed a variable
        // console.log(` Hello, ${name}! `);
        //embed in result
        // console.log(` the result is ${1+2} `);
        
        // let nameFiledChecked = true; //yes, name field is checked
        // let ageFieldChecked = false; //no, age field is not checked

        //Example of boolean experission
        //  let isGreater =4>1;
        //  console.log(isGreater);
         
               //null value
            //    let age = null;
               
               //undefined value
            //    let x;
            //    console.log(x);
            
            //Objects : for more complex data structures.
            //Symbol : for unique identifiers.
            //typeof Operator
            /*
            typeof Operator returns the type of the argument.
            Its support two forms of syntax
            1.) As an operator : typeof x.
            2.) AS a function :typeof(x).
            */
            //Examples of typeof
            // typeof undefined; //undefined
            // typeof 0 //number
            // typeof true //boolean
            // typeof "foo" //string

            // typeof Symbol("id") //Symbol
            // typeof Math //"object" 
            // typeof null //"object"
            // typeof alert //"function"   

        //Task on String
        // let name = "kareem";
        // console.log( `Hello ${1} `);
        // console.log( ` Hello ${"name"} `);
        // console.log( `Hello ${name} `);
        //Output
        // Hello 1 //the experssion is a number 1
        // Hello name // the experssion is a string
        // Hello kareem // the experssion is a variable embed it
        
        
        /*
        Type Conversions:
        Operator and functions automatically convert the values
        */

        //ToString
        // let value=true;
        // console.log(typeof value); //boolean
        // value=String(value); //now value is a string "true"
        // console.log(typeof value); //string

        //ToNumber
        // console.log( "6" / "3");  
        // let str ="123";
        // console.log(typeof str); //string
        // let num = Number (str);
        // console.log(typeof num); //Number
        // let age = Number ("an arbitary");
        // console.log(age);
        
        //Examples:
        // console.log( Number (  " 123"   )); //123
        // console.log("123s"); //NaN
        // console.log(true); //1
        // console.log(false); //0

        //Additon '+' concat strings

       // console.log('shaik' + 'karimulla'); //shaik karimulla

        //ToBoolean 

        /*
        values that are intuitively "empty", like 0,an empty string,null,undefinied, and
        NaN,became false.
        others values become true
        */
        
        
        //For instance:
        // console.log(Boolean(1) ); //true
        // console.log(Boolean(0) ); //false
        // console.log( Boolean("hello") ); //true
        // console.log(Boolean("") );//false
        
        //Task on Type Conversion
        // console.log(""+1+0); //10
        // console.log(""-1+0); //-1
        // console.log(true + false); //1
        // console.log("2" * "3"); //6
        // console.log(4+5+"px"); //9px
        // console.log("$"+4+5); //$45
        // console.log("4" -2 ); //2
        // console.log( 7 / 0); //Infinity
        // console.log(" -9 " + 5); //3
        // console.log(" -9 " - 5); //14
        // console.log(null + 1); //here null means 0 answer is 1
        // console.log(undefined + 1); //NaN
                 
        // console.log(null + 1 );
         //Note:the string with zero "0" is true
        
        /*
        Opeartors:
        Wkt they are things like addition +,Multiplication *,
        subtraction -,and so on
        Terms: "unary", "binary" ,"operand"
        .An Operand - For instance, in the mul 5 * 2 there are
        two operands:the left operand is 5 and the right oprerand is 2
        sometimes,People call these "arguments" instead of "operands"
        .An operand is unary if it has a single operand.the unary negation
        reverses the sign of a number:
        */
        
        
        
        // let x =1;
        // x=-1;
        // console.log(x); //-1, unary negation was applied

        // let x=1, y=3
        // console.log(y-x); //2 is output
        
        
        //string concat,binary +
        // let s = "vamsi" + "Aila"
        // console.log(s); //vamsiAila
        // console.log('1' + 2 ); //12
        // console.log( 2 + 1 ); //21
        // console.log( 2+2+'1'); //41
        // console.log(2 - '1'); //1
        
        //Numberic conversion, unary +
        //The plus + exist in two forms:the binary we used above
        //For Example
        //No effect on numbers
        // let x=1;
        // console.log(+x); //1
        // let y=-2;
        // console.log(+y); //-2
        //convert non-numbers
        // console.log(+true);//1
        // console.log(+"");//0
        // let apple="2";
        // let oranges="3";
        //both values converted to numbers before the binary plus
        // console.log(+apples + +oranges); //5
        
        
        /*
        Operator Precedence
        If an expression more than one operator,the execution
        order is defined by their precedence,or,in other words,
        the implicit priority order of operator
        */
        
        //Assigment
        // let x= 2*2+1;
        // console.log(x); //5

        // let a,b,c;
        // a=b=c=2+2;
        // console.log(a); //4
        // console.log(b); //4
        // console.log(c); //4
        
        //the assigement operator "=" returns a value
        // let a=1;
        // let b=2;
        // let c=3 -(a=b+1);
        // console.log(a); //3
        // console.log(c); //0

        //Remanider %
        // console.log( 5%2); //1
        // console.log( 8%3); //2

        //Exponentiation **

        // console.log(2**2); // (2*2)
        // console.log(2**3); // (2*2*2)
        
        
        //Increment/decrement

        // let counter =2;
        // counter++;
        // console.log(counter); //3
        
        
        //Decrement
        
        // let counter =2;
        // counter--;
        // console.log(counter); //1
        
        //counter++ is a postfix
        //++counter is a prefix
        
        // let counter =1;
        // let a= ++counter;
        // console.log(a); //2


        //   let counter =1;
        // let a= counter++;
        // console.log(a); //1
        
        
        /*
        BitWise operators
        .AND(&) .OR(|) .XOR(^) .NOT(~)
        .LEFT SHIFT( << ) .RIGHT SHIFT( >> )
        .ZERO-FILL RIGHT SHIFT ( >>> )
        */ 
        
        // let n=2;
        // n +=5;
        // n *=2;
        // console.log(n); //14

        // let n=2;
        // n *= 3 +5;
        // console.log(n); //16
        
        //Comma

        // let a=(1+2,3+4);
        // console.log(a); //7
        
        //Tasks 
        //where are the final variable a b c d
        // let a=1, b=1;
        // let c=++a;
        // let d=b++;
        //output
        // a=2;
        // b=2;
        // c=2;
        // d=1;
     
     //what are the values of a and x after the code below?
    //  let a=2;
    //  let x=1+ (a*=2);
     //output
    //  a=4
    //  x=5
        
        
    /*
    Comparisons
    .Greater/less than: a>b, a<b
    .Greater/less than or equals: a>=b, a<=b.
    .Equals: a ==b
    .Not equals:  a!=b
    */
        //for example
        // console.log( 2>1); //true
        // console.log( 2 == 1); //false
        // console.log( 2!=1); //true
        
        //string comparsion
        // console.log('z' > 'A'); //true

        
        //Task Comparsion
        // 5 > 4 //true
        // "apple" > "pineapple" //false
        // "2" > "12" //true
        // undefined == null //true
        // undefined === null //false
        // null == "\n0\n" //false
        // null === +"\n0\n"
        



        
        //Interaction:alert,prompt,confirm

        //syntax of alert :alert(message);
        // alert("Hello");

        //prompt accepts two arguments
    //   let age =prompt ('How old are you?',100);
    //   console.log(`you are ${age} years old! `);
      
        
    //confirm of syntax:
    // result = confirm(question);
    /*
    function confirm shows a modal window a question 
    and two buttons:Ok and Cancel.the result is true if OK
    is pressed and false otherwise
    */    
        
      //Task on Interaction
      //   let isBoss =confirm("Are you the boss?");
      //   console.log(isBoss);
        
      /*
      Conditional operators:if,'?'
      */

     'use strict';
     // let year =prompt('In which year you born?','');
     // if (year ==1994) console.log('you are right!');
     
     //Ternary operator
     //syntax: let result = condition ? value1 :value2;
     // let acccess = age > 18 ? true :false;
     // let accessAlowed;
     // let age = prompt('How old are you?', '');
     // if(age >18 )
     // {
     //    accessAlowed =true;
     // }else{
     //    accessAlowed =false;
     // }
     // console.log(accessAlowed);
     
     //Non-traditional use of '?'
     // let company = prompt('which company created JavaScript?','');
     // (company == 'Netscape')?
     // console.log('Right!') : console.log('Wrong.');
     
     

        //Task on if condition
        // 1.) if (a string with zero)
        // if("0"){
        //    console.log('Hello');
           
        // }

        // 2.) name of the javascript
        // let value =prompt('what is the name of javascript','');
        //    (value == 'Ecmascript')?
        //    console.log('Right') : console.log('Wrong.');
           
        // 3.) 1, if the value is greater than zero,
        // -1, if less than zero
        // 0, if equals Zero.
       // let value =prompt('Type a number',0);
        // (value > 0) ? console.log(1): (value < 0) ? console.log(-1) : console.log(0);
        
        
    // 4.) Rewriting in ternary operator
  //   if (a+b<4){
  //      result ='Below';
  //   }    else{
  //      result = 'over';
  //   }

//  result = (a+b<4) ? 'Below' : 'over';

// 5.) Rewriting in Multiple ternary operator
  //   let message;
  //   if(login == 'Employee'){
  //      message = 'Hello'
  //   }else if  (login == 'Director'){
  //      message = 'Greeting';
  //   }else if (login == ''){
  //      message = 'No login';
  //   }else{
  //      message = '';
  //   }


  //   let message = (login == 'Employee') ? 'Hello':
  //   (login == 'Director') ? 'Greeting':
  //   (login == '') ? 'No login':
  //   '';

     /*
     Logical operators 
     || (OR) , && (AND), ! (NOT)
     */

     // if ( 1 || 0 ){
     //    console.log('truthly!');   
     // }

        // let hour =12;
        // let isWeekend =true;
        // if(hour<12 || hour >18 || isWeekend){
        //    console.log('The offical is closed');
        // }


//OR finds the first truthly value
//syntax result =value1 || value2 || value3;

// console.log( 1 || 0); //1 (1 is truthly)
// console.log( true || 'no matter what'); // (true is truthly)
// console.log(null || 1); // 1(1 is the first truthly value)
// console.log(null || 0 || 1); //1 (the first truthy value)
// console.log(undefined || null || 0); //0 (all falsy,returns the last value)


//Getting the first truthy value 
// let currentUser =null;
// let defaultUser ='kareem';
// let name = currentUser || defaultUser || 'unnamed';
// console.log(name);

// AND operator bot condition true means only true
// console.log( 1 && 2 && null && 3);//null
// console.log( 1 && 2 && 3); //3


//precendence of AND && is higher than OR ||
// let x=1;
// (x > 0) &&
//    console.log('Greater than zero');
  
//!(NOT)

// console.log(Boolean("kareem is a bad boy")); //true
// console.log(Boolean(null)); //false



// Tasks on Logical operator
//1.) What's the result of OR?
// console.log(null || 2 || undefined); //2

//2.)  What's the result of OR'ed log?
// console.log(alert(1) || 2 || alert(3)); // 1 2 The call to alert does not return a value. Or, in other words, it returns undefined.

//3.)  What is the result of AND?
// console.log( 1 && null && 2 ); //null

//4.) What is the result of AND'ed alerts?
// console.log( alert(1) && (alert(2))); //1 second one will be undefined

// 5.) The result of OR AND OR?
// console.log( null || 2&&3 || 4); //3

//6.)Check the range between? 14 and 90
//  if(age >= 14 && age<=90 )

// 7.) Check the range outside 14 and 90
//  if(!(age >= 14 && age<=90 ))

// if(age <14 || age > 90)

//8.) A question about "if"
//Which of these alerts are going to execute?

//What will the results of the expressions be inside if(...)?

// if (-1 || 0) alert( 'first' ); //it is a truthly value so execute first
// if (-1 && 0) alert( 'second' ); //it is a falsy value
// if (null || -1 && 1) alert( 'third' );//it is a truthly value



// 9.) UserName and password creation

// let UserName =prompt('who is there?','');
// if( UserName == 'Admin'){
//    let pass=prompt('password?','');
//    if( pass == 'karimulla'){
//       console.log('welcome!...');
//    }else if(pass == '' || pass ==null){
//       console.log('cancelled');
//    }else{
//       console.log('Wrong password!..');
//    }
// }else if(UserName =='' || UserName ==null){
//    console.log('cancelled');
// }else{
//    console.log('I dont know');
// }


/*
Loops:while and for
*/

//the while loop syntax
// while (condition){
  //code
// }
// let i=3;
// while (i) console.log(i--); //3 2 1

//" do...while" loop
/* syntax
do{
  //loop body
}while (condition)
*/

// let i=o;
// do{
//    console.log(i);
//    i++;
// }while(i<3); //0 1 2 3

//the "for" loop
/*
for(intilization;condition;increment){
  body
}
*/


// let i=0;
// for (i=0;i<3;i++){
//    console.log(i);
// }
// console.log(i);

/*
we can actually remove everything, creating an infinite loop:
for (;;){
  repeats without limits
}
*/

//Breaking the loop

// let sum =0;
// while (true) {
//    let value =+prompt("enter a number",'');
//    if (!value) break; // (*)
//    sum +=value;
// }
// console.log('Sum :'+sum);


//continue to the next iteration
// for(let i=0; i<10;i++){
//    //if true,skip the remaining part of the body
//    if( i%2 == 0 ) continue;
//    console.log(i); // 1 3 5 7 9
// }


//continue directive helps decrease nesting
// for (let i=0; i<10; i++ ){
//    if (i % 2){
//       console.log(i);
//    }
// }


//rewriting in single line
// (i<5) ? log(i) : break;


//Labels for break/continue
// for(let i=0; i<3; i++){
//    for (let j=0; j<3; j++){
//       let input=prompt(`value at coords (${i},${j})`,'');
     //what if I want to exit from here to Done (below)?
//    }
// }
// console.log('Done!');



// break <labelName>
outer:for (let i=0; i<3 ;i++){
  for (let j=0; j<3; j++ ){
     let input =prompt(`value at coords (${i},${j})`,'');
     //if an empty string or canceled then break out of the loops
     if (!input) break outer; //(*)
     //do something with value
  }
}
console.log('Done!');


/*

   while – The condition is checked before each iteration.
   do..while – The condition is checked after each iteration.
   for (;;) – The condition is checked before each iteration, additional settings available.
*/



//Task on Looping
// 1.) What is the last value alerted by this code? Why?

// let i = 3;

// while (i) {
//   alert( i-- );
// } //output is 3 2 1


// 2.) Which values does the while loop show?
// The prefix form ++i:

let i = 0;
while (++i < 5) alert( i );
//Above output 1 2 3 4

// The postfix form i++

let i = 0;
while (i++ < 5) alert( i );

//Above output 1 2 3 4 5

// 3.)Which values get shown by the "for" loop?
//The postfix form:

for (let i = 0; i < 5; i++) alert( i );

//The prefix form:

for (let i = 0; i < 5; ++i) alert( i );


//the above both answer is 0 1 2 3 4

// 4.) Output even numbers in the loop

//Use the for loop to output even numbers from 2 to 10.

for (let i=2; i<=10;i++){
  if( i%2 == 0){
     console.log(i);
  }
}


// 5.) Replace "for" with "while"
//Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).

for (let i = 0; i < 3; i++) {
 alert( `number ${i}!` );
}

let i=0;
while (i<3){
  console.log(`number ${i}!`);
  i++;
}




