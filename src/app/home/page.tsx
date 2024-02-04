import EmblaCarousel from "@/components/Carousel/carousel"


import './base.scss'
import './embla.scss'

import { EmblaOptionsType } from 'embla-carousel'
export default function Home() {

    const OPTIONS: EmblaOptionsType = { loop: true }
    const SLIDE_COUNT = 5
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
    return <>

        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </>
}