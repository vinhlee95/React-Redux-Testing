import React, { Component } from 'react';

export default class CommentBox extends Component {
   render() {
      return(
         <div className="comment-box">
            <input type="text" placeholder="Enter comments here" />
            <button type="submit">Add</button>
         </div>
      );
   }
}