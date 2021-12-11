import {downTo} from './helpers';

class Bottles {
    verse(number) {
        if ((number <= 99) && (number >= 3)) {
            return `${number} bottles of beer on the wall, ` +
                `${number} bottles of beer.\n` +
                'Take one down and pass it around, ' +
                `${number - 1} bottles of beer on the wall.\n`;
        }

        if (number === 2) {
            return '2 bottles of beer on the wall, ' +
                '2 bottles of beer.\n' +
                'Take one down and pass it around, ' +
                '1 bottle of beer on the wall.\n';
        }

        if (number === 1) {
            return '1 bottle of beer on the wall, ' +
                '1 bottle of beer.\n' +
                'Take it down and pass it around, ' +
                'no more bottles of beer on the wall.\n';
        }

        return 'No more bottles of beer on the wall, ' +
            'no more bottles of beer.\n' +
            'Go to the store and buy some more, ' +
            '99 bottles of beer on the wall.\n';
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
}

export {Bottles}