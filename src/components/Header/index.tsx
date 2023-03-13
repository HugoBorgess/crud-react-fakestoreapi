import styles from './Header.module.scss';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const rotas = [{ 
    to: '/usuarios',
    label: 'Usuários'
  }];

  return (
    <nav className={styles.menu}>
      <div className={styles.menu__logo} onClick={() => navigate('/')}>
        Hugo Borges
      </div>
      <ul className={styles.menu__lista}>
        {rotas.map((rota, index) => (
          <li key={index} className={styles.menu__link}>
            <Link to={rota.to}>
              {rota.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}