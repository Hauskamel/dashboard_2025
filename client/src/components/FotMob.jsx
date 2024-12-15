// git feature/fotmob

import {useEffect, useState} from "react";

import soccerdata as "sd";

export default function FotMob () {
    const [matchData, setMatchData] = useState();

    useEffect(() => {
        fetch('')
            .then(response => response.json())
            .then(json => setMatchData(json))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            {matchData ? <pre>{JSON.stringify(matchData, null, 2)}</pre> : 'Loading...'}
        </div>
    )
}