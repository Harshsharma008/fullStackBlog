import Footer from '@/components/footer'
import Hero from '@/app/about/components/hero'
import LogoStatics from '@/components/logoStatics'
import Mission from '@/components/mission'
import Navbar from '@/components/navbar'
import Statics from '@/components/statics'

import Vision from '@/components/vision'
import { smallCard } from '@/utils/cardData'


function page() {
    return (
        <div  >
            <Navbar />
            <Hero/>
            <LogoStatics/>
            <Vision cardData={smallCard}/>
            <Mission cardData={smallCard}/>
            <br/>
            <hr/>
            <Statics/>
            <br/>
            <hr/>
           

            <Footer />
        </div>
    )
}

export default page