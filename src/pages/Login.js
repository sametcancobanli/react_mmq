import { useState } from "react";
import axios from "axios";

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('/webservice/login', {
            username: username,
            password: password
        })
        .then(response => {
            if(response.status == true){
                localStorage.setItem('demoToken', response.data.token)
                window.location.href = '/home';
            } else{
                alert("Wrong username or password!")
            } 
        })
        .catch(error => {
           alert("There is something wrong! Please try again.")
        });
        
    }
    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <br />
                <button type="submit">Log in</button>
            </form>
        </div>
    );
}

export default Login;