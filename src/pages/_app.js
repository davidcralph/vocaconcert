import { useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';

export default function Website({ Component, pageProps }) {
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      document.body.classList.add('light');
    } else {
      document.body.classList.add('dark');
    }
  }, []);
  return <Component {...pageProps} />;
}