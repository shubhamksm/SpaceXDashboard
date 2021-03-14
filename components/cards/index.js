import React from 'react';
import styles from './Cards.module.css';

const Cards = ({ 
  imgSrc, 
  title, 
  missionIds, 
  launch_year, 
  launch_success, 
  land_success 
}) => {
  return <div className={styles.card}>
    <div className={styles.cardHeader}>
      <div className={styles.imgBox}>
        <img src={imgSrc} alt="mission picture" />
      </div>
      <h4>{title}</h4>
    </div>
    <div className={styles.cardBody}>
      <p><b>Mission Ids: </b></p>
      <ul>
        {missionIds.map(missionId => {
          return <li key={missionId}>{missionId}</li>
        })}
      </ul>
      <p>
        <b>Launch Year: </b>
        {launch_year}
      </p>
      <p>
        <b>Successful Launch: </b>
        {launch_success ? launch_success.toString() : 'false'}
      </p>
      <p>
        <b>Successful Landing: </b>
        {land_success ? land_success.toString() : 'false'}
      </p>
    </div>
  </div>
}

export default Cards;