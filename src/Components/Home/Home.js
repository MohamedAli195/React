import { Component } from "react";

class Home extends Component{
    state={
        userName : "mohamed"
    }
    render (){
        return <>
            <h2>hello {this.state.userName}</h2>
        </>
    }
}
export default Home