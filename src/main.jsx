import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { CounterApp } from './CounterApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp name='Counter App!' value={123456} />
    </React.StrictMode>
);