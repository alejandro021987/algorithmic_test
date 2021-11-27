# Algorithmic Test
## Fibonacci Problem
Create a fibonachi secuence <span style='text-decoration:underline'>recursivly</span></h1>
Write a JavaScript program to get the first <b>n</b> Fibonacci numbers.

Notes:
- The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . (Each subsequent number is the sum of the previous two.)
- Do not modify the init function.
- Link: https://jsfiddle.net/5pzrhuLs/

### Resolution

The first possible cases were taken into account for which it is not necessary to enter logic (n = 0, n <0, n = 1). For the following cases, the recursive function calculateElements (i, n, arrFib) is called where:
- i: is the current position to calculate and insert into the array
- n: are the first "n" elements of the Fibonacci series
- arrFib: is the array of numbers of the Fibonacci series that is being constructed

## Strings Combinations Problem
Given a string, construct the longest string in which all characters are in alphabetical order by omitting letters in the input string
 Examples:
   apple  --> app
   banana --> ann
   cba    --> a
   cbbaaa --> aaa
 
 @param  {string} word Lowercase string containing letter a-z
 @return {string} Longest string which's characters are in alphanumerical order

Notes:
- Consider that the idea is not to sort the input string.
- It is not needed to check for capital letters, assume that every letter in the word received is lowercase
- Link: https://jsfiddle.net/wLy5an7e/

### Resolution
In this problem I started thinking to solve through an iterative process but then when trying to find the different possible combinations and since it was a matter of choosing (or omitting) each of the characters that were being taken, I noticed it has a tree behavior. So I proceeded to search a way to solve using recursion.
The next problem was to be able to take into account all the cases and define the cutting conditions. For the first, I made two recursive calls where they are concatenated at the end of each process and for the cut condition I took into account the last case where there are no longer characters to take and the combination string is the case in which all the characters.
