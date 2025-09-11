import styles from '../styles/Home.module.css';

interface CardProps {
  coverImage: string;
  titleImage: string;
  characterImage: string;
}

const Card: React.FC<CardProps> = ({ coverImage, titleImage, characterImage }) => {
  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <img src={coverImage} className={styles.coverImage} alt="Cover" />
      </div>
      <img src={titleImage} className={styles.title} alt="Title" />
      <img src={characterImage} className={styles.character} alt="Character" />
    </div>
  );
};

export default Card;