import React,{Component} from "react";
console.log(React);
export default class App extends Component{
      constructor(props){
          super(props)
          this.state={
              count:0,
          }
      }
      date= new Date()
      increment=()=>{
          this.setState({count:this.state.count+1})
      }
      decrement=()=>{
          this.setState({count:this.state.count-1})
      }
      reset=()=>{
          this.setState({count:0})
      }
      render(){
          return(
              <>
              <img src="https://img.freepik.com/free-vector/boy-doing-math-with-abacus_1308-31022.jpg?ga=GA1.1.1700452634.1719679908&semt=ais_hybrid" alt="num"/>
              <div className="con1">  
                  <button onMouseOver={this.increment} className="add1 add">Add (➕)</button>
                  <button onMouseOver={this.decrement} className="add">sub (➖)</button>
                   <p className="result">{this.state.count}</p>
                   <img src="https://img.freepik.com/premium-photo/golden-speech-bubble-as-cloud-with-yellow-border-isolated-white-background-copy-space_113767-2479.jpg?ga=GA1.1.1700452634.1719679908" alt="cloud"/>
                    <button onClick={this.reset} className="add res"> Reset</button>
              </div>
              </>
          )
      }
  }
  