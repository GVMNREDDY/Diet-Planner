import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MainData } from "./Routing_Diet_Page";
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';

const CoustmizeDiet = () => {
    const location = useLocation();

    const data = location.state;

    const {setTempData, tempData}=useContext(MainData);

    const nav=useNavigate();

    const [select1, setselect1] = useState(data.meals.breakfast);
    const [select2, setselect2] = useState(data.meals.midMorningSnack);
    const [select3, setselect3] = useState(data.meals.lunch);
    const [select4, setselect4] = useState(data.meals.eveningSnack);
    const [select5, setselect5] = useState(data.meals.dinner);

    // console.log("Data in the CustomDiet : ", data);

    const saveCustomData = () => {
        data.meals.breakfast=select1;
        data.meals.midMorningSnack=select2;
        data.meals.lunch=select3;
        data.meals.eveningSnack=select4;
        data.meals.dinner=select5;

        // console.log("setTempData in Coustmize Diet : ",tempData);

        tempData[0].diet?.map((i) => {
            if(i.day.toLowerCase() === data.day.toLowerCase())
            {
                i.meals=data.meals;
                // console.log(i.meals);
            }
    });

    }

    return (
        <>
            <div className="containerinCuDiet">
                <div className="rowinCuDiet">
                    <header className="headerinCuDiet">Customize your favorite meal for {data.day} <p style={{float:"right",background:"grey",
                        boxShadow:"0px 0px 5px 5px grey",marginTop:"0px",cursor:"pointer",display:"inline",height:"4.25vh",borderRadius:"0 0 0 10px"}}>
                            <CloseTwoToneIcon sx={{ fontSize: "32px",color:"black",'&:hover':{color:"white",background:"#f74522",boxShadow:"0px 0px 5px 5px red",
                                borderRadius:"0px 0px 0px 10px"} }} onClick={()=> nav("/Diet")} /></p></header>
                    <div className="col-md-12">
                        <div className="BreakFastdivinCuDiet">
                            <label for="Breakfast" className="labelcustom">BreakFast : </label>
                            <select id="Breakfast" name="customChoice" onChange={(e) => setselect1(e.target.value)} className="selectcustom">
                                <option value="">Select a BreakFast....</option>
                                <option value="Oatmeal with banana & almonds + green tea">Oatmeal with banana & almonds + green tea</option>
                                <option value="Scrambled eggs with whole wheat toast + fresh juice">Scrambled eggs with whole wheat toast + fresh juice</option>
                                <option value="Smoothie (banana, spinach, chia seeds, almond milk)">Smoothie (banana, spinach, chia seeds, almond milk)</option>
                                <option value="Boiled eggs with avocado toast">Boiled eggs with avocado toast</option>
                                <option value="Pancakes with peanut butter & honey">Pancakes with peanut butter & honey</option>
                                <option value="Omelette with spinach & feta cheese + whole wheat toast">Omelette with spinach & feta cheese + whole wheat toast</option>
                                <option value="Chia pudding with fresh fruits & honey">Chia pudding with fresh fruits & honey</option>
                            </select>
                        </div>
                        <div className="morningSnackdivinCuDiet">
                            <label for="morningSnack" className="labelcustom">Morning_Snack : </label>
                            <select id="morningSnack" name="customChoice" onChange={(e) => setselect2(e.target.value)} className="selectcustom">
                                <option value="">Select a Morning_Snack....</option>
                                <option value="Greek yogurt with honey & berries">Greek yogurt with honey & berries</option>
                                <option value="Cottage cheese with sliced apples">Cottage cheese with sliced apples</option>
                                <option value="Handful of walnuts & dried figs">Handful of walnuts & dried figs</option>
                                <option value="Handful of almonds & dates">Handful of almonds & dates</option>
                                <option value="Protein smoothie (banana, whey protein, almond milk)">Protein smoothie (banana, whey protein, almond milk)</option>
                                <option value="Greek yogurt with granola & berries">Greek yogurt with granola & berries</option>
                                <option value="Cottage cheese with nuts & flaxseeds">Cottage cheese with nuts & flaxseeds</option>
                            </select>
                        </div>
                        <div className="lunchdivinCuDiet">
                            <label for="lunch" className="labelcustom">Lunch : </label>
                            <select id="lunch" name="customChoice" onChange={(e) => setselect3(e.target.value)} className="selectcustom">
                                <option value="">Select a Lunch....</option>
                                <option value="Grilled chicken with quinoa & sautéed vegetables">Grilled chicken with quinoa & sautéed vegetables</option>
                                <option value="Lentil soup with whole grain bread">Lentil soup with whole grain bread</option>
                                <option value="Grilled fish with sweet potatoes & side salad">Grilled fish with sweet potatoes & side salad</option>
                                <option value="Chickpea salad with feta cheese & olive oil dressing">Chickpea salad with feta cheese & olive oil dressing</option>
                                <option value="Grilled turkey with mashed potatoes & steamed beans">Grilled turkey with mashed potatoes & steamed beans</option>
                                <option value="Brown rice with grilled shrimp & stir-fried vegetables">Brown rice with grilled shrimp & stir-fried vegetables</option>
                                <option value="Quinoa bowl with chickpeas, avocado, and tahini dressing">Quinoa bowl with chickpeas, avocado, and tahini dressing</option>
                            </select>
                        </div>
                        <div className="eveningSnackdivinCuDiet">
                            <label for="eveningSnack" className="labelcustom">Evening_Snack : </label>
                            <select id="eveningSnack" name="customChoice" onChange={(e) => setselect4(e.target.value)} className="selectcustom">
                                <option value="">Select a Snack....</option>
                                <option value="Handful of mixed nuts & herbal tea">Handful of mixed nuts & herbal tea</option>
                                <option value="Roasted chickpeas">Roasted chickpeas</option>
                                <option value="Hummus with carrot & cucumber sticks">Hummus with carrot & cucumber sticks</option>
                                <option value="Dark chocolate & a handful of walnuts">Dark chocolate & a handful of walnuts</option>
                                <option value="Mixed nuts & a cup of green tea">Mixed nuts & a cup of green tea</option>
                                <option value="Roasted almonds & dark chocolate">Roasted almonds & dark chocolate</option>
                                <option value="Apple slices with peanut butter">Apple slices with peanut butter</option>
                            </select>
                        </div>
                        <div className="dinnerdivinCuDiet">
                            <label for="Dinner" className="labelcustom">Dinner : </label>
                            <select id="Dinner" name="customChoice" onChange={(e) => setselect5(e.target.value)} className="selectcustom">
                                <option value="">Select a Dinner....</option>
                                <option value="Salmon with steamed broccoli & brown rice">Salmon with steamed broccoli & brown rice</option>
                                <option value="Stir-fried tofu with bell peppers & brown rice">Stir-fried tofu with bell peppers & brown rice</option>
                                <option value="Vegetable curry with quinoa">Vegetable curry with quinoa</option>
                                <option value="Baked chicken with roasted vegetables">Baked chicken with roasted vegetables</option>
                                <option value="Baked salmon with roasted asparagus & quinoa">Baked salmon with roasted asparagus & quinoa</option>
                                <option value="Grilled tofu with mixed greens & olive oil dressing">Grilled tofu with mixed greens & olive oil dressing</option>
                                <option value="Grilled chicken with roasted sweet potatoes & steamed broccoli">Grilled chicken with roasted sweet potatoes & steamed broccoli</option>
                            </select>
                        </div>
                        <div className="buttonsinCuDiet">
                            <button type="button" onClick={saveCustomData} className="savebtninCuDiet">Save</button>
                            <button type="button" onClick  className="savebtn2inCuDiet">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoustmizeDiet;