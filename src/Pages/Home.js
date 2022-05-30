import React from 'react'
import { BlueBackgrondSection } from '../components/BlueBackgrondSection'
import Carousel from '../components/Carousel'
import Cta from '../components/Cta'
import { Howitwork } from '../components/Howitwork'
import { Sectiongrid } from '../components/Sectiongrid'
import ServiceSection from '../components/ServiceSection'
import Testimonials from '../components/test1'


export const Home = () => {
  return (
    <div>
        <Cta />
        <Sectiongrid />
        <ServiceSection />
        <Howitwork />
        <Testimonials />

    </div>
  )
}
