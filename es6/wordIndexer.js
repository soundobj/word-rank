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

    let wordIndex = new Map();

    let commonWords = [
        'a', 'an', 'the', 'this', 'that', 'there', 'it',
        'in', 'on', 'for', 'not', 'your', 'you', 'at',
        'to', 'is', 'us', 'out', 'by', 'i', 'isn\'t'
    ];

    return {
        index() {
            for(let [i,phrase] of phrases.entries()) {

                for(let [a,word] of phrase.entries()) {

                    if(commonWords.indexOf(word) === -1) {
                        wordIndex.createOrUpdate(word,{"phrase":i,"pos":a});
                    }
                }
            }
        },
        wordIndex : wordIndex
    }
}