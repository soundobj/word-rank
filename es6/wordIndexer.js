require("./mapUtils");
/**
 * wordIndex = {
 *      "word" : [
 *          {
 *              phrase: index,
 *              pos: index
 *          },
 *          {
 *              phrase: index,
 *              pos: index
 *          },
 *      ]
 * }
 */
export function wordIndexer (phrases) {

    let _index = new Map();

    let commonWords = [
        'a', 'an', 'the', 'this', 'that', 'there', 'it',
        'in', 'on', 'for', 'not', 'your', 'you', 'at',
        'to', 'is', 'us', 'out', 'by', 'i', 'isn\'t'
    ];

    let _addEntry = function(word, phrase, pos) {
        if(commonWords.indexOf(word) === -1) {
            _index.createOrUpdate(word,{"phrase":phrase,"pos":pos});
        }
    };

    return {
        index() {
            for(let [i,phrase] of phrases.entries()) {

                for(let [a,word] of phrase.entries()) {
                    _addEntry(word,i,a);
                }
            }
        },
        /**
         * use as callback to populate the index alongside other process
         * @param {Number} index - the index within the phrase of the word to be added
         * @param {String} word - the word
         * @param (Number} phraseIndex - the index of the phrase in the list. this is binded to the callback!
         */
        addEntry(word, pos) {
            _addEntry(word,this.phraseIndex,pos);
        },
        wordIndex : _index
    }
}