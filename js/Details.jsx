import React from 'react';
import Header from './Header';

const Details = (props) => {
  const { title, description, year, poster, trailer } = props.show;

  return (
    <div className="details">
      <Header />
      <section>
        <h1>{title}</h1>
        <h2>({year})</h2>
        <img src={`../public/img/posters/${poster}`} alt={`Post for ${title}`}/>
        <p>{description}</p>
      </section>
      <div>
        <iframe
          src={`http://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;show-info=0`}
          frameBorder="0"
          allowFullScreen
          title={`Trailer from ${title}`}
        />
      </div>
    </div>
   );
}

export default Details;
