import React from 'react';
import styles from './Filters.module.css';
import { useRouter } from 'next/router';

const Filters = ({ heading, _key, filterData, selected }) => {

  const router = useRouter();
  const currentQuery = router.query;

  const handleClick = (id, value) => {
    const newQuery = {
      ...currentQuery,
      [id]: value
    }
    router.push({ pathname: router.pathname, query: newQuery });
  }

  return <article>
    <header>
      {heading}
    </header>
    <hr />
    <div className={styles.filterCard}>
      {filterData.map(data => {
        return <button 
          key={data} 
          className={data === selected ? styles.selected : undefined}
          onClick={() => handleClick(_key, data)}
        >
          {data}
        </button>
      })}
    </div>
  </article>
}

export default Filters;