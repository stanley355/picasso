import { cookies } from "next/headers";
import HeaderRightMobileBtn from "./HeaderRightMobileBtn";

const HeaderRight = () => {
  return (
    <div>
      <HeaderRightMobileBtn />
    </div>
    // <Button variant="secondary">
    // </Button>
  );
  // const token = cookies().get("token");

  // if (token?.value) {
  //   return <AuthenticatedHeader />;
  // }

  // return <NoTokenHeader />;
};

export default HeaderRight;
