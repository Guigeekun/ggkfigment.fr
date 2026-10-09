import { useLang } from '../i18n/LangContext'
import styles from './Footer.module.css'

export default function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.item}>
          © {year} Guilleme Benoit — figment<span className={styles.dot}>.</span> {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}
