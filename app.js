//...........................................................................................................................................


// Chapter# 1

// Chapter 1(assignment number: 1, 2)

alert("Error! Please enter a valid password")


// Chapter 1(assignment number: 3)

alert("Wellcome to JS land...\n Happy Coding!")


// Chapter 1(assignment number: 4)

alert("Welcome to JS Land")
alert("Happy Codding!\n prevent  this page from creating additional dialoges")


// Assignment 2

var a = username
var myName = "Mubeen Malik";
alert(myName)


// Chapter 1(assignment number: 5)

var message = "Hello World!"
alert(message)


//...........................................................................................................................................


// Chapter# 2


// Chapter 2(assignment number: 1, 2, 3)

var name = "Mubeen Malik"
var age = "18 years old "
var course = "Certified Mobile Application Development"
alert(name)
alert(age)
alert(course)


// Chapter 2(assignment number: 5)

alert(" PIZZA\n PIZZ\n PIZ\n PI\n P")


// Chapter 2(assignment number: 6)

var email = "malik@gmail.com "
alert("My email addres is" + " " + email)

// Chapter 2(assignment number: 7)

var book = "A smarter way to learn JavaScript"
alert("I am trying to learn from the Book " + " " + book)


// Chapter 2(assignment number: 8)

document.write("Yah! I can write HTML content through JS")





// Chapter 2(assignment number: 9)

var i = "-------@^¬^@-------"
alert(i)

//...........................................................................................................................................



// Chapter # 3



// Chapter 3(assignment number: 1)


var age = "18"
alert("I am" + " " + age + " " + " years old ")


// Chapter 3(assignment number: 2)

var a = 14
alert("You have visited this site" + " " + a + " " + "times")





// Chapter 3(assignment number: 3)


var birthYear = 2002
document.write("My birth year is" + " " + birthYear)
document.write("<br/>")
 document.write("Data Type of my declared variable is number")


// Chapter 3(assignment number: 4)

var visiterName = "John Doe"
var productTitle = "5 T-shirt(s)"
var quantity = "2"
document.write(visiterName + " " + "orderd" + "  " + productTitle + " " + "on XYZ Clothing Store")



//...........................................................................................................................................



// VARIABLE NAMES: LEGAL & ILLEGAL(4)

// Chapter # 4


// Chapter 4(assignment number: 3)


var a = "numbers "
var b = "$"
var c = "_"
var d = "1st"
document.write("Rules for naming JS variable")
document.write("<br/>")
document.write("<br/>")
document.write("<br/>")
document.write("Variables names can only contain" + ", " + a + " ," + " " + b + ", " + "  and " + c + "." + "For example" + ":" + b + "my" + c + d + "Variables")
document.write("<br/>")
document.write("Variables must begin with a letter" + ", " + b + " or" + " " + c + "." + "For example" + ":" + b + "name" + "," + c + "name or name")
document.write("<br/>")
document.write("Variables names are case sensitive ")
document.write("<br/>")
document.write("Variables names should not be JS keywords ")



//................................................................................................................................

// Chapter# 5


// Chapter 5(assignment number: 1)


var val1 = prompt("enter first num")
var val2 = prompt("enter second number")
document.write("Sum of " + " " + val1 + " +" + val2 + " " + "=" + ((+val1) + (+val2)))



// Chapter 5(assignment number: 2)


var val1 = prompt("enter first num")
var val2 = prompt("enter second number")
document.write("Sum of " + " " + val1 + " -" + val2 + " " + "=" + ((+val1) - (+val2)))

var val1 = prompt("enter first num")
var val2 = prompt("enter second number")
document.write("Sum of " + " " + val1 + " *" + val2 + " " + "=" + ((+val1) * (+val2)))

var val1 = prompt("enter first num")
var val2 = prompt("enter second number")
document.write("Sum of " + " " + val1 + " /" + val2 + " " + "=" + ((+val1) / (+val2)))

var val1 = prompt("enter first num")
var val2 = prompt("enter second number")
document.write("Sum of " + " " + val1 + " % " + val2 + " " + "=" + ((+val1) % (+val2)))



// Chapter 5(assignment number: 3)


var a
document.write("The value of variable after declartion is :" + " " + a)
document.write("<br/>")
var a = 5
document.write("Initial value is :" + " " + a)
document.write("<br/>")
document.write("the value after increment is :" + " " + ++a)
document.write("<br/>")
var a = 6 + 7
document.write("Value after addition is:" + " " + a)
document.write("<br/>")
document.write("Value after decrement is :" + " " + --a)
document.write("<br/>")
document.write("Remainder is :" + " " + a % 3)



// Chapter 5(assignment number: 4)


var ticketPrice = "600 PKR "
document.write("Total cost to buy 5 ticket is  :" + " " + 600 * 5 + "PKR")



// Chapter 5(assignment number: 5)


var a = prompt("Enter a number for multiplication table")

document.write("table of " + " " + a + " " + "is")
document.write("<br/>")

for (var i = 0; i <= 10; i++) {
    document.write(a + " " + "*" + i + " " + "=" + " " + a * i)
    document.write("<br/>")
}


// Chapter 5(assignment number: 6)


var a = prompt("Enter temperature to convert in Celsius")
document.write("Temperature in Celsius is :" + " " + (a - 32) * 5 / 9 + " " + "`C")

var a = prompt("Enter temperature to convert in Farenheit")
document.write("Temperature in Farenheit is :" + " " + ((a * 9 / 5) + 32) + " " + "`F")




// Chapter 5(assignment number: 7)


var P1 = prompt("Enter price of item 1")
var C1 = prompt("Enter quantity of item 1")
var P2 = prompt("Enter price of item 2")
var C2 = prompt("Enter quantity of item 2")

document.write("Shopping Cart")
document.write("Price of item 1  is :" + "" + P1)
document.write("<br/>")

document.write("Quantity of item 1:" + " " + C1)
document.write("<br/>")

document.write("Price of item 2  is :" + "" + P2)
document.write("<br/>")

document.write("Quantity of item 1:" + " " + C2)
document.write("<br/>")

document.write("Shipping charges is: 100")
document.write("<br/>")
document.write("<br/>")
document.write("Total cost of your order is " + " " + (((+P1) * C1) + ((+P2) * C2) + 100))


// Chapter 5(assignment number: 8)


var b = prompt("Enter Marks Obtained")
var a = prompt("Enter total Marks")

document.write("Total Marks:" + a)
document.write("<br/>")

document.write("Marks obtained:" + b)
document.write("<br/>")

document.write("Percentage:" + " " + (b / a * 100))


// Chapter 5(assignment number: 9)


var a = prompt("Enter US dollars to convert in Pak currency")
var b = prompt("Enter Saudi rayals to convert in Pak currency")

document.write("Currency in PKR")
document.write("<br/>")
document.write("<br/>")
document.write("<br/>")

document.write("Total currency in PKR:" + " " + ((a * 104.80) + (b * 28)))


// Chapter 5(assignment number: 10)


var a = 10

document.write("Declared variable is:" + " " + a)
document.write("<br/>")
document.write("<br/>")

document.write("by adding:" + " " + (a + 5))
document.write("<br/>")

document.write("by multiplying:" + " " + (a * 5))
document.write("<br/>")
document.write("by dividing:" + " " + (a / 2))
document.write("<br/>")


// Chapter 5(assignment number: 11)


var a = prompt("Enter Current Year")
var b = prompt("Enter Birth Year")

document.write("AGE CALCULATOR")
document.write("<br/>")
document.write("<br/>")
document.write("<br/>")

document.write("Current Year:" + " " + a)
document.write("<br/>")

document.write("Birth Year:" + " " + b)
document.write("<br/>")

document.write("Your Age is:" + " " + (a - b))



// Chapter 5(assignment number: 12)


var a = prompt("Enter Radius")

document.write("The Geometrizer")
document.write("<br/>")
document.write("<br/>")
document.write("<br/>")

document.write("Radius of circle is:" + " " + a)
document.write("<br/>")

document.write("The circumference is:" + " " + (2 * 3.142 * a))
document.write("<br/>")

document.write("The area is:" + " " + (3.142 * (a * a)))


// Chapter 5(assignment number: 13)



var a = prompt("Enter fav. snack")
var b = prompt("Enter current age")
var c = prompt("Enter estimated max. age")
var d = prompt("Enter snack per day")
var e = ((c - b) * d)

document.write("The Lifetime Supply Calculator")
document.write("<br/>")
document.write("<br/>")
document.write("<br/>")

document.write("Favourite snack:" + " " + a)
document.write("<br/>")
document.write("Current age:" + " " + b)
document.write("<br/>")
document.write("Estimated Maximum age:" + " " + c)
document.write("<br/>")
document.write("Amount of Snack per day:" + " " + d)
document.write("<br/>")
document.write("<br/>")
document.write("You will need" + " " + e + " " + a + " " + "to last you until the ripe old age of" + " " + c)



//..................................................................................................................................


// Chapter  # 6 - 9



// Chapter 6 - 9(assignment number: 1)


var a = prompt("Enter a value")

document.write("The value of ++a" + " " + "is:" + (++a))
document.write("<br/>")
document.write("Now the value of a  is :" + " " + a)
document.write("<br/>")

document.write("The value of a++" + " " + "is:" + (a++))
document.write("<br/>")
document.write("Now the value of a  is :" + " " + a)
document.write("<br/>")

document.write("The value of --a" + " " + "is:" + (--a))
document.write("<br/>")
document.write("Now the value of a  is :" + " " + a)
document.write("<br/>")

document.write("The value of a--" + " " + "is:" + (a--))
document.write("<br/>")
document.write("Now the value of a  is :" + " " + a)


// Chapter 6 - 9(assignment number: 2)


var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;


document.write("a is :" + " " + (a))
document.write("<br/>")

document.write("b is :" + " " + (b))
document.write("<br/>")


document.write("result is:" + " " + (--a - --b + ++b + b--))



// Chapter 6 - 9(assignment number: 3)


var a = prompt("Enter your name")
alert("Welcome" + " " + a + " " + "to JS land")



// Chapter 6 - 9(assignment number: 4)


var a = prompt("Enter number for multiplication table")
if (a = a) {
    for (i = 0; i <= 10; i++) {
        document.write(a + " " + "*" + " " + i + " " + "=" + (+(a * i)))
        document.write("<br/>")

    }
} else {
    for (i = 0; i <= 10; i++) {
        document.write(5 + " " + "*" + " " + i + " " + "=" + (+(5 * i)))
        document.write("<br/>")

    }
}



// Chapter 6 - 9(assignment number: 5)


var a = prompt("Enter a suject name")
var b = prompt("Enter a suject obt. num")
var c = prompt("Enter a suject name")
var d = prompt("Enter a suject obt. num")
var e = prompt("Enter a suject name")
var f = prompt("Enter a suject obt. num")


document.write("Subject " + "     " + "Total marks" + " " + "Obt. marks" + " " + "Per.")
document.write("<br/>")
document.write("<br/>")
document.write("<br/>")


document.write(a + " " + "100" + " " + b + "Obt. marks" + " " + b + "%")
document.write("<br/>")

document.write(c + " " + "100" + " " + d + "Obt. marks" + " " + d + "%")
document.write("<br/>")

document.write(e + " " + "100" + " " + f + "Obt. marks" + " " + f + "%")
document.write("<br/>")

document.write(e + " " + "300" + " " + " " + (a + c + e) + " " + " " + ((a + c + e) / 300 * 100))
document.write("<br/>")


......................................................................................................................................

// Chapter #  9-11



// Chapter 9 - 11(assignment number: 1)


var a = prompt("Enter yur city name")


if (a === "karachi") {
    alert("Welcome to city of lights");
} else {
    alert("You are from another city");
}



// Chapter 9 - 11(assignment number: 2)


var a = prompt("Enter yur Gender")


if (a === "male") {
    alert(" Good Morning Sir");
} else if (a === "female") {
    alert("Good Morning Ma’am");
}



// Chapter 9 - 11(assignment number: 3)


var a = prompt("Enter color of road signal")


if (a === "red") {
    alert(" Must Stop");
} else if (a === "yellow") {
    alert("Ready to move");
} else if (a === "green") {
    alert("Move now");
}


// Chapter 9 - 11(assignment number: 4)


var a = prompt("Enter remaining fuel in car (in litres) ")


if (a < 0.25) {
    alert("Please refill the fuel in your car");
}



// Chapter 9 - 11(assignment number: 5)


var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

// yes it desplay

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

// no it not desplay

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

// comdition 4 is true


var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

// yes it desplay


if (true) {
    alert("True");
}
if (false) {
    alert("False");
}


true

if ("car" < "cat") {
    alert("car is smaller than cat");
}


// it runs




// Chapter 9 - 11(assignment number: 6)


var a = prompt("Enter marks obtain in three subject")
var b = prompt("Enter total marks")
var c = a / b * 100


document.write("MARKS SHEET")
document.write("<br/>")
document.write("<br/>")
document.write("<br/>")

document.write("Total marks:" + " " + b)
document.write("<br/>")

document.write("Obtain marks:" + " " + a)
document.write("<br/>")

document.write("Percentage" + " " + c + "%")
document.write("<br/>")


if (c >= 80) {
    document.write("Grade: A-one")
    document.write("<br/>")
    document.write("Remarks: Excellent")
    document.write("<br/>")

} else if (c >= 70) {
    document.write("Grade: A")
    document.write("<br/>")
    document.write("Remarks: Good")
    document.write("<br/>")

} else if (c >= 60) {
    document.write("Grade: B")
    document.write("<br/>")
    document.write("Remarks: You need to improve")
    document.write("<br/>")

} else if (c < 60) {
    document.write("Grade: fail")
    document.write("<br/>")
    document.write("Remarks: Sorry")
    document.write("<br/>")

}



// Chapter 9 - 11(assignment number: 7)


var a = prompt("Guess a secret number (ranging from 1 to 10)")

if (a == 2) {
    alert("“Bingo! Correct answer ")
} else if (a == 1) {
    alert("Close enough to the correct answer")
} else if (a == 3) {
    alert("Close enough to the correct answer")
} else {
    alert("Sorry! Try again")
}




// Chapter 9 - 11(assignment number: 8)


var a = prompt("Enter no. to check whether it is divisble by 3 or not")

if ((a % 3) == 0) {
    alert("Number is divisble by 3")
} else {
    alert("number is not divisble by 3")
}



// Chapter 9 - 11(assignment number: 9)


var a = prompt("Enter no. to check whether the number is odd or even")

if ((a % 2) == 0) {
    alert("Number is even")
} else {
    alert("number is odd")
}



// Chapter 9 - 11(assignment number: 10)


var a = prompt("Enter a temperature")

if (a > 40) {
    alert("It is too hot outside.")
} else if (a > 30) {
    alert("The Weather today is Normal.")
} else if (a > 20) {
    alert("Today’s Weather is cool..")
} else if (a > 10) {
    alert("OMG! Today’s weather is so Cool.")
}



// Chapter 9 - 11(assignment number: 11)



var a = prompt("Enter 1st num ")
var b = prompt("Enter Operation ")
var c = prompt("Enter 2nd num ")

if (b == "+") {
    alert(a + " " + "+" + " " + c + " " + "=" + " " + (+(a + c)))
} else if (b == "-") {
    alert(a + " " + "-" + " " + c + " " + "=" + " " + (+(a - c)))
} else if (b == "*") {
    alert(a + " " + "*" + " " + c + " " + "=" + " " + (+(a * c)))
} else if (b == "/") {
    alert(a + " " + "/" + " " + c + " " + "=" + " " + (+(a / c)))
}

// ....................................................................................................................................


// Chapter  # 12 - 13

// Chapter 12 - 13(assignment number: 1)

var a= prompt("Enter any Charcter")
if(a >="A" && a<= "Z"){
    alert(a+" is a UpperCase letter")
}else if(a >= "a" && a<= "z"){
    alert(a+" is a LowerCase letter")
}else{
    alert("its a num")

}

// Chapter 12 - 13(assignment number: 2)


var a = prompt("Enter a number")
var b = prompt("Enter a number")

if (a === b) {
    alert("The numbers are equal")
} else if (a > b) {
    alert(a + " " + " number is greater")
} else if (a < b) {
    alert(b + " " + " number is greater")
}


// Chapter 12 - 13(assignment number: 3)


var a = prompt("Enter a number")

if (a < 0) {
    alert("The number is negative")
} else if (a > 0) {
    alert(a + " " + " number is positive")
} else if (a == 0) {
    alert("number is zero ")
}


// Chapter 12 - 13(assignment number: 4)


var a = prompt("ENTER A CHARACTER (vowel)")

if (a === "a") {
    alert("True")
} else if (a === "e") {
    alert("True")
} else if (a === "i") {
    alert("True")
} else if (a === "o") {
    alert("True")
} else if (a === "u") {
    alert("True")
} else {
    alert("False")
}


// Chapter 12 - 13(assignment number: 5)


var b = prompt("Enter your passwrod")
var a = "321"


if (b === a) {
    alert("Correct Password")
} else if (b !== a) {
    alert("Wrong password")
}


// Chapter 12 - 13(assignment number: 6)


var hour = 13
if (hour < 18) {
    alert("Good day")
} else {
    alert("Good evening")
}




// Chapter 12 - 13(assignment number: 7)


var time = prompt("Enter time in 24 hours clock format ")

if (time >= 0000 && time < 1200) {
    alert("Good Morning")
} else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon")
} else if (time >= 1700 && time < 2100) {
    alert("Good Evening")
} else if (time >= 2100 && time <= 2359) {
    alert("Good Night")
}



//...........................................................................................................................................


// Chapter # 14-16


// Chapter 14 - 16(assignment number: 3)

var stdntName = ["malik", "khan", "niakl"]

// Chapter 14 - 16(assignment number: 4)

var numbers = [1, 2, 3, 4]


// Chapter 14 - 16(assignment number: 5)


var boolean = [true, false, and, or, ]

// Chapter 14 - 16(assignment number: 6)

var mixed = [1, "ali,", true]


// Chapter 14 - 16(assignment number: 7)


var qual = ["SSC ", "HSC ", "BCS ", "BS", "BCOM ", "MS", "M.Phil. ", "PhD "]
document.write(qual)


// Chapter 14 - 16(assignment number: 8)


var stdName = ["ali", "hamxa", "malik"]
var score = [320, 230, 480]

document.write("Score of" + " " + stdName[0] + " " + "is" + " " + score[0] + " " + "Percentage:" + " " + (score[0] / 500 * 100) + " " + "%")
document.write("<br/>")
document.write("Score of" + " " + stdName[1] + " " + "is" + " " + score[1] + " " + "Percentage:" + " " + (score[1] / 500 * 100) + " " + "%")
document.write("<br/>")
document.write("Score of" + " " + stdName[2] + " " + "is" + " " + score[2] + " " + "Percentage:" + " " + (score[2] / 500 * 100) + " " + "%")
document.write("<br/>")



// Chapter 14 - 16(assignment number: 9)


var colorName = ["red", "green", "blue", "black", "orange"]
document.write("<br/>")
document.write("<br/>")

document.write(colorName)

var a = prompt("What color you want to add to the begining")
alert(a)
colorName.unshift(a)
document.write(colorName)
document.write("<br/>")
document.write("<br/>")

var b = prompt("What color you want to add to the end")
alert(a)
colorName.push(b)
document.write(colorName)
document.write("<br/>")
document.write("<br/>")

colorName.unshift("Grey", "brown")
document.write(colorName)
document.write("<br/>")
document.write("<br/>")

colorName.shift(colorName[0])
document.write(colorName)
document.write("<br/>")
document.write("<br/>")

colorName.pop(colorName)
document.write(colorName)
document.write("<br/>")
document.write("<br/>")

var c = prompt("which color you want to add ?")
var d = prompt("Which index value do you want")
colorName.splice(d, 0, c)
document.write(colorName)

var c = prompt("which index he/she wants to delete color(s)")
var d = prompt(" how many colors he/she wants to delete.")
colorName.splice(c, d)
document.write(colorName)


// Chapter 14 - 16(assignment number: 10)


document.write("Numbr are:")

for (i = 0; i <= 4; i++) {
    b = prompt("Enter score")
    document.write(b + " ," + "")

}



// Chapter 14 - 16(assignment number: 11)


var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]

document.write("Cites List:\n" + " " + cities)
document.write("<br/>")
document.write("<br/>")
document.write("<br/>")

a = cities.slice(2, 4)
document.write("Selected Cities:\n" + a)



// Chapter 14 - 16(assignment number: 12)


var arr = ["This", "is", "my", "cat"]
document.write("Array:" + " " + arr)
document.write("<br/>")
document.write("<br/>")
document.write("<br/>")

document.write("String:" + " " + arr[0] + " " + arr[1] + " " + arr[2] + " " + arr[3])



// Chapter 14 - 16(assignment number: 13)


var arr = ["keyboard", "mouse", "printer", "monitor"]

document.write("Devices:" + " " + arr)
document.write("<br/>")
document.write("<br/>")
document.write("<br/>")



// Chapter 14 - 16(assignment number: 14)


for (i = 0; i < 4; i++) {
    document.write("out:" + arr[i])
    document.write("<br/>")

}


//...........................................................................................................................................



// Chapter # 17 - 20


// Chapter 17 - 20(assignment number: 2)


var arr = [
    [0, 1, 2, 3]
    [1, 0, 1, 2],
    [2, 1, 0.1]
]
document.write(arr[0])
document.write("<br/>")
document.write(arr[1])
document.write("<br/>")
document.write(arr[2])
document.write("<br/>")


// Chapter 17 - 20(assignment number: 3)


var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (i = 0; i <= 9; i++) {
    document.write(arr[i])
    document.write("<br/>")
}


// Chapter 17 - 20(assignment number: 4)

var a = prompt("Enter a number to print its multiplication table")
var b = prompt("Enter lenght")

for (i = 0; i <= b; i++) {
    document.write(a + " " + "*" + " " + i + " " + "=" + (+(a * i)))
    document.write("<br/>")
}



// Chapter 17 - 20(assignment number: 5)


var fruits = ["apple", "banana", "mango", "orange ", "strawberry "]

for (i = 0; i <= 4; i++) {
    document.write(fruits[i])
    document.write("<br/>")
}
document.write("<br/>")
document.write("<br/>")
document.write("<br/>")
document.write("<br/>")

for (i = 0; i <= 4; i++) {
    document.write("Element at index" + " " + i + " " + "is" + " " + fruits[i])
    document.write("<br/>")

}


// Chapter 17 - 20(assignment number: 6)


document.write("Counting:" + " ")
for (i = 1; i <= 15; i++) {
    document.write(i + ",")
}
document.write("<br/>")
document.write("<br/>")

document.write("reverse:" + " ")
for (i = 10; i >= 1; i--) {
    document.write(i + ",")
}
document.write("<br/>")
document.write("<br/>")

document.write("Even:" + " ")
for (i = 0; i <= 20; i += 2) {
    document.write(i + ",")

}
document.write("<br/>")
document.write("<br/>")

document.write("odd:" + " ")
for (i = 1; i <= 20; i += 2) {
    document.write(i + ",")

}
document.write("<br/>")
document.write("<br/>")

document.write("Even:" + " ")
for (i = 0; i <= 20; i += 2) {
    document.write(i + "k" + ",")

}



// Chapter 17 - 20(assignment number: 7)


var a = prompt("Enter cookie")
var b = ["cake", "apple pie", "cookie", "chips", "patties "]
for (i = 0; i <= 4; i++) {
    if (a === b[i]) {
        alert(b[i] + " " + "is available at" + " " + "index" + " " + i + " " + "in our bakery")
    } else {
        alert("WE are SORRY!" + " " + a + " " + "is not availbe in our bakery")
    }
    break
}



// Chapter 17 - 20(assignment number: 8)

var a = [24, 53, 78, 91, 12]

document.write("Array items:" + " " + a)
document.write("<br/>")
document.write("<br/>")

for (i = 0; i <= 4; i++) {
    if (a[i] >= a[3]) {
        document.write("The largest number is:" + " " + a[i])
    }
}



// Chapter 17 - 20(assignment number: 9)

var a = [24, 53, 78, 91, 12]

document.write("Array items:" + " " + a)
document.write("<br/>")
document.write("<br/>")

for (i = 0; i <= 4; i++) {
    if (a[i] <= a[4]) {
        document.write("The largest number is:" + " " + a[i])
    }
}




// Chapter 17 - 20(assignment number: 10)


for (i = 1; i <= 100; i++) {
    if ((i % 5) === 0) {
        document.write(i + ",")
    }
}




//................... ................................................Assignment # 21 - 25................................................

// Task No. # 1

var firstname = prompt("Enter first name")
var lastname = prompt("Enter last name")
var fullname = firstname + " " + lastname
alert("Wellcome" + " " + fullname + " " + "to JS land")


// Task No. # 2


var mobile = prompt("Enter your fav. mobile name")
var lengtth = mobile.length
document.write("My favourite phone is:" + " " + mobile)
document.write("<br />")
document.write("Lenght of string is:" + " " + lengtth)

// Task No. # 3

var country = "Pakistani"
var b = country.indexOf("n")
document.write("String:" + " " + country)
document.write("<br />")
document.write("index of `n` is:" + " " + b)

// Task No. # 4

var country = "Hello World"
var b = country.lastIndexOf("l")
document.write("String:" + " " + country)
document.write("<br />")
document.write("index of `l` is:" + " " + b)

// Task No. # 5

var country = "Pakistani"
var charatindex = country.charAt(3)
document.write("String:" + " " + country)
document.write("<br />")
document.write("Character at index 3:" + charatindex)


// Task No. # 6


var firstname = prompt("Enter first name")
var lastname = prompt("Enter last name")
alert("Wellcome" + " " + firstname + " " + lastname + " " + "to JS land")


// Task No. # 7

var city = "Hyderabad"
var newcity = city.replace("Hyder", "Islam")
document.write("City:" + " " + city)
document.write("<br />")
document.write("After replacement:" + " " + newcity)


// Task No. # 8

var message = "Ali and Sami are best friends.They play cricket and football together "
var afterrepl = message.replace(/ and /g, " " + "&" + " ")
document.write("Message:" + " " + message)
document.write("<br />")
document.write("<br />")
document.write("After replacing:" + " " + afterrepl)


// Task No. # 9

var strin = " 472 "
var num = Number(strin)
document.write("Value:" + " " + strin)
document.write("<br />")
document.write("Type:" + " " + "string ")
document.write("<br />")
document.write("Value:" + " " + strin)
document.write("<br />")
document.write("Type:" + " " + "number ")
document.write("<br />")

// Task No. # 10

var wordd = prompt("Write any word in lowercase")
var uper = wordd.toUpperCase()
document.write(uper)

// Task No. # 11

var name = prompt("enter any word")
var c = name.lenght
var psss = name[0].toUpperCase()
var nrm = name.slice(1, c)
document.write("User input:" + " " + name)
document.write("<br />")

document.write("<br />")

document.write("Title case:" + " " + psss + nrm)


// Task No. # 12

var num = 35.36
var chnge = num.toString()
var newNum = chnge.split(".").join("")
document.write("Number:" + " " + chnge)
document.write("<br />")
document.write("<br />")
document.write("Result:" + " " + newNum)



// Task No. # 13

var user = prompt("Enter username");

for (var i = 0; i <= user.length; i++) {
    if (user.charCodeAt(i) == "33" && "44" && "64" && "46") {
        alert("enter valid username")

    } else {
        alert(user + " wellcome")

    }
}


// Task No. # 14

var a = ["cake", "apple pie", "cookie", "chips", "patties"]
var c = prompt("Wellcome to ABC bakery what do you want to order sir/mam?")
var d = c.toLowerCase()

if (a.indexOf(d) !== -1) {
    alert(c + " " + "is available at index:" + "  " + a.indexOf(d) + " in our bakery")
} else {
    alert(c + " " + "is not available in our bakery")
}


// Task No. # 15


var a = prompt("Enter password");

if (a === "") {
    alert("Enter passwrod");
} else if (a.length < 6) {
    alert("Enter 6 Digit Password")
} else if (a.charAt(0) === "0" || "1" || "2" || "3" || "4" | "5" || "6" || "7" || "8" || "9") {
    alert("Enter valid password and do not start with a number");
} else {
    alert("Right password")
}




// Task No. # 16

var uni = "University of Karachi"
for (i = 0; i <= uni.length; i++) {
    document.write(uni.charAt(i))
    document.write("<br />")
}



// Task No. # 17

var name = prompt("Enter name")
document.write("User Input: " + name)
document.write("<br />")
document.write("Last Character of input: " + name.charAt(name.length - 1))


// Task No. # 18


var a = "The quick brown fox jumps over the lazy dog ";
var b = a.toLowerCase()
var count = (b.match(/the/g) || []).length;
document.write(a)
document.write("<br/>")
document.write("<br/>")
document.write("There are " + count + " occurence of word 'the'")









// ..............................................Assignment # 26 -30................................................

// Task No. # 1


var num = prompt("Enter a positive number")

var round = Math.round(num)
var flor = Math.floor(num)
var ceeil = Math.ceil(num);

document.write("numbers: " + num)
document.write("<br />")
document.write("round of value: " + round)
document.write("<br />")
document.write("floor value: " + flor)
document.write("<br />")
document.write("ceil value: " + ceeil)


// Task No. # 2



var num = prompt("Enter a positive number")

var round = Math.round(num)
var flor = Math.floor(num)
var ceeil = Math.ceil(num);

document.write("numbers: " + num)
document.write("<br />")
document.write("round of value: " + round)
document.write("<br />")
document.write("floor value: " + flor)
document.write("<br />")
document.write("ceil value: " + ceeil)



// Task No. # 3

var a = prompt("Enter a number for absoulute value")

var b = Math.abs(a)

document.write("The abolute value of " + a + " is " + b)



// Task No. # 4


var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 6) + 1;
var numberOfStars = Math.floor(improvedNum);
document.write("random dice number: " + numberOfStars)


// Task No. # 5

var a = Math.random();
var b = (a * 2) + 1;
var c = Math.floor(b)
if (c === 2) {
    document.write(c)
    document.write("<br />")
    document.write("<br />")
    document.write(" random coin value: Head")
} else {
    document.write(c)
    document.write("<br />")
document.write("<br />")
    document.write(" random coin value: Tail")
}


// Task No. # 6


var a = Math.random();
var b = (a * 100) + 1;
var c = Math.floor(b)

document.write("random number between 1 and 100 is: " + c)


// Task No. # 7

var a = prompt("Enter your weight in kilograms")
var b = parseFloat(a) + 1
var c = parseInt(a)
document.write("The weight of user is " + c + "  kilograms")


// Task No. # 8

var secnum = prompt("Enter a number between 1 to 10")
var a = Math.random();
var b = (a * 10) + 1;
var c = Math.floor(b)

if (secnum === c) {
    alert("Congraulation! ;D")
} else(
    alert("Try Again!")
)





// ..............................................Assignment # 31 - 34................................................//


Task No. # 1

var nwDate = new Date();
document.write(nwDate)


// Task No. # 2

var a = ["January", "February ", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var mnth = new Date();
var newMon = mnth.getMonth();
document.write("Current Month is: " + a[newMon])




//-------- second method

var a = new Date();
var b = a.toString();
var c = b.slice(3, 7);
document.write("Current Month is: " + c)


// Task No. # 3

var a = ["Mon", "Tue ", "Wed", "Thu", "Fri", "Sat", "Sun"]
var mnth = new Date();
var newDay = mnth.getDay() - 1;
document.write("Today is: " + a[newDay])



//-------- second method

var a = new Date();
var b = a.toString();
var c = b.slice(0, 3);
document.write("Today is: " + c)


// Task No. # 4

var a = ["Mon", "Tue ", "Wed", "Thu", "Fri", "Sat", "Sun"]
var mnth = new Date();
var newDay = mnth.getDay() - 1;
if (a[newDay] === "Sat") {
    document.write("It's Fun day")
} else if (a[newDay] === "Sun") {
    document.write("It's Fun day")
} else {
    document.write("ooooh sorry today is : " + a[newDay])
}


//-------- second method

var a = new Date();
var b = a.toString();
var c = b.slice(0, 3);
if (c === "Sat") {
    document.write("It's Fun day")
} else if (c === "Sun") {
    document.write("It's Fun day")
} else {
    document.write("ooooh sorry today is : " + c)
}




// Task No. # 5

var date = new Date();
var daymnth = date.getMonth();
if (daymnth < 16) {
    document.write("First fifteen day of the month")
} else if (daymnth > 15) {
    document.write("last fifteen day of the month")
}


// Task No. # 6

var date = new Date();
var dmili = date.getTime();
var minu = (dmili / (1000 * 60));

document.write("Current Date: " + date)
document.write("<br />")
document.write("<br />")
document.write("Elapsed milisecond since January 1, 1970: " + dmili)
document.write("<br />")
document.write("<br />")
document.write("Elapsed minutes since January 1, 1970: " + minu)



// Task No. # 7

var date = new Date();
var str = date.toString();
var time = str.slice(15, 18);
if (time < 13) {
    document.write("Its AM");
} else {
    document.write("Its PM");
}


// Task No. # 8

var laterDate = new Date("Dec 31,2020")
document.write(laterDate)


// Task No. # 9


var b = new Date("Apr 25,2020")
var d = b.getTime();
var a = new Date();
var c = a.getTime();
var diff = c - d;
var days = diff / (1000 * 60 * 60 * 24);
var flor = Math.floor(days);
document.write(flor + " days")



// Task No. # 10


var c = new Date("Jan 1,2015")
var d = c.getTime();
var a = new Date("Dec 5,2015")
var b = a.getTime();
var e = b - d;
var f = e / (1000 * 60)
var g = Math.floor(f);
document.write("On reference date " + a + " , " + g + " seconds had passed since begging of 2015")


// Task No. # 11


var newDate = new Date();
var hours = newDate.getHours();
var diff = hours - 1;
var str = newDate.toString();
var replce = str.replace(hours, diff);
document.write("Current date: " + newDate)
document.write("<br />")
document.write("<br />")
document.write("1 hour ago, it was " + replce)


// Task No. # 12


var newDate = new Date();
var newDate100 = new Date("1920");
document.write("Current date: " + newDate)
document.write("<br />")
document.write("<br />")
document.write("100 years back, it was " + newDate100)



// Task No. # 13

var age = prompt("Enter age")


var a = new Date();
var b = a.getFullYear();
var e = b - age;

document.write("Your age is: " + age)
document.write("<br />")
document.write("Your birth year:" + e)



// Task No. # 14



document.write("<h1>K-Electric Bill</h1>")
var name = prompt("Enter Your Name:")
var unit = prompt("Enter Units:")
var amunt = unit * 16
var late = amunt + 350
document.write("Customer Name: " + name)
document.write("<br />")
document.write("Month: February")
document.write("<br />")
document.write("No. of Units: " + unit)
document.write("<br />")
document.write("Charges per Unit: 16")
document.write("<br />")
document.write("<br />")
document.write("Net Amount Payable (within Due Date): " + amunt)
document.write("<br />")
document.write("Late Payment surcharge: 350")
document.write("<br />")
document.write("Gross Amount Payable (after Due Date): " + late)



// ..............................................Assignment # 35 - 38................................................//


// Task No. # 1

function tellTime() {
    var now = new Date();
    document.write(now);
}
tellTime();


// Task No. # 2

function greet() {
    var a = prompt("Enter First name")
    var b = prompt("Enter last name")
    var greet = ("Wellcome " + a + " " + b)
    alert(greet)
}
greet();


// Task No. # 3

function sum() {
    var a = +prompt("Enter 1st No. for Addition")
    var b = +prompt("Enter 2nd No. for Addition")
    var add = a + b
    alert(add)
}
sum();


// Task No. # 4

function cal() {
    var a = +prompt("Enter 1st num ")
    var b = prompt("Enter Operation ")
    var c = +prompt("Enter 2nd num ")

    if (b == "+") {
        alert(a + " " + "+" + " " + c + " " + "=" + " " + (a + c))
    } else if (b == "-") {
        alert(a + " " + "-" + " " + c + " " + "=" + " " + (a - c))
    } else if (b == "*") {
        alert(a + " " + "*" + " " + c + " " + "=" + " " + (a * c))
    } else if (b == "/") {
        alert(a + " " + "/" + " " + c + " " + "=" + " " + (a / c))
    }

}
cal();



// Task No. # 5

function sqrFun(num){
    var a=num*num
    alert(a)
}
sqrFun(8)


// Task No. # 6

function factorial(x) {

    if (x === 0) {
        return 1;
    }
    return x * factorial(x - 1);

}
console.log(factorial(5));



// Task No. # 7

var a = +prompt("Enter start number for counting")
var b = +prompt("Enter end number for counting")
for (i = a; i <= b; i++) {
    document.write(i)
document.write("<br />")
}


// Task No. # 8

function hyp() {
    var a = prompt("Enter Base")
    var b = prompt("Enter Perpendicular")
    var c = Math.sqrt((a * a) + (b * b))
    var d = a * b;
    document.write("Outer function: " + c)
    document.write("<br />")
    document.write("<br />")
    document.write("Inner function: " + d)
}
hyp();


// Task No. # 9

function area() {
    var width = prompt("Enter width")
    var height = prompt("Enter height")
    var area = width * height
    document.write("Area: " + area)
}
area();

// Task No. # 10

var str = prompt("Enter String");
var check = "";

for (var i = str.length - 1; i >= 0; i--) {
    check += str[i]
}
if (str === check) {
    alert(str + " " + "is palindrome")
}



// Task No. # 11

var name = prompt("enter string")
for (var i = 0; i <= name.length; i++) {
    if (name[i] === "") {
        var c = name.lenght
        var psss = name[0].toUpperCase()
        var nrm = name.slice(1, c)
        document.write("User input:" + " " + name)
        document.write("<br />")

        document.write("<br />")

        document.write("Title case:" + " " + psss + nrm)
    }
}




// Task No. # 12

var a = prompt("Enter a string")

function find_longest_word(str) {
    var array1 = str.match(/\w[a-z]{0,}/gi);
    var result = array1[0];

    for (var x = 1; x < array1.length; x++) {
        if (result.length < array1[x].length) {
            result = array1[x];
        }
    }
    return result;
}
document.write(find_longest_word(a));



// Task No. # 13


var a = prompt("Enter String");
var b = prompt("Enter a letter to be count");

function char_count(str, letter) {
    var letter_Count = 0;
    for (var position = 0; position < str.length; position++) {
        if (str.charAt(position) == letter) {
            letter_Count += 1;
        }
    }
    return letter_Count;
}

document.write(char_count(a, b));




// Task No. # 14


function calcGeometry(radius) {
    var circumference = Math.PI * 2 * radius;
    console.log("The circumference is " + circumference);
    var area = Math.PI * radius * radius;
    console.log("The area is " + area);
}
calcGeometry(5)




//................................................. Assingment 38 - 44.......................................................

// Task # 1

function power() {
    var a = prompt("Enter a number")
    var b = prompt("Enter a power")
    var c = Math.pow(a, b)
    alert(c)
}
power();



// Task # 2

var a = prompt("Enter Year")

function year() {
    if ((a === "2012") || (a === "2020") || (a === "2016")) {
        alert(a + " is a leap year")
    } else {
        alert(a + " is not a leap year")
    }
}

year();




// Task # 3



function defalut(a, b, c) {
    var e = (a + b + c) / 2;
    return e;
}


function area(e, a, b, c) {
    var area = e * (e - a) * (e - b) * (e - c)
    alert("area is " + area)
}

area(defalut(5, 4, 2), 5, 7, 8);




// Task # 4

var a = +prompt("Enter Sub1 marks")
var b = +prompt("Enter Sub2 marks")
var c = +prompt("Enter Sub3 marks")


function average(a, b, c) {
    var av = (a + b + c) / 300;
    return av;
}

function perc(av) {
    var per = av * 100;
    alert("Result is " + per + "%")
}

function mainFun() {
    perc(average(a, b, c))
}
mainFun();





// Task # 5

var name = prompt("Enter the name of fruit to find its index no.")

function indexfun() {
    var a = ["apple", "banana", "mango", "grapes", "peach"]

    for (var i = 0; i <= a.length; i++) {
        if (name === a[i]) {
            alert("index of " + name + "is " + i);
            break;
        } else("enter correct name")
    }
}
indexfun();



// Task # 6

var a = "lorem ipsum is what you use for dumy text"

function delVo() {
            var b = a.replace(/a|e|i|o|u/g ,"");
            alert(b)
}
delVo();

// Task # 7


var a="Pleases read this application and give me gratuity"
var count = 0;

function countVo(){

}



// Task # 8

var Dist = +prompt("Enter Distance between two areas(in km)")

function meter() {
    var meters = Dist * 1000;
    alert("Distance in meter is " + meters + " meters")
}
meter();

function feet() {
    var feets = Dist * 3280.84;
    alert("Distance in feet is " + feets + " meters")
}
feet();

function inch() {
    var inches = Dist * 39370.1;
    alert("Distance in inches is " + inches + " meters")
}
inch();

function centi() {
    var centiM = Dist * 100000;
    alert("Distance in centimeters is " + centiM + " meters")
}
centi();



// Task # 9


function overTime(){
var a=prompt("Enter full time you work!");
var b= a - 40;
if(a > 40){
alert(" Your overtime is "+b*12)
}else{
    alert("You work within working hours ;D")
}
}

overTime();



// Task # 10

var a = prompt("Enter amount to withdraw");
alert("You will have "+  Math.floor(a/100)+" hundred notes"+Math.floor((a%100)/50)+" fifty notes "+Math.floor(((a%100)%50)/10)+" ten notes and "+Math.floor((((a%100)%50)%10))+" rupees");





//.......................................................... Assignment 43 - 48...................................................


// Task # 1

Done


// Task # 2

Done



// Task # 3

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("mytable").deleteRow(i);
}


// Task # 4

function increase() {
    var a = document.getElementById("inc")
        // a.value = 0;
    a.value++;
}

function decrease() {
    var a = document.getElementById("inc")
        // a.value = 0;
    a.value--;
}






//......................................................... Assignment 49 - 52.....................................................

// Task # 1

function submitbtn() {
    var txt1 = document.getElementById("nam").value;
    document.getElementById('fill').value = txt1;

    var txt2 = document.getElementById("fnam").value;
    document.getElementById("fill2").value = txt2;

    var txt3 = document.getElementById("con").value;
    document.getElementById("fill3").value = txt3;

    var txt4 = document.getElementById("mail").value;
    document.getElementById("fill4").value = txt4;

    var txt5 = document.getElementById("Pass").value;
    document.getElementById("fill5").value = txt5;
}


// Task # 2


function expand() {
    var a = "<table> <thead> <tr> <th >#</th> <th >Name</th> <th >Quantity</th> <th>Date</th> </tr></thead> <tbody> <tr> <th >1</th> <td>Bread</td><td>10</td><td>12/04/2020</td></tr><tr> <th>2</th> <td>Cakes</td><td>12</td><td>12/04/2020</td></tr><tr> <th>3</th> <td>Juices</td><td>8</td><td>12/04/2020</td></tr><tr> <th >4</th> <td>Biscuits</td><td>12</td><td>12/04/2020</td></tr><tr> <th>5</th> <td>Jam</td><td>15</td><td>12/04/2020</td></tr><tr> <th>6</th> <td>Chips</td><td>9</td><td>12/04/2020</td></tr><tr> <th >7</th> <td>Bread</td><td>10</td><td>12/04/2020</td></tr><tr> <th>8</th> <td>Cakes</td><td>12</td><td>12/04/2020</td></tr><tr> <th>9</th> <td>Juices</td><td>8</td><td>12/04/2020</td></tr></tbody> </table>";
    document.getElementById("bakery").innerHTML = a;
}

// Task # 3

function submitbtn() {
    var name = document.getElementById("nam").value;
    var fname = document.getElementById("fnam").value;
    var cont = document.getElementById("con").value;
    var mai = document.getElementById("mail").value;
    var pass = document.getElementById("Pass").value;

    var tr = document.createElement('tr');

    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));
    var td6 = tr.appendChild(document.createElement('td'));

    td1.innerHTML = name;
    td2.innerHTML = fname;
    td3.innerHTML = cont;
    td4.innerHTML = mai;
    td5.innerHTML = pass;
    td6.innerHTML = '<button onClick="deleteRow(this)">Delete</button><button onClick="edit()">Edit</button>';

    document.getElementById("mytable").appendChild(tr)
}

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("mytable").deleteRow(i);
}

function edit(td){
selectedRow=td.parentElement.parentElement;
document.getElementById("nam").value=selectedRow.td1.innerHTML;
document.getElementById("fnam").value=selectedRow.td2.innerHTML;
document.getElementById("con").value=selectedRow.td3.innerHTML;
document.getElementById("mail").value=selectedRow.td4.innerHTML;
document.getElementById("Pass").value=selectedRow.td5.innerHTML;
}







//.......................................................... Assignment 53 - 57..............................................

// Task # 1 

var modal = document.getElementById("myModal");

var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}


// Task # 2

function zoomIn(){
    var a = document.getElementById("para");
    a.style.fontSize='30px';
}
function zoomOut(){
    var b = document.getElementById("para");
b.style.fontSize='20px';
}





//.............................................................. Assignment 58 - 67................................................

// Task # 1 PART(i)

var a = document.getElementById("dom");
console.log(a.childNodes[5])

// Task # 1 PART(ii)

var a = document.getElementById("dom")
console.log(a.childNodes[5].childNodes)


// Task # 1 PART(iii)

var a = document.getElementById("dom")
console.log(a.childNodes[5].childNodes)  


// Task # 1 PART(iv)

var a = document.getElementById("first-name")
a.value="mobeen"

// Task # 1 PART(v)

var a = document.getElementById("last-name")
a.value="malik"

var a = document.getElementById("email")
a.value="abc@gmail.com"



// Task # 2 PART(i)

 var a= document.getElementById("dom")
 console.log(a.childNodes[3].nodeType)                            // nodetype is "1"

// Task # 2 PART(ii)

var a=document.getElementById("dom")
console.log(a.childNodes[3].childNodes[5].nodeType)                               //lastname nodeTypeis "1"
console.log(a.childNodes[3].childNodes[5].childNodes[0].nodeType)              // lastname childnode nodetype is "3"

// Task # 2 PART(iii)
var a=document.getElementById("dom")
console.log(a.childNodes[3].childNodes[5].value="malik") 

// Task # 2 PART(iv)
var a=document.getElementById("dom")
console.log(a.childNodes[5].firstChild)
console.log(a.childNodes[5].lastChild)


// Task # 2 PART(v)
var a=document.getElementById("dom")
console.log(a.childNodes[5].childNodes[1].nextSibling)
console.log(a.childNodes[5].childNodes[1].previousSibling)

// Task # 2 PART(vi)
var a=document.getElementById("dom")
console.log(a.childNodes[3].childNodes[9].parentNode)
console.log(a.childNodes[3].childNodes[9].nodeType)                                     // nodeTypeis "1"
console.log(a.childNodes[3].childNodes[9].nodeType)                                    //  nodeTypeis "1"
console.log(a.childNodes[3].childNodes[9].nodeType)                                     // nodeTypeis "1"
console.log(a.childNodes[3].childNodes[9].nodeType)                                      //nodeTypeis "1"






// ..........................................................THE END........................................................................//