import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";
function App() {
  // let foodItems = ["Green", "Green Vegitables", "Roti", "Salad", "Milk"];

  // let textStateArr = useState("Food Item Entered by user");
  // let textToShow = textStateArr[0]; //current value
  // let setTextState = textStateArr[1]; //store value

  // let [textToShow, setTextState] = useState();

  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem]; //...foodItems will take values from foodItem and newFoodItem will add new items
      setFoodItems(newItems);
      // console.log(`Food value entered is:${newFoodItem}`);
    }
    // console.log(event.target.value);
    // setTextState(event.target.value);
  };
  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Foods</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        {/* <p>{textToShow}</p> */}
        <FoodItems items={foodItems}></FoodItems>
      </Container>
      {/* <Container>
        <p>
          {" "}
          Above is the list of healthy foods that are good for your health and
          well being.
        </p>
      </Container> */}
    </>
  );
}

export default App;
