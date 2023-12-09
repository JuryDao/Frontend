import "@/styles/globals.css";
import { useEffect, useState } from "react";
import { AnonAadhaarProvider } from "anon-aadhaar-react";

const app_id = process.env.REACT_APP_PUBLIC_APP_ID || "";

export default function App({ Component, pageProps }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <>
      {ready ? (
        <AnonAadhaarProvider _appId={app_id}>
          <Component {...pageProps} />
        </AnonAadhaarProvider>
      ) : null}
    </>
  );
}
