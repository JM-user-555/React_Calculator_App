import React, { useState } from "react";
import "./App.css"


function App(){
    const [num1 , setNum1] = useState(0)
    const [num2 , setNum2]= useState(0)
    const [operator, setOperator]=useState("")
    const [result, setResult]=useState(0)
    

    function fct1(){
        if(operator===""){
            setNum1(num1*10+1)
        
        } else{
           setNum2(num2*10+1) 
        }
    }
    
    function fct2(){
        if(operator === ""){
            setNum1(num1*10+2)    
        }else{
            setNum2(num2*10+2)
        }
    }
    function fct3(){
        if(operator === ""){
            setNum1(num1*10+3)    
        }else{
            setNum2(num2*10+3)
        }    
    }
    function fct4(){
        if(operator === ""){
            setNum1(num1*10+4)    
        }else{
            setNum2(num2*10+4)
        }
    }
    function fct5(){
        if(operator === ""){
            setNum1(num1*10+5)    
        }else{
            setNum2(num2*10+5)
        }
    }
    function fct6(){
        if(operator === ""){
            setNum1(num1*10+6)    
        }else{
            setNum2(num2*10+6)
        }
    }
    function fct7(){
        if(operator === ""){
            setNum1(num1*10+7)    
        }else{
            setNum2(num2*10+7)
        }
    }
    function fct8(){
        if(operator === ""){
            setNum1(num1*10+8)    
        }else{
            setNum2(num2*10+8)
            
        }  
    }
    function fct9(){
        if(operator === ""){
            setNum1(num1*10+9)    
        }else{
            setNum2(num2*10+9)
        }  
    }
    function fct0(){
        if(operator === ""){
            setNum1(num1*10+0)    
        }else{
            setNum2(num2*10+0)
        }  
    }
    function fctPlus(){
        setOperator("+")
        if(result!==0){
            setNum1(result)
            setNum2(0)
            setResult(0)
        }
    }
    function fctMinus(){
        setOperator("-")
        if(result!==0){
            setNum1(result)
            setNum2(0)
            setResult(0)
        }
    }
    function fctMultiply(){
        setOperator("*")
        if(result!==0){
            setNum1(result)
            setNum2(0)
            setResult(0)
        }
    }
    function fctDivide(){
        setOperator("/")
        if(result!==0){
            setNum1(result)
            setNum2(0)
            setResult(0)
        }
    }
    function fctEq(){
        if(operator==="+"){
        setResult(num1+num2)
        }
        if(operator==="-"){
            setResult(num1-num2)
        }
        if(operator==="*"){
            setResult(num1*num2)
        }
        if(operator==="/"){
            setResult(num1/num2)
        }
        if(operator==="^"){
            setResult(Math.pow(num1,num2))
        }
    }
    function fctClear(){
        setNum1(0)
        setNum2(0)
        setResult(0)
        setOperator("")
    }
    function fctDel(){
        if(operator === ""){
            setNum1(parseInt(num1/10))
        }else{
            setNum2(parseInt(num2/10))
            
        }  
    }
    function fctSqrt(){
        setResult(Math.sqrt(num1))
        setOperator("sqrt")
        if(result!==0){
            setNum1(result)
            setNum2(0)
            setResult(0)
        }
    }
    function fctPower(){
        setOperator("^")
        if(result!==0){
            setNum1(result)
            setNum2(0)
            setResult(0)
        }
    }


    const [a, setA] = useState(0)
    const [b, setB] = useState(0)
    const [c,setC] = useState(0);
    const [res1, setRes1] = useState(0)
    const [res2, setRes2] = useState(0)
    function solveEq(){
    setRes1((-b-Math.sqrt(b*b-4*a*(c)))/(2*a))
    setRes2((-b+Math.sqrt(b*b-4*a*(c)))/(2*a)) 
    }

    return(
        <div>
            
        <div id="CalculatorTitle">
            <h2>Calculator</h2>
        </div>
        <div id="Calc">
        <div>
            <button id="CalcBtns" onClick={fct1}>1</button>
            <button id="CalcBtns" onClick={fct2}>2</button>
            <button id="CalcBtns" onClick={fct3}>3</button>
            <button id="CalcOperator" onClick={fctMultiply}>x</button>
            <button id="CalcClear" onClick={fctClear}>C</button>
            {console.log(num1)}
        </div>
        <div>
        <button id="CalcBtns" onClick={fct4}>4</button>
        <button id="CalcBtns" onClick={fct5}>5</button>
        <button id="CalcBtns" onClick={fct6}>6</button>
        <button id="CalcOperator" onClick={fctDivide}>/</button>
        <button id="CalcOperator" onClick={fctSqrt}>√</button>
        </div>
        <div>
        <button id="CalcBtns" onClick={fct7}>7</button>
        <button id="CalcBtns" onClick={fct8}>8</button>
        <button id="CalcBtns" onClick={fct9}>9</button>
        <button id="CalcOperator" onClick={fctMinus}>-</button>
        <button id="CalcOperator" onClick={fctPower}>^</button>
        </div>
        <div>
            <button id="btn0" onClick={fct0}>0</button>
            <button id="CalcOperator" onClick={fctEq}>=</button>
            <button id="CalcOperator" onClick={fctPlus}>+</button>
            <button id="CalcOperator" onClick={fctDel}>Del</button>
        </div>
        <div>
            <h3>Number1: {num1}</h3>
            <h3>Number2: {num2}</h3>
            <h3>Result: {result}</h3>
        </div>
        </div>
        <div id="CalculatorTitle">
            <h2>Quadratic Equation Solver</h2>
        </div>
        <div>
        
        <div id="QuadDiv">
        <h2>Enter the 3 parameters of the equation:</h2>
        <h3>a: <input type="number" onChange={(e)=>{setA(e.target.value)}}></input></h3>
        <h3>b: <input type="number" onChange={(e)=>{setB(e.target.value)}}></input></h3>
        <h3>c: <input type="number" onChange={(e)=>{setC(e.target.value)}}></input></h3>
        <button id="solveEq" onClick={solveEq}>Solve</button>
        <h2> The equation is: <span id="bolded">{a}</span>x^2 + <span id="bolded">{b}</span>x + <span id="bolded">{c}</span> = 0</h2>
        <h2>The Result is : </h2>
        <h3>x1 = {res1}</h3>
        <h3>x2 = {res2}</h3>
        </div> 
        </div>
        <div id="footer">
          <footer id="footerPar">
            Done by Jad Mattar
          </footer>
        </div>
        </div>
    )
}

export default App