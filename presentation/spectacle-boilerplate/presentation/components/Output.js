  import React, { Component } from 'react'
  import ReactJson from 'react-json-view'

  class Output extends Component {
     render() {

       const { error, isLoaded, result } = this.props
       if (error) {
         return "error : " + error.message;
       } else if (!isLoaded) {
         return 'Waiting...';
       } else {
         return(
             <textarea
               rows='10'
               value={JSON.stringify(result, null, 2)}
             />
       )
      }

     }
  }

  export default Output
