import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { login } from "../../api/auth";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState<string>("test@gmail.com");
  const [password, setPassword] = useState<string>("pass");
  const onSubmit = async (e: any) => {
    e.preventDefault();
    console.log("inside login");
    const response = await login(email, password);
    console.log(response.data);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Login;
