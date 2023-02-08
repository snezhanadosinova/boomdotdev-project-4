import Avatar from "../src/components/avatar/Avatar";
import Example from "../src/components/example/Example";
import Header from "../src/components/header/Header";

export default function Index() {
  return (<>
  {/* <Example /> */}
  <Header/>
  <Avatar size="90" url="../images/avatar.png" verified="true" />
  </>);
}