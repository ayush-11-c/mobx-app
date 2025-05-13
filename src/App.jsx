import { observer } from "mobx-react-lite";

import userStore from "./mobxStore/userStore";
import ErrorMessage from "./component/Error";
import UserList from "./component/UserList";
import "./App.css";

const App = observer(() => {
  const fetchUser = ({ page }) => {
    userStore.fetchUsers({ page });
  };
  return (
    <div className="App">
      <h1 className="App-header">Users</h1>
      {userStore.error && <ErrorMessage message={userStore.error} />}
      {userStore.users.length > 0 ? (
        <div>
          <div className="user-list">
            <UserList users={userStore.users} />
          </div>
          <div className="pagination">
            {userStore.page > 1 ? (
              <button
                className="previous"
                onClick={() => fetchUser({ page: userStore.page - 1 })}
              >
                Prev
              </button>
            ) : null}
            <button
              className="next"
              onClick={() => fetchUser({ page: userStore.page + 1 })}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <div>
          <button
            onClick={() => fetchUser({ page: userStore.page })}
            disabled={userStore.loading}
            className="fetch-button"
          >
            {userStore.loading ? "Loading..." : "Fetch Users"}
          </button>
        </div>
      )}
    </div>
  );
});

export default App;
