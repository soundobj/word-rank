import {wordIndexer} from './wordIndexer'
import {phraseFactory} from './phraseFactory'
export function phraseOverlap (phrases) {

    // sanitize phrases;
    let sanitized = [];
    let indexerPhrases = [];

    for(let p of phrases.values()) {
        let phrase = phraseFactory(p);
        phrase.sanitize();
        sanitized.push(phrase);
        indexerPhrases.push(phrase.sanitized);
    }

    // build index
    let wi = wordIndexer(indexerPhrases);
    wi.index();

    let isParent = function(element, index, array){
         if (element.phrase === this.id) {
             return true;
         }
    }

    return {
        sort() {
            for(let [i,phrase] of indexerPhrases.entries()) {

                for(let [b,word] of phrase.entries()) {

                    if(wi.wordIndex.has(word)) {
                        let relations = wi.wordIndex.get(word);
                        let parentId = relations.findIndex(isParent,{id:i});

                        for(let [c,relation] of relations.entries()) {

                            if(c !== parentId) {
                                sanitized[i].addRelation(relation.phrase,[
                                    relations[parentId].pos,
                                    relations[c].pos
                                ]);
                            }
                        }
                    }
                }
            }
        },
        sanitized: sanitized
    }
};