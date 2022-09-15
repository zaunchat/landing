import { Container } from '@components/utils';
import styles from '@styles/components/landing/Register.module.scss';
import { ChangeEvent, useEffect, useState } from 'react';

export function Register() {
  const [email, setEmail] = useState('');
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [sent, setSent] = useState('');
  
  useEffect(() => {
    setSent(window.localStorage.getItem(`sent`) || ``);
  }, []);
  
  function isValidEmail(email: string) {
    if (!email) return false;
    return /^\w+([-+.']\w+)*@(gmail|outlock|hotmail)\.(com|net)*$/.test(email);
  }

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
    if (e.target.value && !isValidEmail(e.target.value)) {
      setError(`this is not a valid email`);
    } else setError('');
  }
  
  function handleClick() {
    if (error) return;

    setSending(true);

    fetch(`https://throbbing-haze-8c92.abdulrahman-8alah.workers.dev/?email=${encodeURIComponent(email)}`)
      .then(() => {
        setSending(false);
        localStorage.setItem('sent', email);
        setSent(email);
      })
      .catch(() => {
        setError(`error happened`);
      });
  }
  return (
    <Container backgroundColor={'transparent'}>
      <div className={styles.register} id="register">
        <div className={styles.title}>
          IS THAT LOOKING INTERESTING?! REGISTER NOW!
        </div>
        <div className={styles.field}>
          <input
            disabled={!!sent}
            type="text"
            value={sent || undefined}
            placeholder="TYPE YOUR EMAIL"
            onChange={handleInput}
          />
          <button
            disabled={!!sent || !!error || sending || !email}
            onClick={handleClick}
          >
            {sending && <>SENDING</>}
            {sent && <>SENT</>}
            {!sent && !sending && <>SEND</>}
          </button>
        </div>
        {error && <div className={styles.error}>* {error}</div>}
        {sent && (
          <div className={styles.registered}>You already registered</div>
        )}
      </div>
    </Container>
  );
}
