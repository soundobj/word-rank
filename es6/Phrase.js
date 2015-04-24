export const commonWords = [
    'a', 'an', 'the', 'this', 'that', 'there', 'it',
    'in', 'on', 'for', 'not', 'your', 'you', 'at',
    'to', 'is', 'us', 'out', 'by', 'I'
];

export class Phrase {

    constructor(phrase,wordSanitizer){
        this.phrase = phrase;
        this.wordSanitizer = wordSanitizer;

        this.elements = this.phrase.split(" ");
        this.sanitizedElements = [];

        this.sanitizePhrase();
    }

    sanitizePhrase() {
        for(let el of this.elements.values()) {
            var elToSanitise = el;
            elToSanitise = this.wordSanitizer.sanitize(elToSanitise);
            elToSanitise = this.wordSanitizer.depluralize([elToSanitise],['']);
            elToSanitise = this.wordSanitizer.stem(elToSanitise);
            this.sanitizedElements.push(elToSanitise[0]);
        }
    }
}