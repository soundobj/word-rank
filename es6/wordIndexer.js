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

    let wordIndex = {};

    let commonWords = [
        'a', 'an', 'the', 'this', 'that', 'there', 'it',
        'in', 'on', 'for', 'not', 'your', 'you', 'at',
        'to', 'is', 'us', 'out', 'by', 'I'
    ];

    return {
        index() {
            for(let [i,phrase] of phrases.entries()) {

                for(let [a,word] of phrase.entries()) {

                    if(commonWords.indexOf(word) === -1) {
                        let entry = {"phrase":i,"pos":a};

                        if(!wordIndex[word]) {
                            wordIndex[word] = [entry];
                        } else {
                            wordIndex[word].push(entry);
                        }
                    }
                }
            }
        },
        wordIndex : wordIndex
    }
}