import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
    return (
        <Html>
            <Head>
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
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
export default Document