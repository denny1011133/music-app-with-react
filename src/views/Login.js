import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { ReactComponent as Logo } from './../images/play_button_ready.svg';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
  font-family: 'Noto Sans TC', sans-serif;
  margin: 2rem 0;
`;

const Button = styled.button`
  background: #385898;
  color: white;
  min-width: 200px;
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: bold;
  padding: 6px 0;
  margin: 2rem 0;
  border-radius: 25px;
`;

const BigLogo = styled(Logo)`
transform: scale(3);
`

const Login = ({ status, handleFBLogin }) => {

  if (status === 'connected') {
    return <Redirect to="/musicApp" />;
  } else {
    return (
      <Container>
        <Title >Music App</Title>
        <BigLogo />
        <Button className="btn-reset" onClick={handleFBLogin}> 使用 Facebook 登入 </Button>
      </Container>
    );
  }

};

export default Login;