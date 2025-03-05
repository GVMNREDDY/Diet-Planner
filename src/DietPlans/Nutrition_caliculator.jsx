import React, { useState } from "react";
import "./diet_Caliculator.css";
import { useNavigate } from "react-router-dom";
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';

const NutritionCalulation = ({children}) => {
    const nav = useNavigate();
    const [ourtog,setour]=useState(false);
    const [yourtog,setyour]=useState(false);

    return (
        <>
            <div className="wholediv">
                <p style={{float:"right",background:"grey",marginTop:"0px",cursor:"pointer",display:"inline",borderRadius:"0px 0 0 20px"}}><CloseTwoToneIcon sx={{ fontSize: "32px",'&:hover':{color:"red",background:"black"} }} onClick={()=> nav("/Diet")} /></p>
                <h1 style={{color:"white"}} className="h1NutritionCalculation">Nutrition Caliculator</h1>
                <div className="dietDiv1">
                    <button type="button" className="button-30" onClick={() => {setour(!ourtog);nav("/NutritionCaliculation/OurChoice")}}>Select Our Recommendation</button>
                    <button type="button" className="button-30" onClick={() => {setyour(!yourtog);nav("/NutritionCaliculation/YourChoice")}} >Custom Diet Creation</button>
                </div>
                <div>

                </div>
            </div>
            {children}
        </>
    )
}

export default NutritionCalulation;