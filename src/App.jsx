import { useState } from 'react';
import Layout from './components/Layout/Layout.jsx';
import Modal from './components/Modal.js/Modal.jsx';
import LoginForm from './components/LoginForm/LoginForm.jsx';
import { Outlet } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { logout } from './app/authSlice.js';

function App() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogin = () => {
    setShowModal(true);
  };

  const handleLogout = () => {
    dispatch(logout());
    setShowModal(false);
  };

  return (
    <>
      <Layout
        isLoggedIn={isAuthenticated}
        handleLogin={handleLogin}
        handleLogout={handleLogout}>
        <Outlet />
        <Modal
          isOpen={showModal && !isAuthenticated}
          onClose={() => setShowModal(false)}>
          <LoginForm onClose={() => setShowModal(false)} />
        </Modal>
      </Layout>
    </>
  );
}

export default App;
