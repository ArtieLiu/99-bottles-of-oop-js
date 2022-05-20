import {downTo, capitalize} from './helpers';

class Bottles {
    verse(number) {
        return capitalize(`${this.quantity(number)} ${this.container(number)} of beer on the wall, `) +
            `${this.quantity(number)} ${this.container(number)} of beer.\n` +
            `${this.action(number)}` +
            `${this.quantity(this.next(number))} ${this.container(this.next(number))} of beer on the wall.\n`;
    }

    action(number) {
        if (number === 0) {
            return "Go to the store and buy some more, "
        } else {
            return `Take ${this.pronoun(number)} down and pass it around, `
        }
    }

    next(number) {
        if (number === 0) {
            return 99
        } else {
            return number - 1
        }
    }

    quantity(number) {
        if (number === 0) {
            return "no more"
        } else {
            return number
        }
    }

    pronoun(number) {
        if (number === 1) {
            return "it"
        } else {
            return "one"
        }
    }

    container(number) {
        if (number === 1) {
            return "bottle"
        } else {
            return "bottles"
        }
    }

    verses(from, to) {
        return downTo(from, to).map(n => this.verse(n)).join('\n')
    }

    song() {
        return this.verses(99, 0)
    }
}

export {Bottles}