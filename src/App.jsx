import Header from "./components/header"
import Guitarra from "./components/guitarra"
import { db } from "./data/db"
import { useState, useEffect } from "react"

function App() {

  const [data, setData] = useState(db);
  console.log(data )

  return (
    <>
    <Header/>
    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
           {data.map((guitarra) => (
                <Guitarra
                  key={guitarra.id}
                  guitarra={guitarra}
                />
           ))}
          
        </div>
    </main>


    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>

    </>
  )
}

export default App
