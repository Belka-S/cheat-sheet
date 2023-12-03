# JavaScript

1. ### What is JavaScript?

   JavaScript is a programming language used to create interactive and dynamic web pages, as well as
   to create more complex applications on the client and server side.

2. ### What is the difference between null and undefined in JavaScript?

   Null represents a deliberate non-value or absence of any object value, while undefined represents
   a lack of value or an uninitialized variable.

3. ### What is the difference between == and === in JavaScript?

   The double equals (==) compares the value of two variables, while the triple equals (===)
   compares both the value and the data type of two variables.

4. ### What is the difference between let, const, and var in JavaScript?

   The var keyword is used for variable declaration in older versions of JavaScript, while let and
   const were introduced in ES6. Var has a function-level scope, while let and const have
   block-level scope. Additionally, const variables cannot be reassigned after being declared, while
   let variables can be.

5. ### How do you convert a string to a number in JavaScript?

   You can use the `Number()` or `parseFloat()` functions to convert a string to a number in
   JavaScript.

6. ### What is the purpose of the array slice method?

   The `slice()` method returns the selected elements in an array as a new array object. It selects
   the elements starting at the given start argument, and ends at the given optional end argument
   without including the last element.

7. ### What is the purpose of the array splice method?

   The `splice()` is an array method in JavaScript that allows you to modify an array by adding,
   removing, or replacing elements. It takes two required parameters: the index at which to start
   making changes to the array, and the number of elements to remove. It also has an optional
   parameter for adding one or more elements to the array.

8. ### What is the difference between slice and splice?

   | slice                                         | splice                                           |
   | --------------------------------------------- | ------------------------------------------------ |
   | Doesn't modify the original array (immutable) | Modifies the original array (mutable)            |
   | Returns the subset of original array          | Returns the deleted elements as array            |
   | Used to pick the elements from array          | Insert, replace or delete elements to/from array |

9. ### What are arrow function?

   Arrow functions are a shorthand syntax for writing function expressions in JavaScript. They use
   the `=>` syntax to separate the function parameters from the function body and have a concise
   syntax that makes them ideal for writing short, one-liner functions.

10. ### What are first class function?

    First-class functions means when functions are treated like any other variable. This means that
    functions can be assigned to variables, passed as arguments to other functions, and returned
    from functions.

11. ### What is a pure function?

    A pure function is a function that, given the same input, will always return the same output and
    does not have any observable side effects.

12. ### What is the scope chain in JavaScript?

    The scope chain is how JavaScript looks for variables. When looking for variables through the
    nested scope, the inner scope first looks at its own scope.

13. ### What is a higher order function?

    A higher order function is a function that takes one or more functions as arguments and/or
    returns a function as its result.

14. ### What is hoisting?

    Hoisting is a behavior in JavaScript where variable and function declarations are moved to the
    top of their respective scopes during compilation or interpretation, before the code is actually
    executed. This means that you can use a variable or function before it has been declared, but
    only if it is declared using the `var` or `function` keywords. However, only the declarations
    themselves are hoisted, not their values or assignments.

15. ### What are modules in JavaScript?

    Modules are a way of organizing code into separate files or components that can be reused in
    different parts of an application. Modules allow you to encapsulate data and functionality,
    making your code more organized and easier to maintain.

16. ### What is a closure in JavaScript?

    A closure is created when a function is defined inside another function and the inner function
    is returned from the outer function. It is the combination of a function bundled together
    (enclosed) with references to its surrounding state (the lexical environment). In other words, a
    closure gives you access to an outer function's scope from an inner function.

    ```
    function outer() {
      var name = "John";
      function inner() {
        console.log("Hello " + name);
      }
      return inner;
    }

    var greeting = outer();
    greeting(); // Output: "Hello John"
    ```

17. ### What is callback in JavaScript?

    A callback is a function that is passed as an argument to another function and is intended to be
    called when the first function has completed its task. The primary use of callbacks in
    JavaScript is to handle asynchronous operations, such as making an AJAX request or waiting for a
    user to click a button.

18. ### What is a callback hell in JavaScript?

    Callback hell is a term used to describe a situation where multiple callbacks are nested within
    one another, making the code difficult to read, debug, and maintain. It often arises when
    dealing with asynchronous operations, such as making HTTP requests or working with databases.

19. ### What is memoization?

    Memoization is a technique used in computer science to speed up the execution of functions by
    caching the results of expensive function calls and returning the cached result when the same
    inputs occur again.

20. ### What is the purpose of the "use strict" statement in JavaScript?

    The "use strict" statement is used to enable strict mode in JavaScript, which helps to prevent
    common errors and make the code more secure. It prevents things like use of undeclared variable,
    use of keywords as variable name, using duplicate property names in objects, etc.

21. ### What is a cookie in JavaScript?

    A cookie is a small data file that a website stores on a user's computer or device. Cookies are
    commonly used to remember user preferences and login information, and to track user activity on
    a website. Cookies can also have an expiration date, after which they are automatically deleted.

22. ### What are the differences between cookie, local storage and session storage?

    | Feature                           | Cookie                         | Local storage    | Session storage     |
    | --------------------------------- | ------------------------------ | ---------------- | ------------------- |
    | Accessed on client or server side | Both server-side & client-side | client-side only | client-side only    |
    | Lifetime                          | As configured (Expires option) | until deleted    | until tab is closed |
    | SSL support                       | Supported                      | Not supported    | Not supported       |
    | Maximum data size                 | 4 kB                           | 5 mB             | 5 mB                |

23. ### What is AJAX?

    AJAX (Asynchronous JavaScript and XML) is a technique to create more dynamic and interactive web
    pages. It allows a web page to update content without requiring the page to reload. With AJAX,
    data is sent to and from the server in the background, using JavaScript and other data formats
    like JSON.

24. ### What is the difference between synchronous and asynchronous code in JavaScript?

    Synchronous code executes tasks in sequence and waits for each task to complete before moving
    on, while asynchronous code can execute multiple tasks simultaneously and doesn't wait for them
    to complete before moving on to the next task.

25. ### What are promises in JavaScript?

    Promises in JavaScript are a way of handling async operations. They help us write async code
    that looks and behaves like sync code, making it easier to read and maintain. Promises have
    three states: pending, fulfilled, and rejected.

26. ### Who created JavaScript?

    JavaScript was created by Brendan Eich in 1995.

27. ### What is the difference between async/await and promises in JavaScript?

    Both async/await and Promises are used to handle asynchronous operations in JavaScript. However,
    async/await is built on top of Promises which makes asynchronous code more readable, easier to
    write and reason about.

28. ### How do you handle errors in JavaScript?

    In JavaScript, errors can be handled using try-catch blocks. The code that might generate an
    error is enclosed in a try block, and if an error occurs, the catch block is executed. The catch
    block can then handle the error, such as by logging it to the console or displaying an error
    message to the user.

29. ### What is NaN in JavaScript?

    NaN (Not A Number) is a special value in JavaScript that represents a situation where a value is
    not a valid number. One important thing to note is that NaN is not equal to any value, including
    itself. We can use the `isNaN()` function to check whether a value is NaN or not.

30. ### How do you find operating system details in JavaScript?

    In JavaScript, you can find the operating system details of the user by accessing the
    `navigator` object, which contains information about the user's browser and environment.

31. ### What is the Document Object Model (DOM)?

    The DOM (Document Object Model) is a programming interface that represents the structure and
    content of an HTML document as a tree-like structure of nodes. It allows developers to access
    and manipulate the content and structure of a web page using programming languages like
    JavaScript.

32. ### What is the difference between the DOM and HTML?

    HTML is a markup language used to define the structure and content of a web page, while the DOM
    is an interface that represents that structure and content as a tree-like structure. The DOM
    provides a way to access and manipulate the content and structure of a web page, while HTML is
    simply a static markup language.

33. ### What is the difference between the DOMContentLoaded event and the load event?

    The DOMContentLoaded event is fired when the initial HTML document has been completely loaded
    and parsed, while the load event is fired when all resources on the page, including images and
    scripts, have finished loading.

34. ### What is the difference between innerHTML and innerText?

    The main difference between `innerText` and `innerHTML` in the DOM is that `innerText` returns
    only the visible text content of an element, excluding any HTML tags, while `innerHTML` returns
    the complete HTML content of an element, including any nested elements and tags.

35. ### What is the role of the Window object in the DOM?

    The Window object in the DOM represents the browser window or tab that displays the web page. It
    provides methods and properties for controlling and manipulating the browser window.

36. ### What is a DOM node in JavaScript?

    A DOM node is a fundamental unit that represents an element, attribute, or text content in a web
    page. Every node has a relationship with other nodes, such as a parent, child, or sibling. The
    parent node contains the child nodes, and the child nodes can have siblings that share the same
    parent.

37. ### How do you prevent default behavior of an event in the DOM using JavaScript?

    To prevent the default behavior of an event in the DOM using JavaScript, you can use the
    preventDefault() method. This method is called on the event object that is passed to the event
    handler function.

38. ### What is event propagation?

    Event propagation in the DOM refers to how events move or flow through different elements on a
    webpage. When an event happens on an element, like a click, it can travel to its parent elements
    and eventually to the whole document. This is called event bubbling. Alternatively, events can
    also travel from the document to the element that triggered the event, which is called event
    capturing.

39. ### What is call stack in JavaScript?

    The call stack in JavaScript is a data structure that stores information about the currently
    executing functions. When a function is called, a new frame is added to the top of the stack,
    and when the function completes, its frame is removed from the stack. This helps the JavaScript
    engine keep track of where it is in the execution of a script and manage the order in which
    functions are called.

40. ### What is an event loop?

    The event loop in JavaScript handles asynchronous operations by queuing them up and processing
    them one by one in a non-blocking way. It checks the event queue continuously and processes the
    oldest operation first. When an operation is completed, its callback function is executed.

41. ### What is BOM?

    BOM stands for Browser Object Model. It is a set of APIs provided by the browser that allow
    JavaScript to interact with the browser window.

42. ### What is the use of setTimeOut in JavaScript?

    `setTimeout()` is a built-in function in JavaScript that allows you to schedule a function to be
    executed after a specified amount of time has elapsed.

43. ### What is the use of setInterval in JavaScript?

    `setInterval()` is a function in JavaScript that allows you to repeatedly execute a given
    function at a specified interval. It works by calling the function repeatedly with a specified
    time delay between each call, until the interval is cancelled.

44. ### What is the purpose of clearTimeout method and clearInterval?

    The clearTimeout method is a built-in function in JavaScript that is used to cancel a timer
    created by the setTimeout function and clearInterval method is a built-in function in JavaScript
    that is used to cancel a recurring timer created by the setInterval function.

45. ### How do you redirect new page in JavaScript?

    To redirect to a new page using JavaScript, you can use the `window.location` object's `assign`
    or `replace` methods. Example:

    ```
    // Redirect to a new page
    window.location.assign("https://www.example.com");

    // Redirect to a new page and replace the current page in the browser history
    window.location.replace("https://www.example.com");
    ```

46. ### What is a JavaScript object?

    JavaScript object is a non-primitive data-type that allows you to store multiple collections of
    data. It is a container of key-value pairs in which value may be a variable, function or object
    itself.

47. ### What is the difference between dot notation and bracket notation when accessing properties of an object?

    Dot notation only allows static keys while bracket notation accepts dynamic keys. Static key
    here means that the key is typed directly, while dynamic key here means that the key is
    evaluated from an expression.

48. ### What is an object literal in JavaScript?

    Object literal is a syntax for creating object in JavaScript in which property and method are
    inside of curly braces separated by comma. We assign a variable to an object in object literal.

49. ### How would you clone an object in JavaScript?

    There are four ways to clone an object in JavaScript. They are:

    1. Use the spread operator.
    2. Call the Object.assign() function.
    3. Use JSON parsing.
    4. Use the structuredClone() function.

    ```
    const data = { name: "Alice", age: 26 }
    // 1
    const copy1 = { ...data }
    // 2
    const copy2 = Object.assign({}, data)
    // 3
    const copy3 = JSON.parse(JSON.stringify(data))
    // 4
    const copy4 = structuredClone(data)
    ```

50. ### What is a JSON?

    JavaScript Object Notation (JSON) is a standard text-based format for representing structured
    data based on JavaScript object syntax. It is commonly used for transmitting data in web
    applications .

51. ### What is Class in JavaScript?

    Class is a template that can be used to create objects that share the same properties and
    methods. When an object is created from a class, it is called an instance of that class.

52. ### What is a constructor in JavaScript?

    A constructor is a special method that is used to create and initialize objects that are based
    on a class. It's like a blueprint for creating new objects. The constructor method is called
    automatically when a new object is created from a class, using the `new` keyword. It's used to
    set the initial state of the object by assigning values to its properties.

53. ### What is the difference between a static method and an instance method in a class?

    An instance method is a method that can be called on an instance of a class, and it can access
    and modify instance-specific data, like properties of the object. A static method, on the other
    hand, is a method that belongs to the class itself, not to any instance of the class. It can
    only access class-level data and can be called on the class itself, rather than on an instance
    of the class.

54. ### What is "this" in JavaScript Classes?

    In classes, `this` refers to the current object that is being worked on. It's like a placeholder
    for the object. For example, if you have a class that creates `Person` objects, and you want to
    give each person a `name`, you can use `this.name` to refer to the `name` property of the
    current `Person` object that is being created or accessed. So, `this` is just a way to access
    the current object's properties and methods inside a class.

55. ### What are the benefits of using classes in JavaScript?

    There are several benefits of using classes in JavaScript. Some of them are:

    1. Encapsulation: Classes allow you to encapsulate related data and behavior into a single
       object, making it easier to manage and organize your code.

    2. Inheritance: Classes support inheritance, which allows you to create subclasses that inherit
       properties and methods from a parent class. This can help you avoid duplicating code and make
       your code more modular and reusable.

    3. Code reusability: With classes, you can create objects that share common properties and
       behavior. This can help you avoid writing the same code over and over again, making your code
       more efficient and easier to maintain.

    4. Readability: Classes provide a clean and organized way to structure your code, which can make
       it easier to read and understand.

56. ### Can you explain the concept of method overriding in a class in JavaScript?

    Method overriding is a concept in JavaScript where a subclass can provide its own implementation
    of a method that is already defined in the parent class. To override a method in a subclass, you
    simply define a method with the same name as the method in the parent class.

57. ### What is composition in classes in JavaScript?

    Composition in classes is a technique of building complex classes by combining smaller, more
    focused classes that represent specific behaviors or properties. Composition is a flexible and
    powerful technique for creating modular, reusable code in JavaScript.

58. ### What is inheritance in classes in JavaScript?

    Inheritance in classes is the ability to create a new class based on an existing one. The new
    class inherits all the properties and methods of the existing class, and can also add new
    properties and methods or override existing ones.

59. ### What is the extends keyword in JavaScript, and how is it used for inheritance?
    The `extends` keyword is used in JavaScript to create a new class that inherits from an existing
    class. It is used in the class declaration syntax, like this:
    ```
    class ChildClass extends ParentClass {
     // ChildClass methods and properties
    }
    ```
60. ### What is the purpose of super() in JavaScript classes?

    The `super()` method in JavaScript is used to call a constructor of the parent class from within
    a subclass. It allows a subclass to inherit and use functionality from the parent class, while
    also adding its own functionality.

61. ### What is a private class field in JavaScript?

    A private class field in JavaScript refers to a class field that is only accessible within the
    class in which it is defined. It cannot be accessed or modified from outside the class, not even
    by instances of the class.

62. ### Can you explain the concept of encapsulation in JavaScript classes?

    Encapsulation is a concept in object-oriented programming that refers to bundling data and
    methods within a single unit, such as a class, and hiding the internal details of the class from
    the outside world. This makes the code more secure and maintainable.

63. ### What is get keyword in JavaScript classes?

    The `get` keyword is used to define a method that retrieves the value of a property. When the
    property is accessed, the `get` method is automatically called, and its return value is used as
    the property's value.

64. ### What is set keyword in JavaScript classes?

    The `set` keyword is used to define a method that sets the value of a property. When the
    property is assigned a value, the `set` method is automatically called, and it can perform any
    necessary validation or processing before setting the property's value.

65. ### Can you explain the concept of instance variables in a class in JavaScript?

    Instance variables are properties of an object that are specific to an instance of a class. When
    we create a new instance of a class using the `new` keyword, each instance has its own set of
    instance variables that are separate from other instances.

66. ### What is the difference between a class and a function in JavaScript?

    Functions and classes are both important tools in JavaScript for defining reusable code, but
    they serve different purposes. Functions are used to encapsulate logic and perform specific
    tasks, while classes are used to create objects with shared properties and methods. Knowing when
    to use each one depends on the specific problem being solved and the design of the application.

67. ### What is abstract class in JavaScript?

    An abstract class is a blueprint for creating other classes that share some common properties
    and methods. However, unlike regular classes, abstract classes cannot be directly instantiated.
    Instead, they are meant to be extended or subclassed by other classes.

68. ### How would you convert an object to a JSON string in JavaScript, and vice versa?

    In JavaScript, you can convert an object to a JSON string using the `JSON.stringify()` method,
    and you can convert a JSON string back to an object using the `JSON.parse()` method.

69. ### What is the difference between a class and an interface in JavaScript?

    Classes and interfaces are both used in JavaScript to define object types, but serve different
    purposes. A class defines a blueprint for creating objects that have properties and methods,
    while an interface describes the shape of an object and enforces a contract between different
    parts of a program. Classes define what an object is, while interfaces define what an object can
    do.

70. ### Can you explain the concept of polymorphism in classes in JavaScript?

    Polymorphism in JavaScript classes means that different objects can share the same methods, even
    if they belong to different classes. This allows us to reuse code across multiple classes and
    write more flexible, maintainable code.

71. ### What is prototype in JavaScript?

    A prototype is an object that contains properties and methods that can be shared by all objects
    created with the same constructor function. It helps to reduce code duplication and makes your
    code more efficient.

72. ### What is prototype chain?

    Every object in JavaScript has a built-in property, which is called its prototype. The prototype
    is itself an object, so the prototype will have its own prototype, making what is called a
    prototype chain. The chain ends when we reach a prototype that has null for its own prototype.

73. ### How does prototypal inheritance work in JavaScript?

    Prototypal inheritance allows objects to inherit properties and methods from their parent
    objects. When an object is created with a constructor function, its prototype is automatically
    set to the prototype object associated with that constructor function. Any properties or methods
    defined in the prototype object are shared by all objects created with that constructor
    function. When an object tries to access a property or method, JavaScript first looks for it in
    the object itself. If it's not found, it looks up the prototype chain until it finds the
    property or method.

74. ### What is the difference between prototypal inheritance and classical inheritance?

    The main difference between prototypal and classical inheritance is that prototypal inheritance
    allows objects to inherit properties and methods directly from other objects, without the need
    for classes or constructors. This makes the code more flexible and easier to maintain. Classical
    inheritance relies on classes and constructors to define the inheritance hierarchy, which can
    provide better organization and structure but is more rigid and requires more upfront planning.

75. ### What is the difference between an object's prototype and its constructor function?

    | Prototype                                                                         | Constructor Function                                                   |
    | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
    | An object that is shared by all instances created by the constructor function     | A function that is used to create new objects                          |
    | Used to define properties and methods that are shared by all instances            | Used to define properties and methods that are unique to each instance |
    | Accessed using the `prototype` property of the constructor function               | Accessed using the `new` keyword followed by the constructor function  |
    | Modifying the prototype affects all instances created by the constructor function | Modifying the constructor function does not affect existing instances  |

76. ### How do you add properties and methods to an object's prototype in JavaScript?

    We can add properties and methods to an object's prototype by using the constructor function's
    prototype property. To add a property, simply assign a value to a property on the prototype
    object. To add a method, define a function and assign it to a property on the prototype object.

    ```
    MyConstructor.prototype.myProperty = "some value";
    ```

77. ### What is the difference between `Object.prototype` and `Object.__proto__` in JavaScript?

    `Object.prototype` is the object that provides default properties and methods that all objects
    in JavaScript inherit from. `Object.__proto__` is the object that the `Object` constructor
    itself inherits from, and it provides the properties and methods that are specific to the
    `Object` constructor.

78. ### How do you check if an object inherits from a specific prototype in JavaScript?

    We can check if an object inherits from a specific prototype by using the `isPrototypeOf()`
    method. This method can be called on a prototype object to check if it appears anywhere in the
    prototype chain of another object. If the prototype object does appear in the prototype chain of
    the other object, `isPrototypeOf()` will return `true`. Otherwise, it will return `false`.

    ```
    // Check if person inherits from the Object.prototype
    console.log(Object.prototype.isPrototypeOf(person)); // Outputs true if it inherits or else false
    ```

79. ### How do you override a method in an object's prototype in JavaScript?

    We can override a method in an object's prototype by redefining the method on the prototype. To
    do this, you simply assign a new function to the existing property on the prototype. When you do
    this, any objects that were created using the constructor function whose prototype you are
    modifying will now have the new version of the method available to them.

80. ### What is the difference between Object.create() and new Object() in JavaScript?

    The main difference between `new Object()` and `Object.create()` is that `new Object()` creates
    a new object from scratch, while `Object.create()` creates a new object that inherits from an
    existing object.

81. ### What is a regular expression(regex)?

    A regular expression, or regex for short, is a set of characters that form a pattern. This
    pattern is used to search for and match specific sequences of text.

82. ### What is the difference between a regular expression and a string?

    A regular expression is a pattern used to match against a string. A string is simply a sequence
    of characters.

83. ### What is the syntax for creating a regular expression pattern?

    The syntax for creating a regular expression pattern consists of a combination of characters,
    special characters, and operators that define the pattern to match.

    ```
    // Define the regex pattern
    const pattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
    ```

84. ### What is a character class in regular expressions?

    A character class in regular expressions is a set of characters that can be matched in a single
    position in the text. It is denoted by enclosing the characters in square brackets [].

    ```
    // Define the regex pattern using a character class
    const pattern = /[aeiou]/;
    ```

85. ### What is the difference between the asterisk () and the plus sign (+) in regular expressions?

    In regular expressions, the asterisk (\*) matches zero or more occurrences of the preceding
    character, while the plus sign (+) matches one or more occurrences of the preceding character.

    For example, if we want to match the letter "a" followed by zero or more "b" characters, we
    would use the asterisk in our regular expression like this: /ab\*/. This would match strings
    like "a", "ab", "abb", "abbb", and so on.

    On the other hand, if we want to match the letter "a" followed by one or more "b" characters, we
    would use the plus sign in our regular expression like this: /ab+/

86. ### How do you use the question mark (?) in regular expressions?

    The question mark (?) is a metacharacter used in regular expressions to indicate that the
    preceding character or group of characters is optional. It means that the preceding character or
    group of characters may appear zero or one time. For example, the regular expression "colou?r"
    will match both "color" and "colour".

87. ### What is the purpose of backslashes in regular expressions?

    Backslashes are used in regular expressions to indicate that the following character has a
    special meaning. For example, the regular expression "\d" matches any digit character, while the
    regular expression "\s" matches any whitespace character. If you want to match a literal
    backslash character, you need to escape it by using two backslashes.

88. ### How do you specify a range of characters in a character class?

    In a character class, you can specify a range of characters by using a hyphen (-) between two
    characters. For example, the regular expression "[a-z]" matches any lowercase letter from "a" to
    "z". Similarly, the regular expression "[0-9]" matches any digit character from "0" to "9". Note
    that the range is inclusive, so the characters at both ends are included in the match.

89. ### What is the difference between a greedy and a non-greedy match in regular expressions?

    In regular expressions, a greedy match will match as much as possible while still allowing the
    overall pattern to match. A non-greedy match, on the other hand, will match as little as
    possible while still allowing the overall pattern to match. Greedy matching is the default
    behavior in most regex engines. To make a match non-greedy, you can use the question mark (?)
    after the quantifier. For example, the regular expression ".\*?" will match as few characters as
    possible.

90. ### How do you use the pipe (|) operator in regular expressions?

    The pipe (|) operator is used in regular expressions to match either one pattern or another. For
    example, the regular expression "cat|dog" will match either "cat" or "dog". You can also use
    parentheses to group patterns together when using the pipe operator. For example, the regular
    expression "(red|green|blue) car" will match "red car", "green car", or "blue car".

91. ### What is the purpose of the caret (^) and dollar sign ($) characters in regular expressions?

    The caret (^) and dollar sign ($) characters in regular expressions are used to match the
    beginning and end of a string, respectively.

92. ### What are some common use cases for regular expressions?

    Common use cases for regular expressions include text parsing, search and replace operations,
    and input validation.

93. ### How do you match a specific number of characters in a regular expression?

    To match a specific number of characters in a regular expression, you can use quantifiers such
    as {n} to match exactly n occurrences of a pattern, or {n,m} to match between n and m
    occurrences.

94. ### How do you match a specific character that has a special meaning in a regular expression?

    To match a specific character that has a special meaning in a regular expression, you can use an
    escape character before the special character.

95. ### How do you use lookarounds in regular expressions?

    Lookarounds in regular expressions allow you to look ahead or behind the current position in the
    string without including the matched text in the result. Positive lookaheads (?=) and negative
    lookaheads (?!), as well as positive lookbehinds (?<=) and negative lookbehinds (?<!), are the
    four types of lookarounds that can be used.

96. ### What is the `window.location` object in JavaScript?

    The `window.location` object is a built-in object in JavaScript that contains information about
    the current URL of the webpage. It is a property of the global `window` object and provides
    several properties and methods to work with URLs.

97. ### What are the properties of the `window.location` object?

    Some of the properties of the window.location object are:

    `href` : returns the entire URL of the current page <br/> `protocol` : returns the protocol of
    the URL (http:, https:, etc.) <br/> `host` : returns the hostname and port number of the URL
    <br/> `hostname` : returns the hostname of the URL <br/> `port` : returns the port number of the
    URL <br/> `pathname` : returns the path and filename of the URL <br/> `search` : returns the
    query string of the URL <br/> `hash` : returns the anchor part of the URL <br/>

98. ### How do you redirect to another page using JavaScript's `window.location` object?

    We can redirect to another page using the `assign()` method of the `window.location` object.

    ```
         window.location.assign("https://www.google.com");
    ```

99. ### How do you reload the current page using JavaScript's `window.location` object?

    You can reload the current page using the reload() method of the window.location object.

    ```
    window.location.reload();
    ```

100. ### How do you get the value of a query parameter from the URL using JavaScript's `window.location` object?

     You can get the value of a query parameter from the URL using the `searchParams` property of
     the `window.location ` object. For example, to get the value of a query parameter named `id`.

     ```
     const id = new URLSearchParams(window.location.search).get("id");
     ```

101. ### What is the Date object in JavaScript?

     The Date object in JavaScript represents a date and time value, which can be used to perform
     various operations on dates and times.

102. ### How do you format a date in JavaScript?

     You can format a date in JavaScript using the toLocaleDateString() method of the Date object,
     which returns a string representation of the date in the specified locale.

     ```
     let date = new Date();
     let formattedDate = date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
     console.log(formattedDate); // Output: "05/14/2023"
     ```

103. ### How do you compare two dates in JavaScript?

     You can compare two dates in JavaScript using the <, >, <=, >=, ==, and != operators, which
     compare the numeric values of the Date objects (i.e., their timestamps).

     ```
     let date1 = new Date('2023-05-14');
     let date2 = new Date('2023-05-15');

     if (date1 < date2) {
       console.log('date1 is earlier than date2');
     } else {
       console.log('date1 and date2 are equal');
     }
     ```

104. ### How do you get the current timestamp in JavaScript?

     You can get the current timestamp in JavaScript using the `getTime()` method of the Date
     object, which returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.

105. ### How do you add or subtract days to a date in JavaScript?

     You can add or subtract days to a date in JavaScript using the `setDate()` method of the Date
     object, which allows you to set the day of the month for a given date.

     ```
     let date = new Date();
     date.setDate(date.getDate() + 3);
     console.log(date); // Output: the date 3 days from now
     ```

106. ### What is iterator in JavaScript?

     An iterator is an object that provides a way to access elements of a collection or a custom
     data structure in a sequential manner. It allows you to loop over the elements one at a time,
     retrieving them on demand.

     The most important method is next(), which is responsible for returning the next element in the
     sequence. When you call next() on an iterator, it returns an object with two properties: value,
     representing the current element, and done, indicating whether there are more elements or if
     the iteration is complete.

107. ### What is decorator in JavaScript?

     A decorator is a design pattern that allows you to modify the behavior of an object or a
     function by wrapping it with another function. It provides a way to add new functionality or
     modify existing functionality dynamically, without changing the original code.

108. ### What is babel?

     Babel is a tool that helps you write modern JavaScript code while ensuring compatibility with
     older environments by transforming or transpiling that code into an older JavaScript version.
     It allows developers to take advantage of new language features without worrying about browser
     compatibility issues.

109. ### What is optional chaining?

     Optional chaining is a js feature by which using the `?.` operator, you can directly access
     nested properties or call nested functions, and if any part of the chain is null or undefined,
     the expression short-circuits and returns undefined instead of throwing an error.

110. ### What is throttling?

     Throttling is a technique used in JavaScript to control the rate at which a particular function
     or code block is executed. It ensures that the function is called at a maximum frequency or a
     specified interval, preventing it from being invoked too frequently.

111. ### What is debouncing?

     Debouncing in JavaScript is a way to control how often a function gets called when there are
     frequent events happening, like typing or scrolling. This can be useful for optimizing
     performance and avoiding unnecessary function calls.

112. ### What is global execution context?

     The global execution context is the default or first execution context that is created by the
     JavaScript engine before any code is executed (i.e, when the file first loads in the browser).
     All the global code that is not inside a function or object will be executed inside this global
     execution context. Since JS engine is single threaded there will be only one global environment
     and there will be only one global execution context.

113. ### What is function execution context?

     In JavaScript, the function execution context refers to the environment in which a function is
     executed or called. Each time a function is invoked, a new execution context is created
     specifically for that function. It consists of two main components: the variable environment
     and the scope chain.

114. ### What does the variable environment in JavaScript's function execution context contain?

     The variable environment contains all the variables, function declarations, and function
     arguments specific to that function. It keeps track of the function's local variables and
     parameters, allowing the function to access and manipulate them during its execution.

115. ### What is a scope chain in JavaScript's function execution context?

     The scope chain is a list of all the variable environments that are accessible to the function.
     It is used to resolve variable references during the function's execution. When a variable is
     not found in the current variable environment, JavaScript looks up the scope chain to find the
     variable in outer environments until it reaches the global execution context.

116. ### What is minification?

     Minification is the process of removing all unnecessary characters (empty spaces are removed)
     and variables will be renamed without changing it's functionality.

117. ### How to modify the url without reloading the page?

     The `window.location.href` property will be helpful to modify the url but it reloads the page.
     HTML5 introduced the `history.pushState()` and `history.replaceState()` methods, which allow
     you to add and modify history entries, respectively. Example:

     ```
     window.history.pushState("page2", "Title", "/page2.html");
     ```

118. ### What are dynamic imports in JavaScript?

     Dynamic imports in JavaScript allow you to load modules or scripts dynamically at runtime,
     instead of including them statically in the initial page load.

     ```
         import('module.js')
      .then(module => {
        // Use the imported module
        // ...
      })
      .catch(error => {
        // Handle any import errors
        // ...
      });
     ```

119. ### What paradigm is JavaScript?

     JavaScript is a multi-paradigm language, supporting imperative/procedural programming,
     Object-Oriented Programming and functional programming. JavaScript supports Object-Oriented
     Programming with prototypical inheritance.

120. ### How do you empty an array?

     You can empty an array quickly by setting the array length to zero.

     ```
     let cities = ["Singapore", "Delhi", "London"];
     cities.length = 0; // cities becomes []
     ```

121. ### What is a lambda function?

     A lambda function, also known as an arrow function in JavaScript, is a concise and shorthand
     way of defining a function. It uses the => arrow syntax to indicate a function, allowing for
     shorter and more readable code.

122. ### What is variable shadowing in JavaScript?

     If there is a variable in the global scope, and you'd like to create a variable with the same
     name in a function. The variable in the inner scope will temporarily shadow the variable in the
     outer scope. It is called variable shadowing.

123. ### How do you assign default values to variables?

     You can use the logical or operator || in an assignment expression to provide a default value.
     The syntax looks like as below,

     ```
     let a = b || c;
     ```

124. ### What is a rest operator in JavaScript?

     The rest operator in JavaScript is a special syntax that allows you to pass an indefinite
     number of arguments to a function. It is represented by three dots ( ... ).

     ```
     function partyGuests(...names) {
     console.log(names);
     }

     partyGuests('Alice', 'Bob', 'Charlie');
     ```

125. ### What is a spread operator?

     The spread operator (`...`) is used to spread elements from an array or object into another
     array, function call, or object literal. It allows you to unpack or expand the individual items
     or properties from the source into a destination.

     ```
     const fruits = ['apple', 'banana', 'orange'];
     const fruitSalad = ['kiwi', 'grape', ...fruits, 'melon'];
     //fruitSalad = ["kiwi", "grape", "apple", "banana", "orange", "melon"]
     ```

126. ### What is load event?

     The `load` event fires at the end of the document loading process. At this point, all of the
     objects in the document are in the DOM, and all the images, scripts, links and sub-frames have
     finished loading.

     The DOM event `DOMContentLoaded` will fire after the DOM for the page has been constructed, but
     do not wait for other resources to finish loading. This is preferred in certain cases when you
     do not need the full page to be loaded before initializing.

127. ### What is the difference between Native objects and Host objects?

     Native objects are objects that are part of the JavaScript language defined by the ECMAScript
     specification, such as String, Math, RegExp, Object, Function, etc on the other hand, the host
     objects are provided by the runtime environment (browser or Node), such as window,
     XMLHTTPRequest, etc.

128. ### What are anonymous functions?

     Anonymous functions are functions that are not bound to a name. They are often used as inline
     functions, or as arguments to other functions. One typical use case for anonymous functions is
     as callback functions.

129. ### What is negative Infinity?

     Negative Infinity is a number in JavaScript which can be derived by dividing negative number by
     zero.

130. ### What is the data type of variables in JavaScript?

     All variables in JavaScript are object data types.

131. ### What is the difference between a prototype and an instance?

     A prototype is a blueprint for creating objects. An instance is an object that is created from
     a prototype. Instances inherit properties and methods from their prototypes.

132. ### What is a function expression?

     A function expression is a way to define a function by assigning it to a variable. Instead of
     using the traditional function declaration syntax, a function expression involves creating an
     anonymous function that can be stored in a variable.

133. ### What is the difference between a module and a library?

     A module is a self-contained unit of code that can be imported into another program. A library
     is a collection of modules that can be used to perform a specific task. Modules are typically
     used to organize code and make it easier to reuse, while libraries are typically used to
     provide functionality that is not available in the core language.

134. ### How are JavaScript and ECMA Script related?

     ECMA Script is like rules and guidelines, while JavaScript is a scripting language used for web
     development.

135. ### What are the different ways to delete a variable in JavaScript?

     We can delete a variable and remove it from memory in the following ways:

     1. Using the `delete` keyword:

        ```
        let x = 10;
        console.log(x); // Output: 10

        delete x;
        console.log(x); // Output: 10 (variable still exists but with no value)
        ```

     2. Setting the variable to `undefined` or `null`:

        ```
        let x = 10;
        console.log(x); // Output: 10

        x = undefined;
        console.log(x); // Output: undefined
        ```

     3. Using a block scope with `let` or `const` (variables declared with let or const within a
        block scope will automatically be removed from memory once the block is exited):

        ```
        {
        let x = 10;
        console.log(x); // Output: 10
        }

        console.log(x); // Output: ReferenceError: x is not defined
        ```

136. ### What are the different types of errors in JavaScript?

     There are three types of errors:

     1. Load time errors: Errors that come up when loading a web page, like improper syntax errors,
        are known as Load time errors and generate the errors dynamically.
     2. Runtime errors: Errors that come due to misuse of the command inside the HTML language.
     3. Logical errors: These are the errors that occur due to the bad logic performed on a function
        with a different operation.

137. ### What is the use of the blur function?

     In JavaScript, the `blur()` function is used to remove the focus from a specific element on a
     web page. When an element has focus, it typically means that it is selected or ready to receive
     user input, such as when a user clicks on an input field or a button.

138. ### What is the difference between an alert box and a confirmation box?

     An alert box is a simple message box with an OK button for displaying information, while a
     confirmation box allows users to confirm or cancel an action with OK and Cancel buttons
     respectively. The alert box is non-interactive and pauses code execution until closed, whereas
     the confirmation box returns a boolean value indicating the user's choice and doesn't halt code
     execution.

139. ### What is `prompt()` in JavaScript?

     `prompt()` is a built-in JavaScript function that displays a dialog box to the user with a
     message, an input field, and OK/Cancel buttons. It allows the user to input data, which can
     then be captured and used in JavaScript code. The `prompt()` function halts the code execution
     until the user enters a value and clicks OK or cancels the dialog. If the user clicks OK, the
     entered value is returned as a string. If the user cancels or closes the dialog, the function
     returns null.

140. ### When to use Internal and External JavaScript Code?

     If you have only a few lines of code that is specific to a particular webpage. In that case, it
     is better to keep your JavaScript code internal within your HTML document. On the other hand,
     if your JavaScript code is used in many web pages, you should consider keeping your code in a
     separate file. If your code is too long, it is better to keep it in a separate file. This helps
     in easy debugging.

141. ### What is npm?

     NPM (Node Package Manager) is a helpful tool for developers that makes working with JavaScript
     easier. It's like a big library where they can find ready-to-use code and easily add it to
     their own projects. It is also the name of the command line package manager used to interact
     with npm.

142. ### What is the name of the file which npm uses to identify the project and its dependencies?

     The file that npm uses to identify the project and its dependencies is called "package.json".
     It serves as a configuration file where developers can specify information about their project,
     such as its name, version, and dependencies on external packages.

143. ### What is the difference between dependencies and devDependencies?

     Both are defined in a `package.json`. A dependencies lists the packages that the project is
     dependent on. A devDependencies lists the dependencies which are only required during testing
     and development.

144. ### What is a non-blocking function?

     A non-blocking function, also known as an asynchronous function, is a type of function that
     does not block the execution of other code while it is running. Instead of waiting for the
     function to complete before moving on to the next task, non-blocking functions allow the
     program to continue executing other tasks while it is perform its operation in the background.

145. ### What is a blocking function?

     A blocking function is a type of function that halts the execution of the program until it
     completes its task or receives a response.

146. ### What is function composition?

     Function composition refers to the process of combining two or more functions to create a new
     function. To compose functions, we typically create a higher-order function that takes two
     functions as arguments and returns a new function. This new function executes the functions in
     order, passing the result of one function as the argument to the next function.

147. ### What is heap?

     Heap refers to a part of the memory where dynamic memory allocation takes place. It is the
     memory region used for storing objects and variables that are created during the execution of a
     program. The heap is an essential component of the JavaScript runtime environment. It is
     responsible for managing and allocating memory for objects that are created dynamically at
     runtime, such as objects created using the new keyword, arrays, and function closures.

148. ### What is typed array in JavaScript?

     Typed arrays are specialized array-like objects that allow to work with binary data in a
     structured and efficient manner. They come in different types, such as numbers and bytes, and
     provide optimized operations for reading, writing, and manipulating binary data. They offer
     better performance and memory efficiency compared to regular arrays.

149. ### What is Node.js?

     Node.js is a JavaScript runtime for server-side applications. It lets to run JavaScript outside
     of web browsers, handle network requests, access databases, and build scalable apps
     efficiently. It's widely used for creating web servers, APIs, real-time apps, and command-line
     tools.

150. ### What is a PWA?

     PWAs (Progressive Web Apps) are web applications that use JavaScript, HTML, and CSS to provide
     a mobile app-like experience. They work offline, send push notifications, and can be installed
     on devices. PWAs combine the best of web and app technologies, allowing users to access them
     directly through web browsers without the need for app store downloads.

151. ### What is nullish coalescing operator (??)?
     It is a logical operator that returns its right-hand side operand when its left-hand side
     operand is null or undefined and otherwise returns its left-hand side operand. This can be
     contrasted with the logical OR (||) operator, which returns the right-hand side operand if the
     left operand is any falsy value, not only null or undefined.
     ```
     console.log(null ?? true); // true
     ```
152. ### How do you get the status of a checkbox with JavaScript?

     You can apply the checked property on the selected checkbox in the DOM. If the value is true it
     means the checkbox is checked, otherwise it is unchecked. For example, the below HTML checkbox
     element can be access using JavaScript as below:

     ```
     console.log(document.getElementById(‘checkbox_name’).checked); // true or false
     ```

153. ### What is the purpose of double tilde operator?

     The double tilde operator(~~) is known as double NOT bitwise operator. This operator is a
     slightly quicker substitute for Math.floor().

154. ### What are the different ways to debug JavaScript code?

     To debug JavaScript code, you can use console.log() statements to print values and messages to
     the console, browser developer tools for breakpoints, stepping through code, and variable
     inspection, the debugger statement to trigger breakpoints, exception handling to catch and log
     errors, linters and code analyzers to detect potential issues, and remote debugging for
     debugging code running in a different environment.

155. ### What are the different ways to optimize JavaScript code?

     To optimize JavaScript code, you can combine and minify files, minimize global variables,
     optimize loops and conditionals, use efficient data structures and algorithms, cache data,
     leverage asynchronous programming, and optimize DOM manipulation.

156. ### What is the difference between undeclared & undefined?

     Undeclared variables are those that do not exist in a program and are not declared. If the
     program tries to read the value of an undeclared variable, then a runtime error is encountered.
     Undefined variables are those that are declared in the program but have not been given any
     value. If the program tries to read the value of an undefined variable, an undefined value is
     returned.

157. ### What would be the result of 2+5+”3″?

     Since 2 and 5 are integers, they will be added numerically. And since 3 is a string, its
     concatenation will be done. So the result would be 73.

158. ### What is statically typed and dynamically typed language and is JavaScript a statically typed or a dynamically typed language?

     Dynamically-typed languages perform type checking at runtime, while statically typed languages
     perform type checking at compile time. JavaScript is a dynamically typed language.

159. ### What does delete do in JavaScript?

     The `delete` operator is used for deleting an object’s property or key.

160. ### Can you access DOM in Node.js?

     No, you cannot directly access the DOM in Node.js. Node.js is a runtime environment for running
     JavaScript outside of web browsers, and it does not have a built-in DOM implementation.

161. ### How can you share code between files?

     In the client-side/browser environment, if variables and functions are declared in the global
     scope (window), they can be accessed and shared by all scripts on the page. This is often
     referred to as the global scope or global namespace.

162. ### What does the `instanceof` operator do?

     The `instanceof` operator checks whether the prototype property of a constructor appears
     anywhere in the prototype chain of an object. In other words, the `instanceof` operator checks
     if the object is an instance of a class or not at run time.

163. ### What are the drawbacks of prototypal inheritance?

     Prototypal inheritance also has some drawbacks. First, it can be more difficult to understand
     than class-based inheritance. Second, it can be more difficult to debug. Third, it can be more
     difficult to test.

164. ### What are the limitations of using the "this" keyword in JavaScript?

     The "this" keyword in JavaScript has limitations. Its value depends on the function invocation,
     leading to confusion and unexpected behavior. In arrow functions, "this" behaves differently,
     being lexically scoped. When using "this" in a constructor function without the "new" keyword,
     it refers to the global object instead of creating a new instance.

165. ### What are the drawbacks of using the "delete" operator in JavaScript?

     The "delete" operator in JavaScript has drawbacks. It can be slow and impact performance when
     deleting object properties. It does not affect the prototype chain, leading to unexpected
     behavior. It also cannot delete variables or functions declared with "var" or "function"
     keywords.

166. ### What are the advantages of using closures in JavaScript?

     Closures in JavaScript allow for encapsulation, data privacy, and the creation of private
     variables and functions that are inaccessible from the outside scope.

167. ### What are the concept of prototypal inheritance benefits?

     Prototypal inheritance in JavaScript allows objects to inherit properties and methods from
     other objects, promoting code reuse and reducing memory consumption.

168. ### What are the advantages of using the fetch API over traditional XMLHttpRequest for making HTTP requests?

     The fetch API offers a simpler and more modern way to make asynchronous HTTP requests,
     providing better error handling, support for promises, and the ability to handle various data
     formats.

169. ### Can you explain the benefits of using the "this" keyword?

     The "this" keyword in JavaScript allows objects to refer to their own properties and methods
     dynamically, adapting to different execution contexts and enabling code reusability.

170. ### How do you ensure the code you write is maintainable, readable, and follows best practices?

     To ensure maintainable, readable, and best practice-following code, I follow coding conventions
     and style guidelines. I also write clear comments, use descriptive variable and function names,
     and modularize the code to make it easier to understand and maintain.

171. ### How do you handle working on a JavaScript project with a large codebase or multiple developers?

     Clear communication, organization, and collaboration are essential for JavaScript projects with
     a large codebase or multiple developers. Using Git for version control enables simultaneous
     work and easy code merging. Breaking down the code into smaller modules, documenting, following
     coding standards, conducting code reviews, and implementing testing ensure code quality and
     facilitate collaboration.

172. ### How does JavaScript handle memory management and garbage collection?

     JavaScript handles memory management through automatic garbage collection. The JavaScript
     engine keeps track of all objects created during the program execution. When an object is no
     longer reachable or referenced by any part of the program, it becomes eligible for garbage
     collection. The garbage collector then frees up the memory occupied by those unreferenced
     objects, making it available for future use.
