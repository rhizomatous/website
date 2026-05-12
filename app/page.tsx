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

        <div className={styles.blurb}>
          <Text>let's democratize thinking machines.</Text>
        </div>

        <Text as="div" font="sans" size="small" color="muted" className={styles.contact}>
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
