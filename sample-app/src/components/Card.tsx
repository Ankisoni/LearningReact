import React from 'react';

const Card = (props: any) => {
    const { header, image, title, text } = props.card;
    return (
        <>
            <div className="container">
                <div className="card text-center ">
                    <div className="card-header">
                        {header}
                    </div>
                    <div className="card-body">
                        <img className="card-img-top" src={image} alt="Card image" />

                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{text}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <br></br>
        </>
    );

}

export default Card;