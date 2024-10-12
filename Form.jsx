import {useState} from "react";
export default function Form(){
    let [fullname, setfullname] = useState("");
    let [username,setusername] = useState("")

    let handlechangename = (event) =>{
        setfullname(event.target.value);
    }

    let handleusername = (event) =>{
        setusername(event.target.value)
    }


    return(
        <form>
            <label htmlFor="fullname">full name </label>
            <input id="fullname" placeholder="enter full name" type="text" value={fullname} onChange={handlechangename}/>
            <button>submit</button>


            <br></br>
            <br></br>

            <form>
            <label htmlFor="username">user name </label>
            <input id="username" placeholder="enter user name" type="text" value={username} onChange={handleusername}/>
            <button>submit</button>

        </form>

        </form>

        
        
    )
}

