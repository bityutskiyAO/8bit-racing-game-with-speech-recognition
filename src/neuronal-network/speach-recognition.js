import * as speechCommands from '@tensorflow-models/speech-commands';

export const initSpeechRecognitionModel = async () => {
    const recognizer = speechCommands.create('BROWSER_FFT');
    await recognizer.ensureModelLoaded();
    return recognizer
}

export function predictWord(recognizer, callback, isPause) {
    // Array of words that the recognizer is trained to recognize.
    const words = recognizer.wordLabels();
    recognizer.listen(({scores}) => {
        // Turn scores into a list of (score,word) pairs.
        if(!isPause) {
            scores = Array.from(scores).map((s, i) => ({score: s, word: words[i]}));
            // Find the most probable word.
            scores.sort((s1, s2) => s2.score - s1.score);
            console.log('TI CHE SUKA EBALAY', scores[0])
            callback(scores[0].word)
        }
    }, {
        overlapFactor: 0.4,
        probabilityThreshold: 0.99
    })
}
