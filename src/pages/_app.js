import "@/styles/globals.css";

import ThemeProvidor from "@/context/ThemeContext";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvidor>
      <Component {...pageProps} />
    </ThemeProvidor>
  );
}
