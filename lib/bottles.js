import {downTo, capitalize} from './helpers';

class Bottles {
    verse(number) {
        const bottleNumber = new BottleNumber(number)
        const nextBottleNumber = new BottleNumber(bottleNumber.next())

        return capitalize(`${bottleNumber.quantity()} ${bottleNumber.container()} of beer on the wall, `) +
            `${bottleNumber.quantity()} ${bottleNumber.container()} of beer.\n` +
            `${bottleNumber.action()}` +
            `${nextBottleNumber.quantity()} ${nextBottleNumber.container()} of beer on the wall.\n`;
    }


    verses(from, to) {
        return downTo(from, to).map(n => this.verse(n)).join('\n')
    }

    song() {
        return this.verses(99, 0)
    }
}

class BottleNumber {
    constructor(number) {
        this.number = number
    }

    action() {
        if (this.number === 0) {
            return "Go to the store and buy some more, "
        } else {
            return `Take ${this.pronoun()} down and pass it around, `
        }
    }

    next() {
        if (this.number === 0) {
            return 99
        } else {
            return this.number - 1
        }
    }

    quantity() {
        if (this.number === 0) {
            return "no more"
        } else {
            return this.number
        }
    }

    pronoun() {
        if (this.number === 1) {
            return "it"
        } else {
            return "one"
        }
    }

    container() {
        if (this.number === 1) {
            return "bottle"
        } else {
            return "bottles"
        }
    }
}

export {Bottles}