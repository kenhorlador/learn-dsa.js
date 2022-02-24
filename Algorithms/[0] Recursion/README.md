# <strong>Recursion</strong>

Recursion is a process of calling itself. A function that calls itself is called a recursive function.

The syntax for recursive function is:

```js
function recurse() {
  // function code
  recurse()
  // function code
}

recurse()
```

A recursive function must have a condition to stop calling itself. Otherwise, the function is called indefinitely.

Once the condition is met, the function stops calling itself. This is called a base condition.

To prevent infinite recursion, you can use if...else statement (or similar approach) where one branch makes the recursive call, and the other doesn't.

So, it generally looks like this.

```js
function recurse() {
  if (condition) {
    recurse()
  } else {
    // stop calling recurse()
  }
}

recurse()
```

### Examples:

1. <a href="./Factorial.js">Program to find the Factorial of a number</a>
