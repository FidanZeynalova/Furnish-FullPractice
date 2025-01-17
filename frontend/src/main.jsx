import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { store } from './app/store.js'
import { Provider } from 'react-redux'
import FurnishContextProvider from './context/FurnishContext.jsx'

createRoot(document.getElementById('root')).render(
 <FurnishContextProvider>
  <Provider store={store}>
    <App />
  </Provider>,
 </FurnishContextProvider>
)
