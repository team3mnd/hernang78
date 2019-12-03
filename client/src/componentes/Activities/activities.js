import React, { Component } from 'react'

export default class activities extends Component {
    state = {
        activities: [],
        loading: true
    }
    
    componentDidMount(){
        this.setState({
            activities: this.props.activities,
            loading: false
        })
    }
    render() {
        const {loading, activities} = this.state
        /* console.log(this.props) */
        return (
            <div>
                {loading ? 
                    "Loading..."
                :
                <div>
                    {activities.map((activity, i) => (
                        <div key={i}>
                            {activity.title}
                        </div>
                    ))}
                </div>    
            }
            </div>
        )
    }
}
