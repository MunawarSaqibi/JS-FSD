// let username= " coding_wizard "
// let clean= username.trim()
// console.log(clean)

// let email = " user@example.com ";
// let cleanEmail = email.trim();
// console.log(cleanEmail); // "user@example.com"

// let text=" Hello world "
// console.log(text.trim())

// let original= "  test  "
// let trimmed= original.trim()
// console.log(original)
// console.log(trimmed)

// let greeting = "hello";
// greeting.toUpperCase();
// console.log(greeting);

// let message= "javascript";
// let upper= message.toUpperCase()
// console.log(message)
// console.log(upper)


// let text = " HELLO ";
// let result = text.trim().toLowerCase();
// console.log(text); // " HELLO " (original)
// console.log(result); // "hello" (new string)

// let str = "Hello World";
// console.log(str.indexOf("W")); // 6
// console.log(str.indexOf("o")); // 4 (first occurrence)
// // Example 2: Finding a substring
// let sentence = "I love JavaScript";
// console.log(sentence.indexOf("love")); // 2
// console.log(sentence.indexOf("Java")); // 7
// // Example 3: Character not found
// let text = "Hello World";
// console.log(text.indexOf("z")); // -1
// // Example 4: Case sensitivity
// let word = "JavaScript";
// console.log(word.indexOf("java")); // -1 (case matters!)
// console.log(word.indexOf("Java"));

// let msg = " hello ";
// let result = msg.trim().toUpperCase();
// console.log(result); // "HELLO"
// // Example 2: Three methods chained
// let input = " JAVASCRIPT ";
// let clean = input.trim().toLowerCase().slice(0, 4);
// console.log(clean); // "java"
// // Example 3: Cleaning user input
// let username = " UserName123 ";
// let processed = username.trim().toLowerCase();
// console.log(processed); // "username123"
// // Example 4: Complex chaining
// let text = " Hello World ";
// let output = text.trim().toUpperCase().replace("HELLO", "HI");
// console.log(output); // "HI WORLD"
// // Example 5: Order matters in chaining
// let word = "javascript";
// console.log(word.slice(0, 4).toUpperCase()); // "JAVA"
// console.log(word.toUpperCase().slice(0, 4)); // "JAVA" (same result)

// // Example 1: Basic slicing
// let word = "Mountains";
// console.log(word.slice(0, 5)); // "Mount"
// console.log(word.slice(5)); // "ains"
// // Example 2: Extracting middle portion
// let text = "JavaScript";
// console.log(text.slice(4, 10)); // "Script"
// // Example 3: Slicing from an index to end
// let message = "Hello World";
// console.log(message.slice(6)); // "World"
// // Example 4: Using negative indices (from end)
// let lang = "JavaScript";
// console.log(lang.slice(--6)); // "Script"
// console.log(lang.slice(0, --6)); // "Java"

// let fruit="I love apple pie"
// console.log(fruit.replace("apple","cherry"));

// let message = "Hello hello HELLO";
// console.log(message.replace("hello", "hi"));


// let colors=["red","green","blue","yellow","purple"]
// let removed=colors.splice(1,2)
// console.log(removed)
// console.log(colors)

// let numbers=[1,2,3,4,5]
// numbers.splice(1,3,10,20,30)
// console.log(numbers)

// let arr=[1,5]
// arr.splice(1,0,2,3,4)
// console.log(arr)

// let items=["a","b","c","d","e"]
// items.splice(-2,2)
// console.log(items)

// let fruits=["apple","orange","mango"]
// fruits.splice(1,1,"banana")
// console.log(fruits)

// let fruits=["banana","apple","mango","cherry"]
// fruits.sort()
// console.log(fruits)

// let numbers=[100,200,10,4,5]
// numbers.sort()
// console.log(numbers)


// let scores=[85,90,100,23,14]
// scores.sort((a,b)=> a-b)
// console.log(scores)

