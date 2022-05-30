import './App.css';

import React from 'react';

const welcome = {
  greeting: 'Hey',
  title: 'Joe React',
};

function getTitle(title) {
  return title;
}

const App = () => {

  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1
    }
  ]; 
  
  console.log('App renders');

  const handleSearch = (event) => {
    console.log(event.target.value);
  };
  
  return (
    <div>
      <h1>
        {welcome.greeting} {getTitle('Joe React')}!!!
      </h1>
      <h1>My Hacker Stories</h1>
         
      <hr />
      
      <Search onSearch={handleSearch}/>
            
      <List list={stories}/>
     
      <hr />
          
    </div>
  );
};

const Search = (props) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    props.onSearch(event);
  }
  console.log('Search renders');
 return (
    <div>
      <label htmlFor='search'>Search: </label>
      <input id="search" type="text" onChange={handleChange}/>
      
      <p>
        Searching for <strong>{searchTerm}</strong>.
      </p>
    </div>
  );
 };

const List = (props) => {
  console.log('List renders');
  return (
    <ul>
        {props.list.map((item) => (
          <Item key={item.objectID} item={item} />
        ))}
      </ul>
  );
};
        
const Item = (props) => {
  
  return (
          <li key={props.item.objectID}>
            <span>
              <a href={props.item.url}> {props.item.title}</a>
            </span>
            <span> {props.item.author}</span>
            <span> {props.item.num_comments}</span>
            <span>{props.item.points}</span>
          </li>
  );
};  
export default App;
