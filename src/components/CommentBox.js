import React, { Component } from 'react';

export default class CommentBox extends Component {
   constructor(props) {
      super(props);
      this.state = {comment: ''};
   }

   handleChange = e => {
      this.setState({comment: e.target.value});
   }

   render() {
      return(
         <form className="comment-box" onSubmit={e => {
            this.setState({comment: ''});
            e.preventDefault();
         }}>
            <input 
               type="text" placeholder="Enter comments here" 
               onChange={this.handleChange}
               value={this.state.comment}/>
            <button           type="submit">Add</button>
         </form>
      );
   }
}