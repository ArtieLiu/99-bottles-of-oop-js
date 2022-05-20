import {downTo, capitalize} from './helpers';

class Bottles {
    verse(number) {
        const bottleNumber = BottleNumber.for(number)
        const nextBottleNumber = BottleNumber.for(bottleNumber.next())

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

    action() {
        return `Take ${this.pronoun()} down and pass it around, `
    }

    next() {
        return this.number - 1
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
        return 99
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