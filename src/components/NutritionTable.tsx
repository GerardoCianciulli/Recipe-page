import type { Nutrient } from '../data/recipe'

type NutritionTableProps = {
  nutrients: Nutrient[]
  descriptionId: string
}

const NutritionTable = ({ nutrients, descriptionId }: NutritionTableProps) => (
  <table className="nutrition-table" aria-describedby={descriptionId}>
    <tbody>
      {nutrients.map(({ name, value }) => (
        <tr key={name}>
          <th scope="row">{name}</th>
          <td>{value}</td>
        </tr>
      ))}
    </tbody>
  </table>
)

export default NutritionTable
