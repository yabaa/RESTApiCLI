import React, { Component } from 'react'
import Input from './Input'
import Output from './Output'

class ApiDemo extends Component {

  state = {
    error: null,
    isLoaded: false,
    result: {}
  }
  // {
  //   "endpoint": "http://localhost:3001/teams",
  //   "method": "POST",
  //   "data":  {
  //     "name": "FC Barcelone",
  //     "city": "Barcelone",
  //     "stadium": "Camp Nou"
  //   }
  // }
  callApi = (json) => {
    const { endpoint, method, data } = JSON.parse(json);
    console.log(data);
    json &&
    fetch("http://localhost:3001" + endpoint, {
      method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(
        (result) => {
          console.log("result : ",result);
          this.setState({
            isLoaded: true,
            result
          });
        }
      )
      .catch(error => {
        this.setState({
          isLoaded: true,
          error
        });
      })
  }

 render () {
  const { result, isLoaded, error } = this.state;

   return (
     <div id="container">
        <Input call={this.callApi} />
        <div className="box" id='bluebox'>
          <p><Output result={result} isLoaded={isLoaded} error={error} /></p>
        </div>
     </div>
   )
 }
}

export default ApiDemo
