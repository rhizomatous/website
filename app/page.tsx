import { Heading } from "./_components/Heading/Heading";
import { Link } from "./_components/Link/Link";
import { Text } from "./_components/Text/Text";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <Heading level="1" className={styles.wordmark}>
          atelier rhizome
        </Heading>

        <div className={styles.manifesto}>
          <Text>
            the transformative power of artificial intelligence belongs to everyone. not locked
            behind proprietary walls, not concentrated in the hands of a few, but shared freely as
            the common inheritance of our species.
          </Text>

          <Text>
            our work rests on a conviction: that common good cannot be achieved without openness &
            self-determination. we champion open models that anyone can study, adapt, and build
            upon. weights you can hold, run, fork, and remix. we pursue interpretability because
            understood intelligence can become public intelligence. critiqued in public, improved in
            public, held in public. we focus on models that run locally on the hardware people
            already own. a system that demands a datacenter is a system that excludes most of the
            world.
          </Text>

          <Text>let's democratize thinking machines.</Text>
        </div>

        <Text as="div" font="sans" size="small" color="muted" className={styles.contact}>
          <Link href="mailto:hey@vivsha.ws">contact</Link>
          <span aria-hidden="true">&middot;</span>
          <Link href="https://huggingface.co/rhizomatous" target="_blank" rel="noopener noreferrer">
            HuggingFace
          </Link>
          <span aria-hidden="true">&middot;</span>
          <Link href="https://github.com/rhizomatous" target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>
        </Text>
      </div>

      <div className={styles.image}>
        <picture>
          <source srcSet="/roots.webp" type="image/webp" />
          <img src="/roots.jpg" alt="" />
        </picture>
      </div>
    </main>
  );
}
