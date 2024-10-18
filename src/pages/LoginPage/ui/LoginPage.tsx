import { signInWithPopup } from "firebase/auth";
import { Button } from "../../../shared/ui/Button";
import { Icon } from "../../../shared/ui/Icon";
import { auth, provider } from "../../../shared/config/firebase";

const LoginPage = () => {

  const login = async () => {
    await signInWithPopup(auth, provider).then((res) => console.log(res));
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="min-w-96 py-8 px-10 bg-secondary rounded-lg">
        <Button onClick={login} className="w-full flex items-center justify-center gap-2">
          <Icon name="sprite/google" className="w-8 h-8" />
          Login with Google
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
