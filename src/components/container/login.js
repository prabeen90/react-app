import React from 'react';
import TextField from 'material-ui/TextField';


class Login extends React.Component{

  render(){
    return(
      <div>
        <TextField
           hintText="Hint Text"
           floatingLabelText="Fixed Floating Label Text"
           floatingLabelFixed={true}
         /><br />
         <TextField
           hintText="Password Field"
           floatingLabelText="Password"
           type="password"
         />
     </div>
    );
  }
}

export default Login;
