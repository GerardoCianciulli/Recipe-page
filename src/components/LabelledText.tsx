import type { LabelledItem } from '../data/recipe'

const LabelledText = ({ label, text }: LabelledItem) => (
  <>
    <strong>{label}</strong>: {text}
  </>
)

export default LabelledText
