import {Form, FormControl, Button} from 'react-bootstrap';
import {useState} from 'react';
import Input from '../input/Input';


const Login = () => {
    const [dataUser, setDataUser] = useState("");
    

    const handleChange = (event) => {
        const value = event.target.value.toLowerCase();
        setDataUser(value);
        value.includes('o') ? alert("Por favor, ¡Nombres de usuario sin la letra o!") : null;
    }

    const submitUser = (event) => {
        event.preventDefault();
        if (!dataUser) {
            alert("Usuario inválido para registrarse");
          } else if (dataUser.includes('O') || dataUser.includes('o')) {
            alert("Usuario inválido para registrarse");
          } else {
            alert("¡Usuario registrado correctamente!");
          }
    }

    return (
        <div>
            <Form onSubmit={submitUser}>
                <Form.Group>
                    <Form.Label >Username : </Form.Label>
                    <FormControl type="text" placeholder="Ingresa su usuario" value={dataUser} onChange={handleChange} /> </Form.Group>
                <Button variant="danger" type="submit">
                    Registrarse
                </Button>
            </Form>

            <Input dataInput ={dataUser} />
        </div>
    )
}

export default Login