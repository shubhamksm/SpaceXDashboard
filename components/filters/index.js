import React from 'react';
import styles from './Filters.module.css';

const Filters = ({ heading, _key, filterData, selected }) => {
  return <article>
    <header>
      {heading}
    </header>
    <hr />
    <div className={styles.filterCard}>
      {filterData.map(data => {
        return <button key={data} className={data === selected ? styles.selected : undefined}>{data}</button>
      })}
    </div>
  </article>
}

export default Filters;