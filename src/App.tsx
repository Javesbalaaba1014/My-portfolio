import './App.css'
import Header from './Header'
import Hero from './Hero'
import './index.css'
import { WorkExperience } from './WorcCard'
import TechStack from './tech-stack'
import { ParticleEffect } from './components/ParticleEffect'

function App() {
  return (
    <div className="bg-[#0a0118] w-full">
      <ParticleEffect />
      <Header />
      <Hero />
      <WorkExperience />
      <TechStack />
    </div>
  )
}

export default App
