import React, {useState} from "react";
import FilmList from "../components/FilmList";
import ReleaseForm from "../components/ReleaseForm"

const FilmBox= () => {

    const [releases, setReleases] = useState(

        [
            {
              id: 1,
              name: "Spider-Man: Into the Spider-Verse",
              url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
            },
            {
              id: 2,
              name: "Life Itself",
              url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
            },
            {
              id: 3,
              name: "Mary Queen of Scots",
              url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
            },
            {
              id: 4,
              name: "The Lego Movie 2: The Second Part", url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
            },
            {
              id: 5,
              name: "Captain Marvel",
              url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
            }
          ]

    );

    const addRelease  = (submittedRelease) => {
      submittedRelease.id = Date.now();
      const updateReleases = [...releases, submittedRelease];
      setReleases(updateReleases);
    };

    return (
        <>
            <h2>Upcoming film releases for the UK</h2>
            <FilmList releases={releases} />
            <h3><a href="https://www.imdb.com/calendar/?region=gb">View more upcoming releases</a></h3>
            <h3>Add a new release:</h3>
            <ReleaseForm onReleaseSubmit={(release) => addRelease(release)} />
        </>
    );
};

export default FilmBox;