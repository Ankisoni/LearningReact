import React from 'react';

const Card = () =>{
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card text-center ">
                        <div className="card-header">
                            Card Header
                        </div>
                        <div className="card-body">
                            <img className="card-img-top" src="https://picsum.photos/200/100" alt="Card image" />

                            <h5 className="card-title">Card Title</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );

}

export default Card;