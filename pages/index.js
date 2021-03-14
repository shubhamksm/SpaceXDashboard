import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Filters from '../components/filters';
import Cards from '../components/cards';
import {
  filtersLaunchYears,
  launchConditions
} from '../constants';
import { getMainData } from '../api/main';

export default function Home({ missions }) {

  return (
    <div className={styles.container}>
      <Head>
        <title>SpaceX Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.mainHeader}>
        <h2>SpaceX Launch Programs</h2>
      </header>
      <main>
        <section className={styles.filters}>
          <header>
            <h3>Filters</h3>
          </header>
          <Filters 
            heading="Launch Year"
            _key="launch_year"
            filterData={filtersLaunchYears}
            selected={2006}
          />
          <Filters 
            heading="Successful Launch"
            _key="launch_success"
            filterData={launchConditions}
            selected={'True'}
          />
          <Filters 
            heading="Successful Landing"
            _key="land_success"
            filterData={launchConditions}
            selected={'True'}
          />
        </section>
        <section className={styles.missions}>
          {missions.map(mission => {
            return <Cards 
              key={mission.launch_date_unix}
              imgSrc={mission.links.mission_patch_small}
              title={`${mission.mission_name} #${mission.flight_number}`}
              missionIds={mission.mission_id}
              launch_year={mission.launch_year}
              launch_success={mission.launch_success}
              land_success={mission.rocket.first_stage.cores[0].land_success}
            /> 
          })}
        </section>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await getMainData(context.query);

  if (!res) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      missions: res
    },
  }
}