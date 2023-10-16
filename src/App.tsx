import { useState } from 'react';

import { Container } from 'components/common/Container';
import { Search } from 'components/common/Search';
import { TheHeader } from 'components/common/TheHeader';
import { UserCard } from 'components/User/UserCard';
import { defaultUser } from 'mock';
import { GithubError, GithubUser, LocalGithubUser } from 'types';
import { extractLocalUser } from 'utils/exract-local-user';
import { isGithubUser } from 'utils/typeguards';
import { ReposList } from 'components/Repos/ReposList';

const BASE_URL = 'https://api.github.com/users/';

function App() {
  const [user, setUser] = useState<LocalGithubUser | null>(defaultUser);

  const fetchUser = async (username: string) => {
    const url = BASE_URL + username;

    const res = await fetch(url);
    const user = await res.json() as GithubUser | GithubError;

    if (isGithubUser(user)) {
      setUser(extractLocalUser(user));
    } else {
      setUser(null);
    }
  }

  return (
    <Container>
      <TheHeader />
      <Search hasError={!user} onSubmit={fetchUser} />
      {user && (
        <>
          <UserCard
            {...user}
          />
          <ReposList />
        </>
      )}
    </Container>
  );
}

export default App;
