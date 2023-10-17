import React from 'react';
import { GithubRepository } from '../../../types'
import styles from "./RepoItem.module.scss"

import { BsFillStarFill, BsEyeFill } from "react-icons/bs"
import { formatDate } from '../../../utils/formatDate';

import { getLanguageIcon } from '../../../utils/getLanguageIcon';

const RepoItem: React.FC<{ repository: GithubRepository }> = ({ repository }) => {
  const IconComponent = getLanguageIcon(repository.language ?? 'Not specified');
  return (
    <div className={styles.repoItem}>
      <a href={repository.html_url} target="_blank" rel="noopener noreferrer">
        {repository.full_name}
      </a>
      <p className={styles.language}>
        {IconComponent ? <IconComponent /> : 'Not specified'}
      </p>
      <div className={styles.flexBlock}>
        <p className={styles.stars}><BsFillStarFill /> {repository.stargazers_count}</p>
        <p className={styles.watchers}><BsEyeFill /> {repository.watchers_count}</p>
      </div>
      <div className={styles.flexBlock}>
        <p className={styles.createdAt}>Created at: {formatDate(repository.created_at)}</p>
        <p className={styles.updatedAt}>Updated at: {formatDate(repository.updated_at)}</p>
      </div>
      <a href={repository.homepage} target='_blank'>Live Link</a>
    </div>
  );
};

export default RepoItem;
