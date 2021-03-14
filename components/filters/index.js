import React from 'react';
import styles from './Filters.module.css';

const Filters = ({ heading, _key, filterData, selected }) => {
  console.log(selected);
  console.log(filterData[0]);
  return <article>
    <header>
      {heading}
    </header>
    <hr />
    <div className={styles.filterCard}>
      {filterData.map(data => {
        console.log(data === selected);
        return <button key={data} className={data === selected ? styles.selected : undefined}>{data}</button>
      })}
    </div>
  </article>
}

export default Filters;