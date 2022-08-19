import '../styles/globals.css'
import 'strooks/dist/styles.scss'
import 'styles/strooks-extend.scss'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
