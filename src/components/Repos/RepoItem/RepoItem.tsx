import styles from './RepoItem.module.scss';

interface RepoItemProps { }

export const RepoItem = ({ }: RepoItemProps) => (
  <div className={styles.repoItem}>
    RepoItem Component
  </div>
);
