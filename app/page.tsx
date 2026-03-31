import { Heading } from "./_components/Heading/Heading"
import { Link } from "./_components/Link/Link"
import { Text } from "./_components/Text/Text"
import styles from "./page.module.css"

export default function Home() {
  return (
    <main className={styles.page}>
      <Heading level="1" className={styles.wordmark}>
        Atelier Rhizome
      </Heading>

      <div className={styles.manifesto}>
        <Text>
          We believe the transformative power of artificial intelligence should
          belong to everyone — not locked behind proprietary walls, not
          concentrated in the hands of a few, but shared freely as a common
          inheritance of our species. Atelier Rhizome exists to make that belief
          real.
        </Text>

        <Text>
          Our work is rooted in the conviction that openness and understanding
          go hand in hand. We champion open models that anyone can study, adapt,
          and build upon. We pursue interpretability because intelligence we
          cannot understand is intelligence we cannot trust. We develop local
          models that run on the hardware people already own, free from the
          tether of distant servers. And we relentlessly optimize for efficiency,
          because a model that demands a datacenter to run is a model that
          excludes most of the world.
        </Text>

        <Text>
          This is not work that any one person or institution can do alone.
          Like the rhizome — that tangle of roots with no center and no
          hierarchy — we grow by connecting. Every contribution, from every
          corner of the world, strengthens the whole. The goal is simple and
          vast: a future where humans and machines learn from each other, work
          together, and share in the benefit.
        </Text>
      </div>

      <Text as="div" font="sans" size="small" color="muted" className={styles.contact}>
        <Link href="mailto:hello@example.com">hello@example.com</Link>
        <span aria-hidden="true">&middot;</span>
        <Link href="https://github.com/atelier-rhizome" target="_blank" rel="noopener noreferrer">GitHub</Link>
      </Text>
    </main>
  )
}
