### 00_script_in_html.html
I've learned that there are two ways to use `<script>` tag inside an HTML document. First is inline, which holds JavaScript directly and runs it. Second is external, wherein you can load JavaScript from a separate file with `src`. Also, I've learned that the browser reads HTML from top to bottom. So `<script>` tag is placed at the bottom before the closing tag of the `<body>`, because the HTML elements needs to parse first before JS runs. And, we can add `type="module"` to a `<script>` tag to use JS modules, because it allows us to use `import` and `export` to share code between files. Lastly, while working on this part, I realized that this cannot be tested using `node` on the terminal because it is an HTML document. So, I just open the file in the browser instead.

### 01_base_syntax.js
In this part, I've learned that `console.log()` prints the values. Also, I thought that this would crash at first since I assumed they have the same name. But when I run it, I realized that JavaScript is case-sensitive, that's why it treats `myName` and `myname` as two separate and unrelated variables. Then, following the second half of part 1, I've learned about the naming rules for identifiers. A name should start with a letter, `$`, or `_`, otherwise, it will throw a SyntaxError because it didn't follow the naming rules. This includes a name that starts with a digit, uses hyphens, or a reserved word like `var`, `class`, `return`, etc. Though digits are allowed too (like `name1`, `name2`, etc.), just not at the start of a name. So, it is important to familiarize ourselves with these naming rules to avoid SyntaxError and pick names that are easy to read.

### 02_variables.js
Here, I've learned about the use of `typeof` to show the type of every value, whether it is a string, number, boolean, and more. And `==` (loose equality) converts the types before comparing, while `===` (strict equality) compares the type and value together without conversion. For example, `"2" == 2` returns `true` while `"2" === 2` returns `false`. That's why it is called "strict" equality, because the two values should strictly have the same type and value for it to be `true`.

### 03_functions.js
In this part, I've learned about functions and different ways to use them. Functions are useful because they package up reusable logic so you don't have to repeat them. There are different ways on how to write functions. First is the standard declaration or the traditional way, like `greet(name) {...}`. Second is the arrow function, like `square = (num) => {...}`. Plus, a function can also return an object containing multiple values, like `calculator()`. Because I've learned that a function can only return one thing, and it can be an object that bundle several results together. In addition to that, function names follow the same as variables naming rules (part 1), and the best practice is to start with a verb since function names should describe an action.

### 04_objects.js
I've learned that an object groups related data under one name. We can use a method which is a function stored as a property inside the object, and the `this` inside the method refers to the object itself. For example, in this exercise I created an `aboutMe` object, with name, age, course, and a method (`introduce()`) that uses `this` to access the name, age and course inside `aboutMe`.

### 05_arrays.js
In this part, I've learned more about arrays and methods that can be used for this. The `push()` method adds one or more elements at the end of an array. The `shift()` removes an element from the front of an array. The `for...of` goes through the values or items directly inside an array. The `map()` returns a brand-new array, which leaves the original untouched. So, if you log `favoriteFoods`, for example, it will still show original array, not the new version (for example "I like ___" version).

### 06_control_structures.js
I've learned that `if...else if...else` is a conditional statement that checks the conditions from top to bottom, and it just runs or outputs the first true. The `for` loop is used only when you know how many times to repeat. Like in the exercise, the `for` loop is used to iterate numbers 1 to 5, there is an exact number on how many times it should repeat which is 5. On the other hand, the `while` loop is used if you only want to check the condition, not how many it should repeat. For example, the `count < 3` inside the while loop in the exercise tells us that while the `count` is less than 3, it should print "Hello."

### 07_dom.html
I've learned that DOM is the live version of the page in the browser. JavaScript can find an element and change it. For example, `document.getElementById` finds the `"changeColorBtn"` element from the HTML document, then change it directly. Also, the `prompt()` asks the user to type something, like the "Type a background color of your choice:" on the exercise I did. And `setTimeout()` runs code after a delay, like the paragraph that updates after 2 seconds.

### 08_essential_features.js
I've learned that `map()` is used to transform an array. I also learned that destructuring is used to pull values out of an object ot array, while the spread operator copies an array and adds more items.

### 09_tricky_parts.js
I've learned the three tricky ideas of JavaScript here. The difference between `==` and `===` (part 2), `undefined` means a variable has no value yet, while `null` means empty on purpose. One thing I find more tricky is how `this` works on a regular and an arrow function. But I later realized that `this` in a regular function depends on how it is called. For example, in `student.regularMethod()`, the student is the one who called the function. While an arrow function borrows `this` from where it was written, so in this exercise it outputs `undefined` because there is no avaible `this` in its scope. I also learned that the `=` on an array only copies the reference, meaning they both point to the same array. So when I changed the copied version, the original array also changes. But, spread (`...`) makes a new array, so the the changes to the copied version didn't affect the original array.

### 10_let_const.js
I've learned that `let` can be changed later, but `const` can't, that's why reasigning a `const` throws an error. The `var` is the old way. It ignores block scope, so it should be avoided. I also learned that using `let` and `const` makes the code easier to understand and helps prevent unexpected changes in variables.

### 11_arrow_functions.js
I've learned that a traditional function can be written as an arrow function. Using implicit return, the `{}` and `return` are no longer needed, like `const square = n => n * n`. An arrow function can also have no parameters, like `const sayHi = () => {...}`, or use only one parameter without parentheses, like `const greet = name => "Hello there! I'm " + name + "!"` in the exercise I did, which is also an implicit return.

### 12_destructuring.js
I've learned that destructuring takes values out of an object or array and puts them straight into variables. It also works in a function's parameters, like `function printName({ name })`. This is useful when you want to take specific values from an object or array.

### 13_spread_rest.js
I've learned that spread and rest operator use the same `...` symbol, but they have different functionalities. The spread operator, which was also explained in part 8 and 9, copies items into a new array or object without changing the original. While rest operator is used in function parameters to collect function arguments into an array. In this exercise, I used `reduce()` method to add or sum up the arguments.

### 14_classes_inheritance.js
I've learned that a class is a template for making objects. The `extends` lets a class inherit from another, so `Student` gets everything `Person` has plus its own `study()` method in the exercise I did. I also learned that class names use PascalCase, so it should be `Person`, not `person`.

### 15_modules_export.js
I've learned that a file can have one default export and many named exports. This allows us to share code between files (part 0). This also avoids putting everything in one script, making the code more organized and easier to manage.

### 16_modules_import.js
I've learned that `import` brings in what what another file exports. I also learned that a default import doesn't need curcly braces, but a named import needs it and should match the exported name exactly. I realized that a named import is useful when you want to import a specific exported value from another file, like `import { userInfo } from "./15_modules_export.js"`.

### 17_logical_operators.js
I've learned that every value can be either truthy or falsy. The falsy values are `false`, `0`, `""`, `null`, `undefined` and `NaN`, everything else (`"0"`, `[]` and `{}`) is truthy. I realized that `&&` and `||` return the actual values not just whether they are true or false. I find `&&` and `||` tricky. But, I later learned that `&&` returns the first falsy value it finds, and `||` returns the first truthy one.

### 18_ternary_nullish.js
I've learned that ternary `condition ? a : b` is a short version of `if...else` (part 6) that gives a value. I've also learned that `?.` safely reads a nested property and returns `undefined` instead of crashing. Lastly, `??` gives a fallback only for `null` or `undefined`, while `||` also replaces `0` and `""` since they are falsy and get overriden.

### 19_strings_numbers.js
I've learned about the built-in methods of strings. The `trim()` method removes whitespaces, `split()` divides string, `toUpperCase()` converts the string to uppercase, `includes()` checks if the raw string has the specified value, and `slice()` gets a portion of the string. I realized that template literals with `${}` are the cleanest way to build a string. For numbers, I learned that `parseInt()` converts a string into an integer, `toFixed()` rounds decimals, and `isNaN()` checks whether the conversion failed.

### 20_array_methods.js
I've learned that arrays also has built-in methods more than `map()`. The `filter()` method returns elements meets a condition, `find()` searches for the element that meets a condition, `some()`checks if at least one meets the condition (not all), `every()`checks if all elements meets the condition, and `sort()` organize or sorts the elements. These methods are easy to familiarize since their names already says what they do, just like the build-in methods of strings.

### 21_errors_json.js
I've learned that risky codes (those that might fail) can be wrapped in `try`, and `catch` will run instead of crashing if it fails. You can also `throw` your own error. These statements are very useful to avoid crashing the whole program, they handle the errors that might occur and make sure that it will not cause a problem in your code. I've also learned that JSON is just a text, and it is needed so you can get the data from servers or local storage. You can use `JSON.stringify()` method to turn an object into that text, and `JSON.parse()` to turn it back into an object.

### 22_async_javascript.js
I've learned that a callback is a function, that will be run later, inside another function. One of the example is the `setTimeout` which runs after a delay. This is the old way and can cause a callback hell, so JavaScript introduced a new syntax that will avoid that incident. A Promise and async/await is a cleaner way to handle asynchronous operations and can help avoid callback hell. The `async` or `await` syntax lets you write that code so it reads from top to bottom. This allows developers to write asynchronous code in a way that reads more like synchronus code instead of nesting callbacks, which is more complicated. This is also more understandable and maintainable.

### 23_closures_scope.js
I've learned that `let` and `const` are block-scoped, meaning they only exist inside `{}` they were declared in. While, `var` on the other hand, is function-scoped. I've also learned that a closure is a function that remembers variables from where it was created, even after the outer function finishes. In this exercise, the returned function still remembers `count` even though `createCounter()` has finished running. The interesting part is that `count` is private since it is declared inside `createCounter()`. The returned function is the way to access and change `count`, like when I create `const drinksCounter = createCounter()`. The same goes for  `const studyCounter = createCounter()`, though they have their own separate `count`, so they are independent from each other.