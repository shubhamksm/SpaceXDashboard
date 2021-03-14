import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {
  filtersLaunchYears,
  launchConditions
} from '../constants';
import { getMainData } from '../api/main';

export default function Home({ missions }) {

  // console.log(missions);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h2>SpaceX Launch Programs</h2>
      </header>
      <main>
        <section>
          <header>
            <h3>Filters</h3>
          </header>
          <article>
            <header>
              Launch Year
            </header>
            <hr />
            <div class="filter-card">
              {filtersLaunchYears.map(year => {
                return <button>{year}</button>
              })}
            </div>
          </article>
          <article>
            <header>
              Successful Launch
            </header>
            <hr />
            <div class="filter-card">
              <button>True</button>
              <button>False</button>
            </div>
          </article>
          <article>
            <header>
              Successful Landing
            </header>
            <hr />
            <div class="filter-card">
              <button>True</button>
              <button>False</button>
            </div>
          </article>
        </section>
      </main>
      <footer>
        Developed By: Shubham Khandelwal
      </footer>
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