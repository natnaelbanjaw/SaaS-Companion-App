import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
    
<section className='home-section'>
  <CompanionCard
  id="123"
  name="Neura the Brainy Explorer"
  topic="Neural Network of the Brain"
  subject="Science"
  duration={45}
  color="#ffda6e"
  />

    <CompanionCard
  id="124"
  name="Robo the Tech Guru"
  topic="AI and Robotics"
  subject="Technology"
  duration={30}
  color="#e5d0ff"
  />

  <CompanionCard
  id="125"
  name="Luna the Space Explorer"
  topic="Astrophysics"
  subject="Science"
  duration={60}
  color="#BDE7FF"
  />
</section>

<section className='home-section'>
  <CompanionsList
  title="Recently completed sessions"
  companions={recentSessions}
  classNames="w-2/3 max-lg:w-full"
  />
</section>

<section className='home-section'>
  <CTA />
</section>
    </main>
  )
}

export default Page