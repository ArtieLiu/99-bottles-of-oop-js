import {downTo, capitalize} from './helpers';

class Bottles {
    constructor(verseTemplate = BottleVerse) {
        this.verseTemplate = BottleVerse
    }

    verse(number) {
        return this.verseTemplate.lyrics(number)
    }

    verses(from, to) {
        return downTo(from, to).map(n => this.verse(n)).join('\n')
    }

    song() {
        return this.verses(99, 0)
    }
}

class BottleVerse {
    constructor(bottleNumber) {
        this.bottleNumber = bottleNumber
    }

    static lyrics(number) {
        return new BottleVerse(BottleNumber.for(number)).lyrics()
    }

    lyrics() {
        return capitalize(`${this.bottleNumber} of beer on the wall, `) +
            `${this.bottleNumber} of beer.\n` +
            `${this.bottleNumber.action()}` +
            `${this.bottleNumber.next()} of beer on the wall.\n`;
    }
}

class BottleNumber {
    constructor(number) {
        this.number = number
    }

    static for(number) {
        let bottleNumber
        switch (number) {
            case 0:
                bottleNumber = BottleNumber0
                break
            case 1:
                bottleNumber = BottleNumber1
                break
            default:
                bottleNumber = BottleNumber
        }
        return new bottleNumber(number)
    }

    toString() {
        return `${this.quantity()} ${this.container()}`
    }

    action() {
        return `Take ${this.pronoun()} down and pass it around, `
    }

    next() {
        return BottleNumber.for(this.number - 1)
    }

    quantity() {
        return this.number
    }

    pronoun() {
        return "one"
    }

    container() {
        return "bottles"
    }
}

class BottleNumber0 extends BottleNumber {
    action() {
        return "Go to the store and buy some more, "
    }

    next() {
        return BottleNumber.for(99)
    }

    quantity() {
        return "no more"
    }
}

class BottleNumber1 extends BottleNumber {
    pronoun() {
        return "it"
    }

    container() {
        return "bottle"
    }
}

export {Bottles}