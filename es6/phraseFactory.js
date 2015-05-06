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
        sanitize(callback) {
            let els = [];
            for (let [i,element] of this.elements.entries()) {
                let el = element;
                el = sanitize(el);
                el = depluralize([el], ['']);
                el = stem(el);
                els.push(el[0]);
                if(callback){
                    callback(el[0],i);
                }
            }
            this.sanitized = els;
            return els;
        },
        addRelation(key,value) {
            relations.createOrUpdate(key,value);
        }
    }
};