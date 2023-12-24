import React,{useState} from "react";

  

const App = () => {

    const [gold,setGold] = useState(0);
    const [silver,setSilver] = useState(0);
    const [platinum,setPlatinum] = useState(0);

    
    function increaseGold(){
        setGold(gold+1);
    }
    function increaseSilver(){
        setSilver(silver+1)
    }
    function increasePlatinum(){
        setPlatinum(platinum+1);
    }


    return (
      <div>
        <h1>
          gold:{gold} silver:{silver} platinum:{platinum}
        </h1>
       
       <button onClick={increaseGold}>IncreaseGold</button>
       <button onClick={increaseSilver}>IncreaseSilver</button>
       <button onClick={increasePlatinum}>IncreasePlatinum</button>
       
      </div>
    );
}

export default App;