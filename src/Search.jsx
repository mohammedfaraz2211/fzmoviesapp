import React from 'react';
import { useGlobalContext } from './context';

const Search = () => {
  const { serachTitle, setSerachTitle , iserror } = useGlobalContext()
  return (
    <>
      <section className='search-section'>
        <h2>
          Search your favourite Movie
        </h2>
        <form action='#' onSubmit={(e) => e.preventDefault()}>
          <div>
            <input type="text" value={serachTitle} placeholder="search movie here" onChange={(e)=> setSerachTitle(e.target.value)}></input>
          </div>
        </form>
        <div className='card-error'>
          <p>{iserror.show && iserror.msg}</p>
        </div>
      </section>
    </>
  );
}

export default Search;
