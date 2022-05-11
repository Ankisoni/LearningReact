import React from 'react';
import Card from './Card';

const CardList = (props: any) => {
    const renderCardList = props.cards.map((card:any) => {
        return (
            <>
            <div className='col-md-4'>
            <Card card={card}></Card>
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