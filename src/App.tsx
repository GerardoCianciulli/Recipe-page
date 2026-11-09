import omeletteImage from './assets/images/image-omelette.jpeg'
import LabelledText from './components/LabelledText'
import NutritionTable from './components/NutritionTable'
import Section from './components/Section'
import { recipe } from './data/recipe'
import './App.css'

const App = () => (
  <main className="page">
    <h1 className="visually-hidden">Recipe page</h1>

    <article className="recipe" aria-labelledby="recipe-title">
      <img
        className="recipe__image"
        src={omeletteImage}
        alt={recipe.image.alt}
        width={656}
        height={300}
      />

      <div className="recipe__content">
        <header className="recipe__header">
          <h2 id="recipe-title" className="recipe__title">
            {recipe.title}
          </h2>
          <p>{recipe.description}</p>
        </header>

        <Section id="preparation" title="Preparation time" variant="highlight">
          <ul className="list list--bullet">
            {recipe.preparation.map((item) => (
              <li key={item.label}>
                <LabelledText {...item} />
              </li>
            ))}
          </ul>
        </Section>

        <Section id="ingredients" title="Ingredients">
          <ul className="list list--bullet">
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </Section>

        <hr className="divider" />

        <Section id="instructions" title="Instructions">
          <ol className="list list--numbered">
            {recipe.instructions.map((step) => (
              <li key={step.label}>
                <LabelledText {...step} />
              </li>
            ))}
          </ol>
        </Section>

        <hr className="divider" />

        <Section id="nutrition" title="Nutrition">
          <p id="nutrition-description">{recipe.nutritionIntro}</p>
          <NutritionTable
            nutrients={recipe.nutrition}
            descriptionId="nutrition-description"
          />
        </Section>
      </div>
    </article>
  </main>
)

export default App
