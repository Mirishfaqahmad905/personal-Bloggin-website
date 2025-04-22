import { StrictMode } from 'react'; // Optional but recommended for highlighting potential issues
import { createRoot } from 'react-dom/client'; // React 18+ method for rendering
import App from './App.jsx'; // Main App component
import { Provider } from 'react-redux'; // Wrap app with Redux store provider
import store from './reduxt-toolkit/store.jsx'; // Your Redux store

// Rendering App with Redux
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
