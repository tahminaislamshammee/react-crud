import { useRef, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useAuth } from '../context/AuthContext';

const SignUp = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState();

    function handleSubmit(e) {
        e.preventDefault();

        if(passwordRef.current.value !== passwordConfirmationRef.current.value){
            return 
        }
        signup(emailRef.current.value, passwordRef.current.value)
    }
    return ( 
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4"> sign up </h2>
                    <Form>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required/>
                        </Form.Group>

                        <Form.Group id="password">
                            <Form.Label>password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required/>
                        </Form.Group>

                        <Form.Group id="pass-confirm">
                            <Form.Label>password confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmationRef} required/>
                        </Form.Group>
                        <Button className="w-100 mt-4" type="submit">sign up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? log in
            </div>
        </>
    );
}
 
export default SignUp;