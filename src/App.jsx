import './App.css'
import React,{useState} from 'react';
import gitCommands from './commandsData.js'
const GitCommand = ({ command }) => {
  return (
    <div className="command">
      <h2>{command.name}</h2>
      <p>
        <strong>Description:</strong> {command.description}
      </p>
      <p>
        <strong>Example:</strong> {command.example}
      </p>
      <code>{command.code}</code>
    </div>
  );
};

const GitCommandsBlog = ({ commands }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredCommands = commands.filter((command) => {
    return (
      command.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      command.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="blog-container">
      <h1>Essential Git Commands Every Developer Should Know</h1>
      <p>Developer and Author - Majid Ali</p>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search commands..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="commands-list">
        {filteredCommands.map((command, index) => (
          <GitCommand key={index} command={command} />
        ))}
      </div>
     
    </div>
  );
};

const App = () => {
  return (
    <div>
      <GitCommandsBlog commands={gitCommands} />
    </div>
  );
};

export default App;