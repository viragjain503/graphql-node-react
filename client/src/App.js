import './App.css';
import { gql, useQuery} from '@apollo/client';

const query = gql`
  query GetAllTodos {
    getTodos {
      title,
      completed,
      user { 
        id,
        name
      }
    }
  }
`

function App() {
  const {data,loading} = useQuery(query);
  if(loading){
    return <h1>Loading</h1>
  }
  return (
    <div className="App">
      {JSON.stringify(data)}
    </div>
  );
}

export default App;
