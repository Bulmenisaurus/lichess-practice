import config from '../config.json';

import { getStudy } from './lichessApi';
import { StudyMove, parse } from './pgnParser';

import { ChessBoard } from './board';

//https://github.com/niklasf/chessops

//TODO: stuff breaks when a line from the pov of white ends on black's turn

export type Variation = { line: StudyMove[]; orientation: 'white' | 'black' };

const shuffle = <T>(arr: readonly T[]) => {
    let array = [...arr];

    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
};

const main = async () => {
    const studyPgn = await getStudy(config.studyId, config.accessToken);
    console.log(studyPgn);
    const parsed = parse(studyPgn);

    const chessBoardContainer = document.getElementById('chess-container')!;
    const board = new ChessBoard(chessBoardContainer);

    const allVariations: Variation[] = [];
    parsed.asWhite.variations.forEach((variation) => {
        allVariations.push({ line: variation, orientation: 'white' });
    });

    parsed.asBlack.variations.forEach((variation) => {
        allVariations.push({ line: variation, orientation: 'black' });
    });

    board.loadChapter(shuffle(allVariations));
};

export const setHint = (hint: string | undefined) => {
    const hintContainer = document.getElementById('hint') as HTMLDivElement;

    // https://stackoverflow.com/a/3955238/13996389
    while (hintContainer.firstChild) {
        hintContainer.firstChild.remove();
    }
    hintContainer.classList.remove('empty');

    if (hint === undefined) {
        hintContainer.classList.add('empty');
        hintContainer.innerText = 'No comment';
    } else {
        hintContainer.innerText = hint;
    }
};

main();
