import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {AuthProvider} from "./context/authContext.jsx";
import {GroupsProvider} from "./context/groupsContext.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            <GroupsProvider>
                <App/>
            </GroupsProvider>
        </AuthProvider>
    </React.StrictMode>,
)
