import { Game, Node as ChessNode, PgnNodeData, parsePgn } from 'chessops/pgn';

interface StudyInfo {
    asWhite: ChapterInfo;
    asBlack: ChapterInfo;
}

export interface ChapterInfo {
    orientation: 'white' | 'black';
    // an array of every single possible set of moves starting from the startpos to one of the leaves
    variations: string[][];
}

export const parse = (pgn: string): StudyInfo => {
    const allGames = parsePgn(pgn);

    if (allGames.length != 2) {
        throw new Error(`Expected 2 games, got ${allGames.length}`);
    }

    const [whitePgn, blackPgn] = allGames;

    return {
        asWhite: getGameInfo(whitePgn),
        asBlack: getGameInfo(blackPgn),
    };
};

const getGameInfo = (game: Game<PgnNodeData>): ChapterInfo => {
    const orientation = game.headers.get('Orientation');
    if (orientation === undefined) {
        throw new Error('No orientation defined');
    }

    if (orientation !== 'white' && orientation !== 'black') {
        throw new Error(
            `Expected orientation to be one of "white" or "black", got "${orientation}"`
        );
    }
    return {
        orientation: orientation,
        variations: allRootLeafPaths(game.moves),
    };
};

// given the current node, return all of the paths from that node to a leaf node
// this effectively gives us all the variations in the study
const allRootLeafPaths = (rootNode: ChessNode<PgnNodeData>): string[][] => {
    const variations: string[][] = [];

    // once we reach a leaf, return an empty variation
    if (rootNode.children.length === 0) {
        return [[]];
    }

    for (const child of rootNode.children) {
        const childVariations = allRootLeafPaths(child);

        for (const childVariation of childVariations) {
            // get the variation starting from this child, including the move that got us to this variation
            variations.push([child.data.san, ...childVariation]);
        }
    }

    return variations;
};
