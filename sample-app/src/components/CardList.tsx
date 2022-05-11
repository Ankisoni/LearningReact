import React from 'react';

const CardList = (props: any) => {
    console.log(props);
    const renderCardList = props.cards.map((card:any) => {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card text-center ">
                                <div className="card-header">
                                    {card.header}
                                </div>
                                <div className="card-body">
                                    <img className="card-img-top" src={card.image} alt="Card image" />

                                    <h5 className="card-title">{card.title}</h5>
                                    <p className="card-text">{card.text}</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    })
    return (
        <>
        {renderCardList}
        </>
    );
}


export default CardList;