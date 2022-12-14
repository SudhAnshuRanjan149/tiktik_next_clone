import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";

// LOCAL
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

// CSS
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) {
    return null;
  }

  return (
    <div>
      <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}>
        <Navbar />
        <div className="flex gap-6 md:gap-20">
          <div className="h-[92vh] overflow-hidden xl:hover:overflow-auto">
            <Sidebar />
          </div>

          <div className="mt-4 flex flex-col gap-10 overflow-auto h=[88vh] videos flex-1">
            <Component {...pageProps} />
          </div>
        </div>
      </GoogleOAuthProvider>
    </div>
  );
};

export default MyApp;
