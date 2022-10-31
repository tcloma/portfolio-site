import '../styles/globals.css'
import Head from 'next/head'

import type { AppProps } from 'next/app'
import Layout from '../components/layouts/Layout'
import Transition from '../components/layouts/Transition'

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <>
         <Head>
            <title>tcloma.dev</title>
            <meta name='author' content='Tyrone Cloma' />
            <meta name='description' content='Personal Portfolio Website' />
            <link rel='icon' href='/icons/favicon.ico' />
            <link
               rel='apple-touch-icon'
               sizes='180x180'
               href='/icons/apple-touch-icon.png'
            />
            <link
               rel='icon'
               type='image/png'
               sizes='32x32'
               href='/icons/favicon-32x32.png'
            />
            <link
               rel='icon'
               type='image/png'
               sizes='16x16'
               href='/icons/favicon-16x16.png'
            />
            <link rel='manifest' href='/icons/site.webmanifest' />
         </Head>
         <Layout>
            <Transition>
               <Component {...pageProps} />
            </Transition>
         </Layout>
      </>
   )
}

export default MyApp
