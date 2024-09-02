import Header from "./components/header";
import Guitarra from "./components/guitarra";
import {useCart} from "./hooks/cart"

function App() {
  const {cleancart,
    decrementaritems,
    incrementaritems,
    removecart,
    addCart,
    data,
    cart,
    isEmpty,total} = useCart() 

  return (
    <>
      <Header
        removecart={removecart}
        cart={cart}
        incrementaritems={incrementaritems}
        decrementaritems={decrementaritems}
        cleancart={cleancart}
        isEmpty={isEmpty}
        total={total}
      />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
          {data.map((guitarra) => (
            <Guitarra
              key={guitarra.id}
              guitarra={guitarra}
              addCart={addCart}
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
  );
}

export default App;