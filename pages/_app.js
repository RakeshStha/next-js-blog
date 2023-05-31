import '@/styles/globals.css'
import { Fragment } from 'react'
import Navigation from '@/components/navigation/Navigation'

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
    <Navigation/>
      <Component {...pageProps} />
    </Fragment>
  )
}
