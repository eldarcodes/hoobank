import { Poppins } from "next/font/google";

import "~/styles/globals.css";

import { type AppType } from "next/dist/shared/lib/utils";

// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
