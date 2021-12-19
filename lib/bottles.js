import {capitalize, downTo} from './helpers';

class Bottles {
    verse(number) {
        return `${capitalize(this.quantity(number))} ${this.container(number)} of beer on the wall, ` +
            `${this.quantity(number)} ${this.container(number)} of beer.\n` +
            `${this.action(number)}` +
            `${this.quantity(this.successor(number))} ${this.container(this.successor(number))} of beer on the wall.\n`;
    }

    verses(from, to) {
        let verseNumbers = downTo(from, to)
        let verses = []
        for (const verseNumber of verseNumbers) {
            verses.push(this.verse(verseNumber))
        }

        return verses.join('\n');
    }

    song() {
        return this.verses(99, 0)
    }

    container(number) {
        if (number === 1) {
            return "bottle"
        } else {
            return "bottles"
        }
    }

    pronoun(number) {
        if (number === 1) {
            return "it"
        } else {
            return "one"
        }
    }

    quantity(number) {
        if (number === 0) {
            return "no more"
        } else {
            return number.toString()
        }
    }

    action(number) {
        if (number === 0) {
            return 'Go to the store and buy some more, '
        } else {
            return `Take ${this.pronoun(number)} down and pass it around, `
        }
    }

    successor(number) {
        if (number === 0) {
            return 99
        } else {
            return number - 1
        }
    }
}

export {Bottles}