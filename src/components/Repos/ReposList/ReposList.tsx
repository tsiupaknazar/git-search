import { GithubRepository } from 'types';
import styles from './ReposList.module.scss';
import RepoItem from '../RepoItem/RepoItem';

interface ReposListProps {
  repositories: GithubRepository[];
}

const ReposList: React.FC<ReposListProps> = ({ repositories }) => {
  return (
    <div className={styles.reposListBlock}>
      <h2 className={styles.header}>Repositories List</h2>
      <ul className={styles.reposList}>
        {repositories.map((repo) => (
          <RepoItem repository={repo} />
        ))}
        {repositories.length === 0 && (
          <h2 className={styles.header}>Input some username and repos will show here</h2>
        )}
      </ul>
    </div>
  );
};

export default ReposList;
