import styles from './NotFoundPage.module.scss';

function NotFoundPage() {
  return (
    <main>
      <section className={styles.section}>
        <img
          width={500}
          src={process.env.PUBLIC_URL + '/not_found.jpg'}
          alt="not found"
        />
      </section>
    </main>
  );
}

export default NotFoundPage;
