import React, { useContext, useEffect, useState } from "react";
import { MainData } from "./Routing_Diet_Page";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";

const OurChoiceCal = () => {

    const { tableData, settable } = useContext(MainData);

    const [cloneTable, setClonetable] = useState(tableData);

    // const [dayStore, setDay] = useState();
    useEffect(() => { setClonetable([tableData[0]]) }, []);

    const changedSelection = (e) => {
        // console.log("the console : ",e.target.value);
        const newtab = tableData?.filter((i) => e.target.value === i.day.toLowerCase());

        // setDay(newtab.day);

        setClonetable(newtab);
    }

    const favfunction = (obj) => {
        const newtab = cloneTable.map((i) => {
            if (i.day === obj.day) {
                if (!i.fav)
                    i.fav = true;
                else {
                    i.fav = false;
                }
            }
            return i;
        })
        setClonetable(newtab);
    }

    return (
        <>
            <div className="classcaliculation">
                <div className="class1div">
                    <div className="classformselect">
                        <form>
                            <label for="ourchoice" style={{ fontSize: "1.5em" }}>Our Choice : </label>
                            <select id="ourchoice" name="ourchoice" onChange={changedSelection} style={{ fontSize: "1.5em" }}>
                                <option value="monday">Monday</option>
                                <option value="tuesday">Tuesday</option>
                                <option value="wednesday">Wednesday</option>
                                <option value="thursday">Thursday</option>
                                <option value="friday">Friday</option>
                                <option value="saturday">Saturday</option>
                                <option value="sunday">Sunday</option>
                            </select>
                        </form>
                    </div>
                    <div className="ourprintingdiv">
                        <div className="sub-div-monday">
                            {cloneTable?.map((i) => {
                                return (<div className="data-div">
                                    <h1 style={{ display: "inline" }}>{i.day}</h1><span className="favspan">
                                        {i.fav ? <MdOutlineFavorite onClick={() => favfunction(i)} style={{ color: "red" }} />
                                            : <MdFavoriteBorder onClick={() => favfunction(i)} />}</span>
                                    {/* <span><MoreVertTwoToneIcon className="threedots" /></span> */}
                                    <img src={i.image} alt="not an available" className="imageTag" />
                                    <ul>
                                        <li><b>Breakfast</b> : {i.meals.breakfast}</li>
                                        <li><b>Mid-Morning Snack</b> : {i.meals.midMorningSnack}</li>
                                        <li><b>Lunch</b> : {i.meals.lunch}</li>
                                        <li><b>Evening Snack</b> : {i.meals.eveningSnack}</li>
                                        <li><b>Dinner</b> : {i.meals.dinner}</li>
                                    </ul>
                                </div>)
                            })}
                        </div>
                    </div>
                </div>
                <div className="nutritionClass1">
                    <h1 className="nutrih1"> NUTRITIONS CALCULATION </h1>
                    <h3>BreakFast    |    Post_Breakfast    |    Lunch    |    Snacks    |    Dinner</h3>
                    <hr />
                    <div>
                        {cloneTable?.map((i) =>
                            <div className="dietdivs">
                                <h2 className="h2classindietdivs">Calories <h1 className="h1classindietdivs">{i.nutrition.calories}</h1></h2>
                                <h2 className="h2classindietdivs">Protein <h1 className="h1classindietdivs">{i.nutrition.protein}</h1></h2>
                                <h2 className="h2classindietdivs">Crabohyderates<h1 className="h1classindietdivs">{i.nutrition.carbs}</h1></h2>
                                <h2 className="h2classindietdivs">Fats <h1 className="h1classindietdivs">{i.nutrition.fats}</h1></h2>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </>
    )
}

export default OurChoiceCal;