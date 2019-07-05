## YOU DON'T LIKE REALLY NEED TO KNOW THIS STUFF INSIDE AND OUT

# PROTOTYPES IN JAVASCRIPT 

Objects

```js
let obj = {}
```

Object Literal
EMPTY OBJECT

Objects in Javascript are not what they seem.

More than meets the eye.

```js
cosnt theFunc = function () {

}
```


function Artist(name, adlib) {
	this.name = name
	this.adlib = adlib
}

function Artist(name, adlib) {
	name: name
	adlib: adlib
}

hello: 'world'


Number.prototype.addOne = function () {
	return this + 1
}

(1).addOne()

https://i.kym-cdn.com/entries/icons/mobile/000/023/397/C-658VsXoAo3ovC.jpg

function Artist(name, adlib) {
	this.name = name
	this.adlib = adlib

	this.sayAdlib = function () {
		return "My adlib is: " + this.adlib
    }
}

let ComponentType
    - can be seen on the screen
    - updates with new data
    - can be mounted/unmounted

let ChatBarType extends ComponentType
    - can be seen on the screen
    - updates with new data
    - can be mounted/unmounted
    displays the inputs for name and message

let NavbarType 
    shows how many people are in the app
