import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import Layout from '../components/layouts/Layout'
import Transition from '../components/layouts/Transition'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Layout>
                <Transition>
                    <Component {...pageProps} />
                </Transition>
            </Layout>
            <Toaster />
        </>
    )
}

export default MyApp
