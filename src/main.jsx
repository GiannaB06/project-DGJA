/*import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'*/
// Importamos la biblioteca de React
import React from 'react'
// Importamos la biblioteca ReactDOM, que proporciona métodos específicos del DOM para 
React
import ReactDOM from 'react-dom/client'
// Importamos un componente llamado ProyectoGif desde otro archivo en el mismo directorio
import { ProyectoGif } from './ProyectoGif'
// Creamos un nuevo contenedor de raíz React en el elemento con el id 'root'
// y renderizamos el componente ProyectoGif en él
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {}
    <ProyectoGif/>
  </React.StrictMode>,
)