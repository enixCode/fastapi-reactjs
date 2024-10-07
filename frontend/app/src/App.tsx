import { SetStateAction, useEffect, useState } from 'react';
import api from './api';

function App() {
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        api.get('/')
           .then((response: { data: { message: SetStateAction<string>; }; }) => {
               setMessage(response.data.message);
           })
           .catch((error: any) => {
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
