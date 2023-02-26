import { ThreeDots } from 'react-loader-spinner';
import styles from './Loader.module.scss';
function Loader() {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#C75D70"
      ariaLabel="three-dots-loading"
      wrapperClass={styles.loader}
      visible="true"
    />
  );
}

export default Loader;
