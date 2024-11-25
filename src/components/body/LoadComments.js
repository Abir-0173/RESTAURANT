import React from 'react';
import dateFormat from 'dateformat';
import Loading from './Loading';

const LoadComments = props => {
    // console.log("Comments in LoadComments:", props.comments);
    if (props.commentsIsLoading) {
        return <Loading />
    } else {
        return (
            props.comments.map(comment => {
                return (
                    <div key={comment.id}>
                        <h5>{comment.author}</h5>
                        <p>{comment.comment}</p>
                        <p>Rating: {comment.rating}</p>
                        <p>{dateFormat(comment.date, 'dddd, mmm dS, yyyy, h:MM:ss TT')}</p>

                    </div>
                );
            })

        );
    }
};

export default LoadComments;