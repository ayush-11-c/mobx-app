import { observer } from "mobx-react-lite";
import userStore from "./mobxStore/userStore";
import ErrorMessage from "./component/Error";
import UserList from "./component/UserList";
import "./App.css";
import Loading from "./component/Loader";

const App = observer(() => {
  const fetchUser = ({ page }) => {
    if (page < 1) return;
    userStore.fetchUsers({ page });
  };

  return (
    <div className="App">
      <h1 className="App-header">Users</h1>

      {userStore.error && <ErrorMessage message={userStore.error} />}

      {userStore.users.length > 0 ? (
        <>
          {userStore.loading ? (
            <Loading />
          ) : (
            <UserList users={userStore.users} />
          )}

          {!userStore.loading && (
            <div className="pagination">
              {userStore.page > 1 && (
                <button
                  className="previous"
                  onClick={() => fetchUser({ page: userStore.page - 1 })}
                  disabled={userStore.loading}
                >
                  {"Previous"}
                </button>
              )}
              <button
                className="next"
                onClick={() => fetchUser({ page: userStore.page + 1 })}
                disabled={userStore.loading}
              >
                {"Next"}
              </button>
            </div>
          )}
        </>
      ) : (
        <div>
          <button
            onClick={() => fetchUser({ page: userStore.page })}
            disabled={userStore.loading}
            className="fetch-button"
          >
            {userStore.loading ? <Loading /> : "Fetch Users"}
          </button>
        </div>
      )}
    </div>
  );
});

export default App;
