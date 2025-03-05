import React, { useContext, useState } from "react";
import './diet.css'
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";
// import { useNavigate } from "react-router-dom";
import { MainData } from "./Routing_Diet_Page";
import LoginLogoutMenu from "./LoginLogoutMenu";
import BodyThreeDots from "./Body-Three-dots";


const DietInterface = () => {


    const { tableData, userCustomDiet, tempData } = useContext(MainData);

    // console.log("diet interface page : ",tempData);

    // console.log("it is in the diet interface : ",userCustomDiet);
    const [clonetab, setclone] = useState(tempData);

    console.log("clonetable: ",clonetab);

    const [togsearch, settogsearch] = useState(true);
    // const [favtog,setfav]=useState(false);

    const funTog = () => {
        settogsearch(!togsearch);
    }

    const chninp = (e) => {
        const val = e.target.value;
        const newtab = clonetab?.filter((i) => (i.day.toLowerCase().includes(val.toLowerCase())));
        if (val === "") {
            settogsearch(!togsearch);
            setclone(tableData);
        }
        else {
            // console.log("newtab",newtab);
            setclone(newtab);
        }
    }
    
    const favfunction = (obj) => {
        setclone(prevClonetab => {
            return prevClonetab.map(item => {
                return {
                    ...item,
                    diet: item.diet.map(dietItem => {
                        if (dietItem.day === obj.day) {
                            return { ...dietItem, fav: !dietItem.fav };
                        }
                        return dietItem;
                    })
                };
            });
        });
    };
    

    return (
        <>
            <div className="main-div">
                <div className="main-div2">
                    <header className="header-class">{togsearch ? <SearchTwoToneIcon sx={{ fontSize: "1.75em", cursor: "pointer" }} className="chefmenuicon" onClick={funTog} /> :
                        <input type="text" onChange={chninp} placeholder="enter the day...." autoFocus className="inputmain"/>}
                        <div style={{textShadow:"4px 4px black",fontSize:"32px"}}>{clonetab[0].credentials.userName.toUpperCase()}</div>
                        <LoginLogoutMenu />
                    </header>
                    <div className="sub-div-1">
                        {/* <div className="sub-div-sunday"></div> */}
                        <div className="sub-div-monday">
                            {clonetab[0].diet?.map((i) => {
                                return (<div className="data-div">
                                    <h1 style={{ display: "inline" }}>{i.day}</h1><span className="favspan">
                                        {i.fav ? <MdOutlineFavorite onClick={() => favfunction(i)} style={{ color: "red", background: "grey", padding: ".5em", borderRadius: "50px" }} />
                                            : <MdFavoriteBorder onClick={() => favfunction(i)} />}</span>
                                    <span><BodyThreeDots tableData={i} /></span>
                                    <img src={i.image} alt="not an available" className="imageTag" />
                                    <ul>
                                        <li><b>Breakfast</b> : {i.meals.breakfast}</li>
                                        <li><b>Mid-Morning Snack</b> : {i.meals.midMorningSnack}</li>
                                        <li><b>Lunch</b> : {i.meals.lunch}</li>
                                        <li><b>Evening Snack</b> : {i.meals.eveningSnack}</li>
                                        <li><b>Dinner</b> : {i.meals.dinner}</li>
                                    </ul>
                                </div>)
                            }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DietInterface;