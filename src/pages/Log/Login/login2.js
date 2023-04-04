import { useEffect, useState } from "react";
import "../../style for pages/style.css";
import { Button} from "react-bootstrap";

import { useNavigate} from "react-router-dom";
import { LegendToggleOutlined } from "@mui/icons-material";


const users = [
  {
    username: 'admin1',
    password: '12345678'
  },
  {
    username:'admin2',
    password:'012345678'
  }
];


export default function Login2() {
  const [data, setData] = useState({
    username: '',
    password: ''
  });
  const changeHandler = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const checkUser = () => {
    const usercheck = users.find(user => (user.username === data.username && user.password === data.password));
    if(usercheck) {
      console.log("Login successful");
      
      console.log("Wrong password or username");
    }
    // console.log(uname);
    console.log(usercheck);
  }

  useEffect(() => {
checkUser(users)
  }, [data.username, data.password])

  console.log(data);

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `newPath`; 
    navigate(path);
  }
  
  return (
    <div className="App">
      <div className="input-text">
              <input
                type="text"
                name="username"
                value={data.username}
                placeholder="Username"
                aria-describedby="inputGroupPrepend2" required
                onChange={changeHandler}
              />
          </div>
          <div className="input-text">
            <input
              type="password"
              name="password"
              value={data.password}
              placeholder="Password"
              aria-describedby="inputGroupPrepend2" required
              onChange={changeHandler}
            />
            
          </div>

          <Button color="primary" className="px-4"
            onClick={routeChange}
              >
              Login
            </Button>

    </div>
  );
}