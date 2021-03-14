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
        <title>Create Next App</title>
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
          <Cards 
            imgSrc="https://images2.imgbox.com/a0/cb/s1h2RuR0_o.png"
            title="FalconSat #1"
            missionIds={[123456, 123456, 123456]}
            launch_year={2006}
            launch_success={true}
            land_success={true}
          />
        </section>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  console.log(context.query);
  const res = await getMainData();

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