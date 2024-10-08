import styles from './Layout.module.css'

const Layout = ({children}) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Crypto App</h1>
        <p>
          <a href="https://www.botostart.ir">Botostart</a> | ReactJS tutorial
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Seyed Ali Taghawi</p>
      </footer>
    </>
  );
};

export default Layout;