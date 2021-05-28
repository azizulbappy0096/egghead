// modules
import Head from 'next/head'
import Footer from '../src/components/Footer'

// components
import HomeMain from '../src/components/HomeMain'

export default function Home() {
  return (
    <div>
      <Head>
        <title>egghead.io</title>
        <meta name="description" content="Landing page" />
        
      </Head>

      <HomeMain />
      
      <Footer />
     
     
    </div>
  )
}
