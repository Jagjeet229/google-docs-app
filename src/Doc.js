import React,{Component} from 'react';
import fire from './fire';

import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/github';



class Doc extends Component{





	state={
		code:""
	}





componentDidMount(){

	fire.database().ref('msg').on('value',(snapshot)=>{
	var user=snapshot.val();
	this.setState({code:user.body})

})
 }




_handleChange(data){
	fire.database().ref('msg').set({
	body: data

})

}

	render(){

		return(

			<div>
        

        <AceEditor
    mode="java"
    value={this.state.code}
    theme="github"
    onChange={(data)=>this._handleChange(data)}
    name="UNIQUE_ID_OF_DIV"
    editorProps={{$blockScrolling: true}}
  />

			</div>


		)
	}

}



export default Doc;
