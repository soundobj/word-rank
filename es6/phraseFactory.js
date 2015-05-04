require("./mapUtils");
import {sanitize, depluralize, stem} from '../node_modules/word-overlap/lib/lib'
export function phraseFactory (phrase) {

    // { 'other.phrase.id' : [[this.phrase.word.index,other.phrase.word.index],...]}
    let relations = new Map();

    return {
        phrase : phrase,
        elements : phrase.split(" "),
        sanitized : undefined,
        relations : relations,
        sanitize() {
            let els = [];
            for (let element of this.elements.values()) {
                let el = element;
                el = sanitize(el);
                el = depluralize([el], ['']);
                el = stem(el);
                els.push(el[0]);
            }
            this.sanitized = els;
            return els;
        },
        addRelation(key,value) {
            relations.createOrUpdate(key,value);
        }
    }
};