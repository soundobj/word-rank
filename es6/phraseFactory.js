import {sanitize, depluralize, stem} from '../node_modules/word-overlap/lib/lib'
export function phraseFactory (phrase) {
    return {
        phrase : phrase,
        elements : phrase.split(" "),
        sanitized : undefined,
        sanitizePhrase() {
            let els = [];
            for(let element of this.elements.values()) {
                let el = element;
                el = sanitize(el);
                el = depluralize([el],['']);
                el = stem(el);
                els.push(el[0]);
            }
            this.sanitized = els;
            return els;
        }
    }
};

