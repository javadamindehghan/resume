import User from "../../../img/user.png";
import Card from "react-animated-3d-card";
export default function Aboutimg() {
  return (
   
      <Card
        style={{
          width: "100%",
          height: "100%",
          cursor: "pointer",
         
        }}
      >
        <img src={User} style={{width:'100%', height:'100%'}}/>
      </Card>
   
  );
}
