import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { loginApi, testApi } from "../../api/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/auth";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState<string>("test@gmail.com");
  const [password, setPassword] = useState<string>("pass");

  const dispatch = useDispatch();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await loginApi(email, password);
      dispatch(login(response.data));
    } catch (error: any) {
      console.log("error");
      console.log(
        error?.response?.data || "Unable to login please try again later!!"
      );
    }
  };

  const onClickTest = async () => {
    try {
      const res = await testApi();
      console.log("login res");
      console.log(res.data);
    } catch (error: any) {
      console.log("error");
      console.log(
        error?.response?.data || "Unable to login please try again later!!"
      );
    }
  };

  return (
    <div>
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
      <br />
      <button onClick={onClickTest}>test</button>
      <br />
      <Link to="/">Home</Link>
    </div>
  );
};

export default Login;
