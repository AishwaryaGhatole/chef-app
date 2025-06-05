import React from "react"
import IngredientsList from "./IngredientsList"
import ClaudeRecipe from "./ClaudeRecipe"
import { getRecipeFromMistral } from './ai';

export default function Main (){

  const [ingredients, setIngredients] = React.useState([])
  const [recipe, setRecipe] = React.useState("")
      const recipeSection = React.useRef(null)

    React.useEffect(() => {
        if (recipe !== "" && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView({behavior : "smooth"})
        }
    }, [recipe])

  const addIngredientItems = ingredients.map((ingredient)=>(
    <li key={ingredient} className="ingredient-list-li">{ingredient}</li>
  ))


  function addIngredients(formData){
    const newIngredients = formData.get("ingredient")
    setIngredients(prevIngredient => [...prevIngredient, newIngredients])
  }

  const getRecipe = async () =>{
    const response = await getRecipeFromMistral(ingredients)
    console.log(ingredients, response)
    setRecipe(response)

  }

  return (
    <main>
      <form action={addIngredients} className="add-ingredient-form">
      <label htmlFor="add ingredient">{}</label>
      <input type="text" placeholder="e.g. oregano" aria-label="add-ingredient" name="ingredient"/>
      <button type="submit">add ingredients</button>
      </form>
      {ingredients.length > 0 ? 
      <IngredientsList
        ref={recipeSection}
        addIngredientItems={addIngredientItems}
        ingredients={ingredients} 
        getRecipe={getRecipe}
      /> 
      : null}
      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  )
}



























