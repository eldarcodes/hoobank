import Head from "next/head";

import { styles } from "~/helpers/styles";
import {
  Business,
  Hero,
  Navbar,
  Stats,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from "~/components";

import { type NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hoobank</title>
      </Head>

      <div className="w-full overflow-hidden bg-primary">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Clients />
            <CTA />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
