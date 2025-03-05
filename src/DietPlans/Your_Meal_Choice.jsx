import React, { useState } from "react";

import "./diet_Caliculator.css";

import customdiet from "./CustomDiet";
import customData from "./customDietData";

const YourChoiceCal = () => {

    const variable = customdiet;

    const [tableData, setTable] = useState(variable);

    const [objDta,setObj]=useState(customData);

    const [select1, setselect1] = useState(null);
    const [select2, setselect2] = useState();
    const [select3, setselect3] = useState();
    const [select4, setselect4] = useState();
    const [select5, setselect5] = useState();
    const [caloriee, setcalorie] = useState(0);
    const [proteinn, setprotein] = useState(0);
    const [carbo, setcarbo] = useState(0);
    const [fatss, setfats] = useState(0);

    // console.log(select1, select2, select3, select4, select5);

    // console.log("caloriee : ",caloriee);

    const applyfilter = () => {
        let totalCalories = 0;
        let totalProtein = 0;
        let totalCarbs = 0;
        let totalFats = 0;
    
        tableData.forEach((item) => {
            const meals = [
                item.meals.breakfast,
                item.meals.midMorningSnack,
                item.meals.lunch,
                item.meals.eveningSnack,
                item.meals.dinner
            ];
    
            meals.forEach((meal) => {
                if ([select1, select2, select3, select4, select5].includes(meal.name)) {
                    totalCalories += meal.calories || 0;
                    totalProtein += meal.protein || 0;
                    totalCarbs += meal.carbs || 0;
                    totalFats += meal.fats || 0;
                }
            });
        });
    
        setcalorie(totalCalories);
        setprotein(totalProtein);
        setcarbo(totalCarbs);
        setfats(totalFats);
    };

    const clearFilter = () => {
        setselect1(null);
        setselect2(null);
        setselect3(null);
        setselect4(null);
        setselect5(null);
        
    }
    

    return (
        <>
            {/* <h1>YourChoiceCal</h1> */}
            <div className="YourMealDiv1">
                <div className="yourmealform">
                    <form>
                        <div className="labelheaddiv">
                            <label className="labelhead">Choose your meal course</label>
                        </div><br />
                        <div className="BreakFastdiv">
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
                        <div className="morningSnackdiv">
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
                        <div className="lunchdiv">
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
                        <div className="eveningSnackdiv">
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
                        <div className="dinnerdiv">
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
                        <div className="divbtnscustom">
                            <button type="button" className="buttoncustom" onClick={applyfilter}>Apply</button>
                            <button type="button" className="buttoncustom" onClick={clearFilter}>Cancel</button>
                        </div>
                    </form>
                </div>
                <div className="nutritionClass1">
                    <h1 className="nutrih1"> NUTRITIONS CALCULATION </h1>
                    <h3>BreakFast    |    Post_Breakfast    |    Lunch    |    Snacks    |    Dinner</h3>
                    <hr />
                    <div>
                        {/* {tableData?.map((i) => */}
                        <div className="dietdivs">
                            <h2 className="h2classindietdivs">Calories <h1 className="h1classindietdivs">{caloriee}</h1></h2>
                            <h2 className="h2classindietdivs">Protein <h1 className="h1classindietdivs">{proteinn}</h1></h2>
                            <h2 className="h2classindietdivs">Crabohyderates<h1 className="h1classindietdivs">{carbo}</h1></h2>
                            <h2 className="h2classindietdivs">Fats <h1 className="h1classindietdivs">{fatss}</h1></h2>
                        </div>
                        {/* )} */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default YourChoiceCal;