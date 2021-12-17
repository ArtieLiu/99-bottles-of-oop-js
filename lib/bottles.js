import {downTo} from './helpers';

class Bottles {
    verse(number) {
        switch (number) {
            case 0:
                return 'No more bottles of beer on the wall, ' +
                    'no more bottles of beer.\n' +
                    'Go to the store and buy some more, ' +
                    '99 bottles of beer on the wall.\n';
            default:
                return `${number} ${this.container(number)} of beer on the wall, ` +
                    `${number} ${this.container(number)} of beer.\n` +
                    `Take ${this.pronoun(number)} down and pass it around, ` +
                    `${this.quantity(number - 1)} ${this.container(number - 1)} of beer on the wall.\n`;
        }
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

    quantity(number=0){
        if (number===0) {
            return "no more"
        } else {
            return number
        }
    }
}
export {Bottles}