import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { AppContext, useGlobalContext } from './context';
const Home = () => {
  const { setIsSidebar, setIsModal } = useGlobalContext();
  return (
    <>
      <main>
        <button className="sidebar-toggle" onClick={() => setIsSidebar(true)}>
          <FaBars />
        </button>
        <button className="btn" onClick={() => setIsModal(!false)}>
          show modal
        </button>
      </main>
    </>
  );
};

export default Home;
