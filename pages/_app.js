import { MoralisProvider } from "react-moralis";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  //put moralis keys in the .env with wallet serverURL and application ID of moralis server set up
  /*
   click on View Details to get the information necessary to link our Next.js app 
   to our Moralis server. Take note of the Server URL and Application ID.
 
    <MoralisProvider></MoralisProvider>s
  
   */

  return <Component {...pageProps} />;
}

export default MyApp;
