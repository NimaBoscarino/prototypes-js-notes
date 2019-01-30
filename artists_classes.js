class Artist {
	constructor() {
		this.genre = ''
	}
	sayTagline() {
		console.log(this.tagline)
	}	
}

const KidCudi = new Artist()
KidCudi.genre = 'good music'

class RockArtist extends Artist {
	constructor() {
    	super()
        this.genre = 'rock'
		this.bestBallad = ''
	}
}

const zeppelin = new RockArtist()
zeppelin.sayTagline() // -> undefined
zeppelin.tagline = "WAAAAAAAAAA"
zeppelin.sayTagline() // -> WAAAAAAAAAA

class HipHopArtist extends Artist {
	constructor(name) {
    	super()
        this.genre = 'hiphop'
		this.isKanye = (name === "Kanye West")
	}
}

const nicki = new HipHopArtist("Nicki Minaj") // nicky.isKanye === false
const kanye = new HipHopArtist("Kanye West") // kanye.isKanye === true

class Classical extends Artist {
	constructor() {
        this.genre = 'classical'
	}
}

const mozart = new Classical() // throws an error, we're not calling super() in the constructor

Artist.prototype.tagline = 'I AM AN ARTIST'
kanye.sayTagline() // -> I AM AN ARTIST
zeppelin.sayTagline() // -> WAAAAAAAAAA