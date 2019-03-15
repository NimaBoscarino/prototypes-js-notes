## W6D5: Prototypes in Javascript

[REPO](https://github.com/NimaBoscarino/prototypes-js-notes)

# How can objects be created in Javascript? We looked at...

- Object literals
    - `let obj = {a: 1, b: 2}`
- Function constructors
- Object.create
- Classes

We started off talking about inheritance from more general types in pseudocode

    let MammalType = {
        dna,
        eyes,
        fur
    }

    let CatType  = {
        is a MammalType
        pointy ears,
        whiskers,
        is a jerk
    }

    let DogType  = {
        is a MammalType
        round ears,
        whiskers,
        is nice
    }

    let spot = new DogType
    let felix = new CatType

And then we discussed doing these things in Javascript! Take a look at the code in the [gist]() to see this stuff in action.

By exploring the inner workings of Javascript objects and function constructors we met:

`.prototype` --> WHEN I USE THIS TO CREATE NEW THINGS, WHAT DO THEY HAVE
`.__proto__` --> WHAT AM I INHERITING FROM

We also saw that we can augment existing Javascript types, such as Array, Function and Number.

```js
Array.prototype.sayNimaIsCaredFor = function () {
	return "I care"
}

let dogs = ['spot', 'barktholomew', 'lassie']

console.log(dogs.sayNimaIsCaredFor())
```

Cheers!

