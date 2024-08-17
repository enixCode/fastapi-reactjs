import { useEffect, useState } from 'react';
import api from './api';

function App() {
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        api.get('/')
           .then(response => {
               setMessage(response.data.message);
           })
           .catch(error => {
               console.error('Erreur lors de la récupération du message', error);
           });
    }, []);

    return (
        <div className="App">
            <h1>Frontend</h1>
            <p>{message}</p>
        </div>
    );
}

export default App;
