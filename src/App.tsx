import { useState } from 'react';

import { Container } from 'components/common/Container';
import { Search } from 'components/common/Search';
import { TheHeader } from 'components/common/TheHeader';
import { UserCard } from 'components/User/UserCard';
import { defaultUser } from 'mock';
import { GithubError, GithubRepository, GithubUser, LocalGithubUser } from 'types';
import { extractLocalUser } from 'utils/exract-local-user';
import { isGithubUser } from 'utils/typeguards';
import ReposList from 'components/Repos/ReposList/ReposList';

const BASE_URL = 'https://api.github.com/users/';
const REPOS_URL = '/repos';

function App() {
  const [user, setUser] = useState<LocalGithubUser | null>(defaultUser);
  const [repositories, setRepositories] = useState<GithubRepository[]>([])
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const fetchUserAndRepos = async (username: string) => {
    const userUrl = BASE_URL + username;
    const reposUrl = userUrl + '/repos';

    try {
      const [userDataResponse, reposDataResponse] = await Promise.all([
        fetch(userUrl),
        fetch(reposUrl)
      ]);

      const userData = await userDataResponse.json() as GithubUser | GithubError;
      const reposData = await reposDataResponse.json() as GithubRepository[];

      if (isGithubUser(userData)) {
        setUser(extractLocalUser(userData));
        setRepositories(reposData);
        setCurrentPage(1);
      } else {
        setUser(null);
        setRepositories([]);
        setCurrentPage(1);
      }
    } catch (error) {
      console.error('Error fetching user and/or repos:', error);
    }
    console.log(repositories);
  };

  const indexOfLastRepo = currentPage * itemsPerPage;
  const indexOfFirstRepo = indexOfLastRepo - itemsPerPage;
  const currentRepos = repositories.slice(indexOfFirstRepo, indexOfLastRepo);

  return (
    <Container>
      <TheHeader />
      <Search hasError={!user} onSubmit={fetchUserAndRepos} />
      {user && (
        <>
          <UserCard
            {...user}
          />
          <ReposList repositories={currentRepos} />
          {repositories.length > itemsPerPage && (
            <div className="pagination">
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={indexOfLastRepo >= repositories.length}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </Container>
  );
}

export default App;
