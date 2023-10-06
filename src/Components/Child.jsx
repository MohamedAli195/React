import React, { Component } from 'react'

export default class Child extends Component {

  render() {
    let {name,model,price} =this.props.productDetails
    return (
        
      <div className='col-md-4'>

        <p>product name:{name}</p>
        <p>product model:{model}</p>
        <p>product price:{price}</p>
        <button className='btn btn-success' onClick={()=>this.props.updatePriceHandle(this.props.index)}>update price</button>
        <button className='btn btn-danger' onClick={()=>this.props.delete(this.props.index)}>delete product</button>
      </div>
    )
  }
}
