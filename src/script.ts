import config from '../config.json';

import { getStudy } from './lichessApi';
import { parse } from './pgnParser';

import { ChessBoard } from './board';

//https://github.com/niklasf/chessops

export type Variation = { line: string[]; orientation: 'white' | 'black' };

const main = async () => {
    const studyPgn = await getStudy(config.studyId, config.accessToken);
    const parsed = parse(studyPgn);

    const chessBoardContainer = document.getElementById('chess-container')!;
    const board = new ChessBoard(chessBoardContainer);

    const allVariations: Variation[] = [];
    // parsed.asWhite.variations.forEach((variation) => {
    //     allVariations.push({ line: variation, orientation: 'white' });
    // });

    parsed.asBlack.variations.forEach((variation) => {
        allVariations.push({ line: variation, orientation: 'black' });
    });

    board.loadChapter(allVariations);
};

main();
