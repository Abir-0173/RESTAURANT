import React from 'react';
import dateFormat from 'dateformat';

const LoadComments = ({ comments }) => {
    const previewComments= comments.map((comment) =>{
        return (
            <div key={comment.id}>
                <h5>{comment.author}</h5>
                <p>{comment.comment}</p>
                <p>Rating: {comment.rating}</p>
                <p>{dateFormat(comment.date, 'dddd, mmm dS, yyyy, h:MM:ss TT')}</p>

            </div>
        );
    });
    return (
        <div>{previewComments}</div>
    )
};

export default LoadComments;