import React from 'react'

function PageNotFound() {
    return (
        <>
            <div className="container my-5 alert alert-danger" role="alert">
                <h4 className="alert-heading">Oh snap! You got an error!</h4>
                <hr />
                <p className="mb-0">Sorry, but this page not found!</p>
            </div>
        </>
    )
}

export default PageNotFound