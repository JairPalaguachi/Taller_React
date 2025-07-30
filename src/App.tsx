import './App.css'
import { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid2'
import DishTable from './components/DishTable'
import Student from './components/Student'

// PENDIENTE: Cree la interfaz
import { Dish } from './interface/Dish'


function App() {

  let url = "https://raw.githubusercontent.com/aavendan/datos/refs/heads/main/tasteatlas/bestdishes100-2425.json"

  // PENDIENTE: Variable de estado y la función de modificación. 
  const [dish, SetDish] = useState<Dish[]>([])


  // PENDIENTE: 
  // Realizar una petición asíncrona a la URL. La respuesta es un JSON. 
  // Al recibir la respuesta, actualice la variable de estado.


  useEffect(() => {
    const fecthDishes = async () => {
      try {
        const response= await fetch(url);
        const data: Dish[] = await response.json();
        SetDish(data);

      } catch(error) {
        console.log("Error", error);
      } 
    }
     fecthDishes();
  }, [])

  useEffect(() => { }, [])



  return (
    <Grid container spacing={5}>

      {/* Student */}
      <Grid size={{ xs: 12 }}>

        {/* PENDIENTE: Envíe sus datos (apellidos, nombres y paralelo) como props del componente */}
        <Student
          apellidos= "Jair"
          nombres= "Palaguachi"
          paralelo= "#2"
        />

      </Grid>

      {/* DishTable */}
      <Grid size={{ xs: 12 }}>

        {/* PENDIENTE: Envíe la variable de estado como prop */}
        <DishTable data={dish }></DishTable>

      </Grid>


    </Grid>
  )
}

export default App
