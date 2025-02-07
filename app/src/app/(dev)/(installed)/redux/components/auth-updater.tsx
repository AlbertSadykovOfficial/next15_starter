import { setLoggedIn } from "@/store/features/auth/authSlice";
import { useAppDispatch } from "@/store/hooks";
import UIButton from "@/components/UI/Button";

const AuthUpdater = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex gap-4 border border-1 border-black p-20">
      <UIButton onClick={() => dispatch(setLoggedIn(false))}>Log out</UIButton>
      <UIButton onClick={() => dispatch(setLoggedIn(true))}>Log in</UIButton>
    </div>
  );
};
export default AuthUpdater;
