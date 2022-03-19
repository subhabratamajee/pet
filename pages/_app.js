import '../styles/style.css'
import '../styles/form.css'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

function MyApp({ Component, pageProps }) {

  
  return (
    <>
      <Head>
        <title>Pet Care App</title>
      </Head>

      <div className="top-bar">
        <div className="nav">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/new">
            <a>Add Pet</a>
          </Link>
        </div>

        {/* <Image
          id="title" height={20} width={20} layout="fill"
          src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Pet_logo_with_flowers.png"
          alt="pet care logo"
        /> */}
      </div>
      <div className="grid wrapper">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
