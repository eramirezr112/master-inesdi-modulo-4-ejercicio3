import { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Divider,
  CircularProgress,
} from "@mui/material";

import { useAuth } from "./hooks/useAuth";

function Login() {
  const { onLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const handleChangeUser = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePwd = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLogin(true);
    onLogin({ email, password });
    setTimeout(() => {
      window.location.pathname = "/todo-list";
      setIsLogin(false);
    }, "2000");
  };

  return (
    <Container>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h4" component="h4">
            LOGIN
          </Typography>
          <Divider />
          <TextField
            label="User"
            variant="outlined"
            value={email}
            onChange={handleChangeUser}
            fullWidth
            sx={{ marginBottom: 2, marginTop: 2 }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={handleChangePwd}
            fullWidth
            sx={{ marginBottom: 2, marginTop: 2 }}
          />
          <Button
            variant="contained"
            onClick={handleSubmit}
            fullWidth
            disabled={isLogin}
          >
            Sign In
            {isLogin && (
              <CircularProgress
                size={24}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  marginTop: "-12px",
                  marginLeft: "-12px",
                }}
              />
            )}
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Login;
