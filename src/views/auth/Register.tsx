import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { registerApi } from "../../api/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/auth";

const Rgister = () => {
  const [name, setName] = useState<string>("test");
  const [email, setEmail] = useState<string>("test@gmail.com");
  const [password, setPassword] = useState<string>("pass");

  const dispatch = useDispatch();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await registerApi(name, email, password);
      dispatch(login(response.data));
    } catch (error: any) {
      console.log("error");
      console.log(error?.response?.data || "Failed to create user");
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
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

export default Rgister;
