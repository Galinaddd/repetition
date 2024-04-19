export const MovieCard = ({ info }) => {
  console.log(info);
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w500${info.poster_path}`}
        alt={info.name || info.title}
        width="300"
      />
      <h3>{info.title || info.original.name}</h3>
      <p>
        <span>Vote/Votes</span>{' '}
        <span>
          {info.vote_average}/{info.vote_count}
        </span>
      </p>
      <p>
        Popularity <span>{info.popularity}</span>
      </p>
      <p>
        Original Title <span>{info.original_title || '-'}</span>
      </p>
      <p>
        Genre <span>{getGenres(info.genres)}</span>
      </p>
      <h3>About</h3>
      Dune: Part Two 8.3/2958 Popularity 2938.7 Original Title Dune: Part Two
      Genre Science Fiction, Adventure ABOUT Follow the mythic journey of Paul
      Atreides as he unites with Chani and the Fremen while on a path of revenge
      against the conspirators who destroyed his family. Facing a choice between
      the love of his life and the fate of the known universe, Paul endeavors to
      prevent a terrible future only he can foresee.
    </>
  );
};

function getGenres(arrOfGenres) {
  return arrOfGenres.map(genr => genr.name).join(', ');
}
