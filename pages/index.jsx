import Avatar from "../src/components/avatar/Avatar";
import NFTCard from "../src/components/card/Card";
import Example from "../src/components/example/Example";
import Header from "../src/components/header/Header";
import User from "../src/components/user/User";

export default function Index() {
  return (<>
  {/* <Example /> */}
  <Header/>
  <Avatar size="90" url="../images/avatar.png" verified />
  <User name="terika77" info="134 items" avatar="../images/avatar.png" size="55"  verified/>
  <NFTCard name="Clock" likes="1450"  mediaUrl="../images/nft.jpg" user={{ avatar: { url: "../images/avatar.png" }, verified: true }} price="1" currency="ETH" />
  </>);
}