import React from 'react';

class BucketItem extends React.Component {

    render() {
        return (
            <div>
                <label> {this.props.title} </label>
                <label> {this.props.description} </label>
                <label> Assigned: {this.props.assignee} </label>
                <label> Due Date: {this.props.date} </label>
            </div>
        )
    }

}

export default BucketItem;