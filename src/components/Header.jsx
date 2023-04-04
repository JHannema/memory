import { useEffect } from 'react';

const Header = ({ handleNewGame, wins }) => {
  // Update page title with win count
  useEffect(() => {document.title = `${wins} overwinningen`}, [wins]);

  return (
    <header className="header">
      <h4>{wins} overwinningen</h4>
      <h3>Memory Spel</h3>
      <button onClick={handleNewGame}>Nieuw spel</button>
      <button onClick={logIn}>Inloggen</button>
    </header>
  );
};

export default Header;
