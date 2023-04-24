import './App.css';
import Router from './routes/Router';
import { Auth0Provider } from '@auth0/auth0-react';
import TodosProvider from './context/TodosProvider';

function App() {

 
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      authorizationParams={{
      redirect_uri: window.location.origin + "/home"
    }}
    >
      <TodosProvider>
        <Router />
      </TodosProvider>
    </Auth0Provider>

  );
}

export default App;
