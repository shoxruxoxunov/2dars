import "./App.css";

import { useState } from "react";
import Navbar from "./componentes/Navbar/navbar";

// import navbar from "./componentes/Navbar/navbar";
import Footer from "./componentes/footer/footer";
// import footer from "./componentes/footer/footer";
import UserList from "./componentes/usersList/UserList";
import newUserForm from "./componentes/newuser/NewUserForm";
import NewUserForm from "./componentes/newuser/NewUserForm";

function App() {
  const [showmodal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);

  const deleteUser = (id) => {
    setUsers((prev) => {
      return prev.filter((user) => {
        return user.id != id;
      });
    });
  };
  const closeModal = (e) => {
    if (e.target.className == "overlay") setShowModal(false);
    if (e.key == "Escape") setShowModal(false);
  };

  // addUser
  const addUser = (user) => {
    setUsers((prev) => {
      return [...prev, user];
    });
    setShowModal(false);
  };

  return (
    <div onClick={closeModal} onKeyDown={closeModal} className="App">
      <Navbar userslength={users.length} />
      <main>
        <div className="no-users">
          {users.length === 0 && <h2>NO users</h2>}
        </div>
        <UserList users={users} deleteUser={deleteUser} />
      </main>
      {showmodal && <NewUserForm addUser={addUser} />}

      <button onClick={() => setShowModal(true)} className="create-user">
        Create User
      </button>
      <Footer />
    </div>
  );
}

export default App;

// id: 8,
// image: "https://picsum.photos/400/400?random=8",
// firstName: "John",
// lastName: "Jons",
// age: 35,
// from: "Uzbekistan",
// job: "fronted-dev",
// gender: "Male",
