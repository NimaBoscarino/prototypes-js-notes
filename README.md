[GIST WITH THE CODE](https://gist.github.com/NimaBoscarino/2b44f74988b9a1ecc83bfcc1c807b123)

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

We also saw that we can augment existing Javascript types, such as Function and Number. The example below is from "Javascript: The Good Parts" by Douglas Crockford.

```js
Function.prototype.method = function(name, func) {
	this.prototype[name] = func
	return this
}

Number.method('integer', function() {
	return Math[this < 0 ? 'ceil' : 'floor'](this)
})

(5.3).integer() // -> 5
```

Cheers!

