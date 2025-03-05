import React, { useContext, useEffect, useState } from "react";
import { MainData } from "./Routing_Diet_Page";
import { WeekImages } from "./diet_Week_images";
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import { useNavigate } from "react-router-dom";

const MenuDetails = () => {

    const navigator = useNavigate();

    const { obj } = useContext(MainData);
    const [arr, setArr] = useState(WeekImages);
    const [printingState, setPrinting] = useState(null);

    useEffect(() => {
        if (obj?.day) {
            const objs = arr?.filter((i) => obj?.day === i?.day);
            if (objs.length > 0) {
                setPrinting(objs[0]);
            }
        }
    }, [obj, arr]);

    return (
        <div className="menu-container">
            {printingState ? (
                <>
                    <div className="headerClass">
                        <p style={{ float: "right", background: "grey", marginTop: "0px", cursor: "pointer", display: "inline", borderRadius: "0 0 0 20px", zIndex: "2" }}><CloseTwoToneIcon sx={{ fontSize: "32px",'&:hover':{color:"red",background:"black"} }} onClick={() => navigator("/Diet")} /></p>
                        <section style={{ height: "5vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "20px", filter: "blur(1px)", zIndex: "0", }} >
                            <p style={{ display: "flex", justifyContent: "center", fontSize: "48px", fontWeight: "bold", textShadow: "1px 1px 5px blue", border: "none", filter: "blur(0px)", zIndex: "5" }}>{obj.day}</p></section>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", flexDirection: "row", width: "100vw", height: "100vh" }} className="maindivinMenuDetails">
                        <div style={{ width: "30vw", height: "40vh", margin: "10px", zIndex: "0", display: "flex", justifyContent: "center", fontSize: "44px", textShadow: "1px 1px 5px red", color: "whitesmoke", }}>BreakFast
                            <img src={printingState?.meals?.breakfast} alt="Breakfast not found" width="461vw" height="297vh" style={{ position: "absolute", zIndex: "3" }} className="menu-item" />
                        </div>
                        <div style={{ width: "30vw", height: "40vh", margin: "10px", zIndex: "0", display: "flex", justifyContent: "center", fontSize: "44px", textShadow: "1px 1px 5px red", color: "whitesmoke", }} >Mid_BreakFast
                            <img src={printingState?.meals?.midBreakfast} alt="Mid-breakfast not found" width="461vw" height="297vh" style={{ position: "absolute", zIndex: "3" }} className="menu-item" />
                        </div>
                        <div style={{ width: "30vw", height: "40vh", margin: "10px", zIndex: "0", display: "flex", justifyContent: "center", fontSize: "44px", textShadow: "1px 1px 5px red", color: "whitesmoke", }} >Lunch
                            <img src={printingState?.meals?.lunch} alt="Lunch not found" width="461vw" height="297vh" style={{ position: "absolute", zIndex: "3" }} className="menu-item" />
                        </div>
                        <div style={{ width: "30vw", height: "40vh", margin: "10px", zIndex: "0", display: "flex", justifyContent: "center", fontSize: "44px", textShadow: "1px 1px 5px red", color: "whitesmoke", }} >Snacks
                            <img src={printingState?.meals?.snacks} alt="Snacks not found" width="461vw" height="297vh" style={{ position: "absolute", zIndex: "3" }} className="menu-item" />
                        </div>
                        <div style={{ width: "30vw", height: "40vh", margin: "10px", zIndex: "0", display: "flex", justifyContent: "center", fontSize: "44px", textShadow: "1px 1px 5px red", color: "whitesmoke", }} >Dinner
                            <img src={printingState?.meals?.dinner} alt="Dinner not found" width="461vw" height="297vh" style={{ position: "absolute", zIndex: "3" }} className="menu-item" />
                        </div>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default MenuDetails;





// import React, { useContext, useEffect, useState } from "react";
// import { MainData } from "./Routing_Diet_Page";
// import { WeekImages } from "./diet_Week_images";

// const MenuDetails = () => {
//     const {obj}=useContext(MainData);
//     console.log(obj.day);
//     const [arr,setarr]=useState(WeekImages);

//     const [printingstate,setprinting]=useState({});

//     useEffect(() => {
//         const objs = arr?.filter((i) => obj?.day === i?.day);

//         setprinting(objs);

//     });

//     return(
//         <>
//             <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
//                 <div style={{width:"30vw",height:"50vh",border:"2px solid",margin:"20px"}} className="Menudivs">
//                     <img src={printingstate.meals.breakfast} alt="img not found"/>
//                 </div>
//                 <div style={{width:"30vw",height:"50vh",border:"2px solid",margin:"20px"}} className="Menudivs">
//                 <img src={printingstate?.meals?.midBreakfast} alt="img not found"/>
//                 </div>
//                 <div style={{width:"30vw",height:"50vh",border:"2px solid",margin:"20px"}} className="Menudivs">
//                 <img src={printingstate?.meals?.lunch} alt="img not found"/>
//                 </div>
//                 <div style={{width:"30vw",height:"50vh",border:"2px solid",margin:"20px"}} className="Menudivs">
//                 <img src={printingstate?.meals?.snacks} alt="img not found"/>
//                 </div>
//                 <div style={{width:"30vw",height:"50vh",border:"2px solid",margin:"20px"}} className="Menudivs">
//                 <img src={printingstate?.meals?.dinner} alt="img not found"/>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default MenuDetails;