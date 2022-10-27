import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { HashRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render ( 
<ChakraProvider> 
    <HashRouter>
        <App /> 
    </HashRouter>
</ChakraProvider> 
);


