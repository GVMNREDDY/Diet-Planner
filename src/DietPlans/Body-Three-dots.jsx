import React, { useContext, useState } from "react";
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import {  Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FcViewDetails } from "react-icons/fc";
import { MainData } from "./Routing_Diet_Page";
import { TiEdit } from "react-icons/ti";



// export const objData= createContext();

const BodyThreeDots = ({tableData}) => {

    const nav = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);
    const {setObj} = useContext(MainData);

    // console.log("tableData : ",tableData);

    // const coustmizeDiet = () => {
    //     nav("/CustomizeMeal", {state: tableData});
    // }
    
    return (
        <>
        {/* <objData.Provider value={{tableData}} ></objData.Provider> */}
        <MoreVertTwoToneIcon className="threedots" onClick={(e) => setAnchorEl(e.target)} />
        <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
            >
            <MenuItem onClick={() => {nav("/MenuDetails");setObj(tableData)}} style={{display:"flex",justifyContent:"space-between",
                alignItems:"center",width:"9vw",fontWeight:"bold"}}><div><FcViewDetails fontSize="32px"  /></div>
                <div style={{fontSize:"20px"}}>Details</div></MenuItem>

                <MenuItem onClick={() => {nav("/CustomizeMeal", {state: tableData})}}  style={{display:"flex",justifyContent:"space-between",
                alignItems:"center",width:"11vw",fontWeight:"bold",fontSize:"20px"}}><div><TiEdit fontSize="32px" /></div>Customize</MenuItem>
        </Menu>
        </>
    )
}

export default BodyThreeDots;