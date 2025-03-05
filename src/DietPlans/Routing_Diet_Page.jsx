import React, { createContext, useState } from "react";
import data from "./diet_data_list";
import { HashRouter, Outlet, Route, Routes } from "react-router-dom";
import NutritionCalulation from "./Nutrition_caliculator";
import DietInterface from "./diet_Interface";
import OurChoiceCal from "./Our_Choice_Caliculator";
import YourChoiceCal from "./Your_Meal_Choice";
import MenuDetails from "./DetailsMenu";
import LoginForm from "./LoginForm";
import CoustmizeDiet from "./CoustmizeDiet";
// import { objData } from "./Body-Three-dots";

export const MainData = createContext();

const RouteDiet = () => {
    const [tableData, settable] = useState(data);

    const [obj, setObj] = useState({});

    // const [CustomtableData, setCustomTableData] = useState([{
    //     "day": "Monday",
    //     "image": "./Monday.jpg",
    //     "fav": false,
    //     "meals": {
    //         "breakfast": "",
    //         "midMorningSnack": "",
    //         "lunch": "",
    //         "eveningSnack": "",
    //         "dinner": ""
    //     },
    //     "nutrition": {
    //         "calories": "",
    //         "protein": "",
    //         "carbs": "",
    //         "fats": ""
    //     },
    // },
    // {
    //     "day": "Tuesday",
    //     "image": "./Tuesday.jpg",
    //     "fav": false,
    //     "meals": {
    //         "breakfast": "",
    //         "midMorningSnack": "",
    //         "lunch": "",
    //         "eveningSnack": "",
    //         "dinner": ""
    //     },
    //     "nutrition": {
    //         "calories": "",
    //         "protein": "",
    //         "carbs": "",
    //         "fats": ""
    //     },
    // },
    // {
    //     "day": "Wednesday",
    //     "image": "./Wednesday.jpg",
    //     "fav": false,
    //     "meals": {
    //         "breakfast": "",
    //         "midMorningSnack": "",
    //         "lunch": "",
    //         "eveningSnack": "",
    //         "dinner": ""
    //     },
    //     "nutrition": {
    //         "calories": "",
    //         "protein": "",
    //         "carbs": "",
    //         "fats": ""
    //     },
    // },
    // {
    //     "day": "Thursday",
    //     "image": "./Thursday.jpg",
    //     "fav": false,
    //     "meals": {
    //         "breakfast": "",
    //         "midMorningSnack": "",
    //         "lunch": "",
    //         "eveningSnack": "",
    //         "dinner": ""
    //     },
    //     "nutrition": {
    //         "calories": "",
    //         "protein": "",
    //         "carbs": "",
    //         "fats": ""
    //     },
    // },
    // {
    //     "day": "Friday",
    //     "image": "./Friday.jpg",
    //     "fav": false,
    //     "meals": {
    //         "breakfast": "",
    //         "midMorningSnack": "",
    //         "lunch": "",
    //         "eveningSnack": "",
    //         "dinner": ""
    //     },
    //     "nutrition": {
    //         "calories": "",
    //         "protein": "",
    //         "carbs": "",
    //         "fats": ""
    //     },
    // },
    // {
    //     "day": "Saturday",
    //     "image": "./Saturday.jpg",
    //     "fav": false,
    //     "meals": {
    //         "breakfast": "",
    //         "midMorningSnack": "",
    //         "lunch": "",
    //         "eveningSnack": "",
    //         "dinner": ""
    //     },
    //     "nutrition": {
    //         "calories": "",
    //         "protein": "",
    //         "carbs": "",
    //         "fats": ""
    //     },
    // },
    // {
    //     "day": "Sunday",
    //     "image": "./Sunday2.jpg",
    //     "fav": false,
    //     "meals": {
    //         "breakfast": "",
    //         "midMorningSnack": "",
    //         "lunch": "",
    //         "eveningSnack": "",
    //         "dinner": ""
    //     },
    //     "nutrition": {
    //         "calories": "",
    //         "protein": "",
    //         "carbs": "",
    //         "fats": ""
    //     },
    // }
    // ]);

    const [userCustomDiet, setUserCustomDiet] = useState([
        { id: 0 },
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
    ]);

    const [tempData, setTempData] = useState();

    // console.log("In the Routing Diet Page : ",tempData);


    return (
        <>
            <MainData.Provider value={{ tableData, settable, obj, setObj, userCustomDiet, setUserCustomDiet, tempData, setTempData }}>
                <HashRouter>
                    <Routes>
                        <Route index path="/" element={<LoginForm />}></Route>
                        <Route path="/Diet" element={<DietInterface />}></Route>
                        <Route path="/NutritionCaliculation" element={<NutritionCalulation><Outlet /></NutritionCalulation>}>
                            <Route path="/NutritionCaliculation/OurChoice" element={<OurChoiceCal />} />
                            <Route path="/NutritionCaliculation/YourChoice" element={<YourChoiceCal />} />
                        </Route>
                        <Route path="/CustomizeMeal" element={<CoustmizeDiet />} ></Route>
                        <Route path="/MenuDetails" element={<MenuDetails />}></Route>
                    </Routes>
                </HashRouter>
            </MainData.Provider>
        </>
    )
}

export default RouteDiet;