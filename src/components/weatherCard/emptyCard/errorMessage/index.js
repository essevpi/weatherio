import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import styles from './errorMessage.module.scss';

const ErrorMessage = ({ city }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!city) {
      setVisible(false);
    }

    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [city]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={styles['error-message__container']}
        >
          &quot;{city}&quot; has not been found.
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ErrorMessage;
