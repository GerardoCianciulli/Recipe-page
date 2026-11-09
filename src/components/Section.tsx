import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  title: string
  variant?: 'default' | 'highlight'
  children: ReactNode
}

const Section = ({ id, title, variant = 'default', children }: SectionProps) => {
  const headingId = `${id}-heading`

  return (
    <section
      className={`section section--${variant}`}
      aria-labelledby={headingId}
    >
      <h2 id={headingId} className="section__title">
        {title}
      </h2>
      {children}
    </section>
  )
}

export default Section
