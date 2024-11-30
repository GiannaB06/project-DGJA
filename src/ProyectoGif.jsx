import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const ProyectoGif = () => {


const [categories, setCategories] = useState(["Barbie","hola"]);
const onAddCategory = () => {
    setCategories([...categories,"POU"]);


}

return(
    <>
        {/*titulo*/}
        <h1>GifExpert</h1>

        {/*input*/} 
        <AddCategory/>

        <button onClick={ onAddCategory }>Agregar</button> 

        <ol>
            {categories.map(category=> {
                return <li key={ category }> {category} </li>


            })
            }
           
    


        </ol>

    
    
    
    </>
)

}; 