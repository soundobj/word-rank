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
        for(let element of this.elements.values()) {
            let el = element;
            el = this.wordSanitizer.sanitize(el);
            el = this.wordSanitizer.depluralize([el],['']);
            el = this.wordSanitizer.stem(el);
            this.sanitizedElements.push(el[0]);
        }
    }
}