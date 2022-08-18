import {
  MainContainer,
  WelcomeText,
  InputContainer,
  ButtonContainer,
  LoginWith,
  HorizontalRule,
  IconsContainer,
  //   ForgotPassword,
} from "./LoginStyled";
import Button from "./Button";
import Icon from "./Icon";
import Input from "./Input";
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";

function Login({ title, btn, isNewUser }) {
  const FacebookBackground =
    "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #262626 100%)";
  const GoogleBackground =
    "linear-gradient(to right, #4d4d4d 0%, #ffffff 40%, #ffffff 100%)";
  const GithubBackground = "linear-gradient(to right, #262626 0%, #000000 50%)";

  return (
    <MainContainer>
      <WelcomeText>{title}</WelcomeText>
      <InputContainer>
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </InputContainer>
      <ButtonContainer>
        <Button content="Submit" />
      </ButtonContainer>
      <ButtonContainer>
        <Button content={btn} isNewUser={isNewUser} />
      </ButtonContainer>
      <LoginWith>OR LOGIN WITH</LoginWith>
      <HorizontalRule />
      <IconsContainer>
        <Icon color={FacebookBackground}>
          <FaFacebookF />
        </Icon>
        <Icon color={GoogleBackground}>
          <FaGoogle style={{ color: "black" }} />
        </Icon>
        <Icon color={GithubBackground}>
          <FaGithub />
        </Icon>
      </IconsContainer>
      {/* <ForgotPassword>Forgot Password ?</ForgotPassword> */}
    </MainContainer>
  );
}

export default Login;
