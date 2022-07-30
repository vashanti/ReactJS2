import React, { Component } from 'react';

class Posts extends Component {
    state = {
        title: "These are my Posts",
        posts: [{
            id: 1,
            title: "Gardening",
            date: "July 17th",
            author: "James Paul",
        },
        {
            id: 2,
            title: "Hiking",
            date: "July 27th",
            author: "Mike Sandy",
        },
        {
            id: 3,
            title: "Celebration",
            date: "July 30th",
            author: "Just Sophie",
        },
        {
            id: 4,
            title: "A New Day",
            date: "July 29th",
            author: "June Gerard"
        }
        ],
    }
    
    addItem(event){
        event.preventDefault()
        this.setState({
            posts:[...this.state.posts, {
                id:Math.round(Math.random()*100),
            title: event.target.title.value,
            date: event.target.date.value,
            author: event.target.author.value
        }]
        })
        event.target.title.value =''
        console.log(this.state.posts)
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <div>
                    {this.state.posts.map(
                        item => (
                            <p key={item.id}>
                                {item.title}<br />
                                {item.date}<br />
                                {item.author}
                            </p>
                        )
                    )}
                </div>
                <div>
                    <form onSubmit={this.addItem.bind(this)}>
                        <input type="text" name='id' /><br />
                        <input type="text" name='title' /><br />
                        <input type="text" name='date' /><br />
                        <input type="text" name='author' /><br />
                        <button>Add</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Posts;