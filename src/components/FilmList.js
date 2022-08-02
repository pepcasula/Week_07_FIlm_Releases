import React from "react";
import Release from "./Release";

const FilmList = ({releases}) => {

    const releaseNodes = releases.map(release => {
        return (
            <Release key={release.id}>
                <ul>
                    <li><a href ={release.url}>{release.name}</a></li>
                </ul>
            </Release>
        );
    });

    return (
        <>
            {releaseNodes}
        </>
    );
};

export default FilmList;