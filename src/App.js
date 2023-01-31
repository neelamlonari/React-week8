import  {usestate} from "react"

const validNumber = (input)=>{
  const[number,setNumber]=usestate(0);




  

}
function App() {
  return (
    <div className ="App">
     <h1>Insert Card number here</h1>
     <button Onclick = {validNumber}> <h2>Click me for number validation</h2></button>
    </div>
  );
}

export default App;
