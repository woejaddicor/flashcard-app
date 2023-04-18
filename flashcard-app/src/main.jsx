import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { TokenProvider } from './contexts'

ReactDOM.createRoot(document.getElementById('root')).render(
<TokenProvider>
<BrowserRouter>
<App />
</BrowserRouter>
</TokenProvider>,
)
