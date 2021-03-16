import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { ExperienceBar } from '../components/ExperienceBar'
export default function Home() {
  return (
    <div className="container">
      <ExperienceBar />
    </div>
  )
}
