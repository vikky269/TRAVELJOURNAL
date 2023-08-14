
import './App.css'
import { Card } from './components/Card'
import { Navbar } from './components/Navbar'
import data from './data'

function App() {
  const cards = data.map(item =>{
    return <Card 
            key = {item.key}
            imageUrl = {item.imageUrl}
            location = {item.location}
            googleMapsUrl ={item.googleMapsUrl}
            title = {item.title}
            startDate = {item.startDate}
            endDate = {item.endDate}
            description = {item.description}
         />
  })

  return (
    <>
      <Navbar />
      <section className='cards-list'>
        {cards}
      </section>
      
    </>
  )
}

export default App
