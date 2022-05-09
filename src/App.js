import './App.css';
const title = "Joe Smiles";
const welcome = {
  greeting: 'Hey',
  title: 'Joe React',
};

function getTitle(title){
  return title;
}

function App() {
  
  return (
    <div>
      <h1>
        {welcome.greeting} {getTitle('Joe React')}!!!
      </h1>
      
      <label htmlFor='search'>Search: </label>
      <input id="search" type="text"/>
    </div>
  );
}

export default App;
