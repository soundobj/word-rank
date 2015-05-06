require("./mapUtils");
import {wordIndexer} from './wordIndexer'
import {phraseFactory} from './phraseFactory'
export function phraseOverlap (phrases) {

    let sanitized = [];
    let wi = wordIndexer();

    for(let [i,p] of phrases.entries()) {
        let phrase = phraseFactory(p);
        // pass a callback to build the word index alongside sanitizing the phrases
        phrase.sanitize(wi.addEntry.bind({phraseIndex:i}));
        sanitized.push(phrase);
    }

    /**
     * callback to discern if the relation belongs to the current phrase
     * we want to skip this entry as is not relevant for our relation mapping
     * @param {Object} element - the relation in the list {{"phrase":index,"pos":index}
     * @param {Number} index - the index in the list
     * @param {Array} array - the list of relations
     * @returns {boolean}
     */
    let isCurrentPhrase = function(element, index, array){
         if (element.phrase === this.id) {
             return true;
         }
    }

    return {
        sort() {
            for(let [i,p] of sanitized.entries()) {

                let phrase = p.sanitized;

                for(let word of phrase.values()) {

                    if(wi.wordIndex.has(word)) {
                        let relations = wi.wordIndex.get(word);
                        let currentPhraseRelationIndex = relations.findIndex(isCurrentPhrase,{id:i});

                        for(let [c,relation] of relations.entries()) {

                            if(c !== currentPhraseRelationIndex) {
                                sanitized[i].addRelation(relation.phrase,[
                                    relations[currentPhraseRelationIndex].pos,
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