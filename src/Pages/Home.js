import React from 'react'
import { BlueBackgrondSection } from '../components/BlueBackgrondSection'
import Cta from '../components/Cta'
import { Sectiongrid } from '../components/Sectiongrid'
import ServiceSection from '../components/ServiceSection'


export const Home = () => {
  return (
    <div>
        <Cta />
        <Sectiongrid />
        <ServiceSection />
        <BlueBackgrondSection />

    </div>
  )
}
