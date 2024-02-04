'use client'
import EmblaCarousel from "@/components/Carousel/carousel"
import withLayout from '@/components/Layout/Layout';

import './base.scss'
import './embla.scss'

import { EmblaOptionsType } from 'embla-carousel'

const Home = () => {

    const OPTIONS: EmblaOptionsType = { loop: true }
    const SLIDE_COUNT = 5
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
    return <>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </>
}

export default withLayout(Home);