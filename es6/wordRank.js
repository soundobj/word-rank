export class WordRank {
	
	constructor(wordOverlap){
		this.wordOverlap = wordOverlap;
		this.phrases;
	}

	setPhrases(phrases) {
		this.phrases = phrases;
	}

	buildWordMap() {

		/*
		 clone the phrase and map it to its original

		 sanitize clone to build word map.
		 - remove punctuation
		 - remove empty strings
		 - remove common words

		 we should build two maps
		 -one with global words to map
		 another with phrase word index relation
		 i.e. "phrasing it makes very interesting phrases"
		 global map { 	phrase : [0] => phraseId
						very : [0]
						interest: [0]
						make : [0]
					}
		phraseObject.matchableWords = {
			phrase: [0,5],
			make: [2],
			very: [3],
			interest: [4]
		}
		*/
		
	}

}