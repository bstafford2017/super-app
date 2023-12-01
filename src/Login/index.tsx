import React, { useState } from 'react';
import styled from 'styled-components';
import { login } from '../Http/client';
import Button from '../Button';

const Container = styled.div`
  min-width: 250px;
`;

const Group = styled.div`
  margin: 15px;
  height: 115px;
`;

const Label = styled.label`
  display: block;
  min-width: 250px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  display: block;
  height: 30px;
  min-width: 250px;
  opacity: 0.5;
  border: 2px solid white;
  border-radius: 5px;
`;

const ErrorText = styled.p`
  font-size: 12px;
`;

const Alert = styled.div``;

interface LoginProps {
  setIsAuthenticated: Function;
  setIsLoading: Function;
}

const Login = ({ setIsAuthenticated, setIsLoading }: LoginProps) => {
  const [userId, setUserId] = useState<string>('');
  const [userIdError, setUserIdError] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [serverError, setServerError] = useState<string>('');

  const onChangeUserId = (event: any) => {
    setUserId(event.target.value);
  };

  const onChangePassword = (event: any) => {
    setPassword(event.target.value);
  };

  const validateUserId = (event: any) => {
    const valid = event.target.value;
    if (!valid) setUserIdError('Please enter a valid user id');
    else setUserIdError('');
  };

  const validatePassword = (event: any) => {
    const password = event.target.value;
    const valid =
      password &&
      password.match(/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/);
    if (!valid) return setPasswordError('Please enter a valid password');
    else setPasswordError('');
  };

  const submit = async () => {
    try {
      setIsLoading(true);
      await login(userId, password);
      setIsLoading(false);
      setIsAuthenticated(true);
    } catch (e) {
      setServerError('Failed to login, please try again');
      setIsLoading(false);
    }
  };

  return (
    <>
      <Container>
        {serverError && <Alert>{serverError}</Alert>}
        <Group>
          <Label htmlFor="userId">User Id</Label>
          <Input
            name="userId"
            type="text"
            value={userId}
            onChange={onChangeUserId}
            onBlur={validateUserId}
          />
          {userIdError && (
            <ErrorText aria-invalid={true}>{userIdError}</ErrorText>
          )}
        </Group>
        <Group>
          <Label htmlFor="password">Password</Label>
          <Input
            name="password"
            type="password"
            value={password}
            onChange={onChangePassword}
            onBlur={validatePassword}
          />
          {passwordError && (
            <ErrorText aria-invalid={true}>{passwordError}</ErrorText>
          )}
        </Group>
        <Button title="Login" onClick={submit} />
      </Container>
    </>
  );
};

export default Login;
