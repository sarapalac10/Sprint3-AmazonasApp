import { collection, getDocs } from 'firebase/firestore';
import { useEffect } from 'react';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { db } from './firebase/firebaseConfig';
import accionAgregar from './redux/actions/accionAgregar';
import AppRouter from './router/AppRouter';
import { RiShoppingCartFill, RiShoppingBasket2Fill } from "react-icons/ri";

function App() {
  const productos = [];
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const listar = async () => {
      const querySnapshot = await (getDocs(collection(db, 'ProductosAmazonas')))
      querySnapshot.forEach(element => {
        productos.push({
          id: element.id,
          data: element.data()
        })
      });
    }
    listar()
    
    console.log(productos);
    
    setTimeout(() => {
      console.log("Esperando....");
      setLoading(false);
      dispatch(accionAgregar(productos))
    }, 1000)

  }, [])
  
  if(loading){
    return <h1 className='texto-espera'><RiShoppingCartFill /> Estamos trabajando ... <RiShoppingBasket2Fill /> </h1>
  }

  return (
    <AppRouter />
  );
}

export default App;
