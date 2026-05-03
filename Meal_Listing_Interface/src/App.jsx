import { useEffect, useState } from "react";
import "./App.css";

function App() {


  const [meals, setMeals] = useState([]);


  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch("https://api.freeapi.app/api/v1/public/meals")
      .then((res) => res.json()) 
      .then((data) => {
        console.log(data); 

       
        setMeals(data.data.data);

        setLoading(false); 
      });
  }, []);

  return (
    <div className="app">

     
      <h1 className="heading">Meals</h1>

      
      {loading ? (
        <h2>Loading...</h2>
      ) : (

       
        <div className="meals-container">

          
          {meals.map((meal, index) => (

            <div key={index} className="card">


              <img
                src={meal.strMealThumb}
                alt=""
                className="meal-img"
              />


              <h3>{meal.strMeal}</h3>


              <p className="category">{meal.strCategory}</p>

            </div>

          ))}

        </div>
      )}

    </div>
  );
}

export default App;