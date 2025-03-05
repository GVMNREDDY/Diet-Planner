import React, { useState } from "react";
import RestaurantMenuTwoToneIcon from '@mui/icons-material/RestaurantMenuTwoTone';
import { useNavigate } from "react-router-dom";
import { Menu, MenuItem } from "@mui/material";
import { FcCalculator } from "react-icons/fc";
import { TbLogout2 } from "react-icons/tb";


const LoginLogoutMenu = () => {
    const nav = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);


    const nutri = () => {
        nav("/NutritionCaliculation");
    }

    const logoutpage = () => {
        nav("/");
    }

    return (
        <>
            <RestaurantMenuTwoToneIcon className="chefmenuicon" sx={{ fontSize: "1.75em", cursor: "pointer" }} onClick={(e) => setAnchorEl(e.target)} />
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
            >
                <MenuItem onClick={nutri} >
                    <div style={{ width: "8.35vw", display: "flex", justifyContent: "space-between" }}><div><FcCalculator fontSize="32px" /></div><div style={{ fontWeight: "bold", fontSize: "20px" }}> Nutrition</div></div></MenuItem>
                <MenuItem style={{ width: "9vw", display: "flex", justifyContent: "space-between" }} onClick={logoutpage} ><div ><TbLogout2 fontSize="28px" /></div><div style={{ fontWeight: "bold", fontSize: "20px" }} >Logout</div></MenuItem>
            </Menu>
        </>
    )
}

export default LoginLogoutMenu;