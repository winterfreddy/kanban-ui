import React from 'react';
import BucketItem from './bucket_item';

class Bucket extends React.Component {
    render() {
        return (
            <div>
                {this.props.bucketName}
                {this.props.items.map( item => (
                    <BucketItem
                        title={item.title}
                        description={item.description}
                        assignee={item.assignee}
                        date={item.dateDue}
                    />
                ))}
            </div>
        )
    }
}

export default Bucket;