import '@/styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-sans antialiased">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
