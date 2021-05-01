import Header from '@/components/header';
import '@/screen/shared/styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-sans">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
