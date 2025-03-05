import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "./diet_data_list";
import { MainData } from "./Routing_Diet_Page";

const LoginForm = () => {

    // const [usercred,setUserCred]=useState([]);
    const nav = useNavigate();

    const { userCustomDiet, setTempData } = useContext(MainData);


    const [userDetails, setUserDetails] = useState({
        username: "",
        password: "",
    });



    const [cred, setCred] = useState([

        {
            id: 0,
            username: "admin",
            password: "admin.com",
        },
        {
            id: 1,
            username: "gvmnr",
            password: "gvmnr.com"
        },
        {
            id: 2,
            username: "ganesh",
            password: "ganesh.com"
        },
        {
            id: 3,
            username: "venu",
            password: "venu.com"
        },
        {
            id: 4,
            username: "santosh",
            password: "santosh.com"
        },
        {
            id: 5,
            username: "ramesh",
            password: "ramesh.com"
        },
        {
            id: 6,
            username: "ram",
            password: "ram.com"
        },
    ]);



    const storeDetails = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    }

    // useEffect(() => {

    // }, []);

    console.log("User Credentials Check  Out side : ", userCustomDiet);

    const userCredCheck = () => {
        userCustomDiet?.forEach((i) => {
            cred?.forEach((j) => {
                if (j.id === i.id) {
                    i.credentials = {
                        userName: j.username,
                        password: j.password,
                    };

                    if (!i.diet || i.diet.length === 0) {
                        i.diet = JSON.parse(JSON.stringify(data)); 
                    }
                }
            });
        });

        const checked = cred?.some((i) => {
            if (i.username === userDetails.username && i.password === userDetails.password) {
                console.log("User Credentials Check Inside: ", userCustomDiet);

                const customTempData = userCustomDiet?.filter((j) => j.id === i.id);

                setTempData(customTempData);
                return true;
            }
            return false;
        });

        if (checked) {
            alert(`Login Successful! ${userDetails.username}`);
            nav("/Diet");
        } else {
            alert("Invalid Credentials");
            setUserDetails({
                username: "",
                password: "",
            });
        }
    };

    // console.log("user credentials : ",cred);

    // console.log("in LoginForm Component : ",tempData);

    return (
        <>
            <div className="loginformdiv1">
                <div className="formclass">
                    <h1 style={{ textAlign: "center", textDecoration: "underline" }} className="LogoLogin">Login</h1>
                    <form className="form1">
                        <div className="divinform">
                            <label className="labelclass">Username<sup style={{ color: "red" }}>* </sup>:</label><br />
                            <input type="text" name="username" onChange={storeDetails} className="inputclass" placeholder='gvmnr (or) admin' required /><br />
                        </div>

                        <div className="divinform">
                            <label className="labelclass">Password<sup style={{ color: "red" }}>* </sup>:</label><br />
                            <input type="password" name="password" onChange={storeDetails} className="inputclass" placeholder='gvmnr@com (or) admin@com' required />
                            <p style={{ float: "right", paddingRight: "20px", fontSize: "14px" }}>forgot password?</p><br />
                        </div>

                        <div className="divinform">
                            <div className="divbtn">
                                <div>
                                    <button type="button" className="loginbtn" onClick={userCredCheck}>Check</button>
                                </div>
                                <div>
                                    <button type="button" className="loginbtn">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginForm;