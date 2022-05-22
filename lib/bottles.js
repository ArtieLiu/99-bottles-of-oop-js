import {capitalize, downTo} from './helpers';

class CountdownSong {
    constructor(verseTemplate, max = 99999, min = 0) {
        this.verseTemplate = verseTemplate
        this.max = max
        this.min = min
    }

    verse(number) {
        return this.verseTemplate.lyrics(number)
    }

    verses(upper, lower) {
        return downTo(upper, lower).map(i => this.verse(i)).join('\n')
    }

    song() {
        return this.verses(this.max, this.min)
    }
}

class BottleVerse {
    constructor(number) {
        this.number = number
    }

    static lyrics(number) {
        return new BottleVerse(BottleNumber.for(number)).lyrics()
    }

    lyrics() {
        const bottleNumber = this.number

        return capitalize(`${bottleNumber} of beer on the wall, `) +
            `${bottleNumber} of beer.\n` +
            `${bottleNumber.action()}` +
            `${bottleNumber.successor()} of beer on the wall.\n`;
    }
}

class BottleNumber {
    static for(number) {
        let bottleNumberClass
        switch (number) {
            case 0:
                bottleNumberClass = BottleNumber0
                break;
            case 1:
                bottleNumberClass = BottleNumber1
                break;
            case 6:
                bottleNumberClass = BottleNumber6
                break;
            default:
                bottleNumberClass = BottleNumber
                break;
        }

        return new bottleNumberClass(number)
    }

    constructor(number) {
        this.number = number
    }

    toString() {
        return `${this.quantity()} ${this.container()}`
    }

    container() {
        return "bottles"
    }

    pronoun() {
        return "one"
    }

    quantity() {
        return this.number.toString()
    }

    action() {
        return `Take ${this.pronoun()} down and pass it around, `
    }

    successor() {
        return BottleNumber.for(this.number - 1)
    }
}

class BottleNumber0 extends BottleNumber {
    quantity() {
        return "no more"
    }

    action() {
        return 'Go to the store and buy some more, '
    }

    successor() {
        return BottleNumber.for(99)
    }
}

class BottleNumber1 extends BottleNumber {
    container() {
        return "bottle"
    }

    pronoun() {
        return "it"
    }
}

class BottleNumber6 extends BottleNumber {
    container() {
        return "six-pack"
    }

    quantity() {
        return "1"
    }
}

export {BottleVerse, CountdownSong}