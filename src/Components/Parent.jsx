import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    state= {
        products :[
          {
            id:1,
            name:"mobile",
            model:"Nokia",
            price:1000 ,
          },
          {
            id:2,
            name:"TV",
            model:"Tochiba",
            price:2000 ,
          },
          {
            id:3,
            name:"Computers",
            model:"Lenovo",
            price:1500 ,
          },
          {
            id:4,
            name:"Video Games",
            model:"Xbox",
            price:1800 ,
          },
          {
            id:5,
            name:"Clothes",
            model:"T-shirt",
            price:250 ,
          },
        ]
      
    }
    add =()=>{
      let product = {
        id:7,
        name:"tet",
        model:"tttt",
        price:50 ,
      }
      let products = [...this.state.products]
      console.log(product);
      products.push(product)
      this.setState({products})


      
    }
    updatePrice = (itemIndex)=>{
      // console.log("hello from updatePrice ",index)

      let products = [...this.state.products]
      products[itemIndex].price +=10 
      this.setState({products})
    }
 
    delete = (itemIndex)=>{
      // console.log("hello from updatePrice ",index)

      let products = [...this.state.products]
      if(itemIndex===0|| itemIndex ===products.length-1){
        products.splice(itemIndex,itemIndex+1)
      }else{
        products.splice(itemIndex,itemIndex);
      }
      this.setState({products})
    }
    
  render() {
    return (
      <div className='Parent'>
        <h1>Parent page</h1>
        <div className='row'>
          {this.state.products.map((product,index)=>  <Child key={index} productDetails ={product} index={index} updatePriceHandle ={this.updatePrice} delete={this.delete} />)} 
        </div>
        <button className='btn btn-info' onClick={this.add}>add product</button>
      </div>
    )
  }
}
