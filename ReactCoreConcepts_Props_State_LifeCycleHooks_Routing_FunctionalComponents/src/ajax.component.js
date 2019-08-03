import React from 'react';
import axios from 'axios';


export default class PostsComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {allPosts : []};
    }
    componentDidMount(){
      let thePromise =  axios.get('https://jsonplaceholder.typicode.com/posts')
      thePromise.then(
          (response)=>{this.setState({allPosts : response.data})},
          (err)=>{}
      )
    }
    render(){
        let postsToBeCreated = this.state.allPosts.map(p=> <li key={p.id}>{p.title}</li>)
        return <div>
           <h1> Posts </h1>
           <ul>
               {postsToBeCreated}
            </ul>
        </div>
    }
}