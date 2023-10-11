export const getStudy = async (studyId: string, accessToken: string): Promise<string> => {
    //TODO: this doesn't work?
    const cached = localStorage.getItem(studyId);
    const url = new URL(`https://lichess.org/api/study/${studyId}.pgn`);

    url.searchParams.set('clocks', 'false');
    url.searchParams.set('comments', 'true');
    url.searchParams.set('source', 'true');
    url.searchParams.set('orientation', 'true');

    try {
        const res = await fetch(url, { headers: { Authorization: 'Bearer ' + accessToken } });
        return await res.text();
    } catch (e) {
        if (cached === null) {
            throw e;
        } else {
            console.error(e);
            console.error('using cached version');
            return cached;
        }
    }
};
