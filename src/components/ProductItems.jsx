import React from 'react';
import MyButton from './UI/button/MyButton';

const ProductItems = (props) => {
    const {id, imageUrl, name, count, size, weight, comments} = props.data
    
    
    return (
        <div className="product-item" onClick={()=>console.log(id)}>
            <div className="wrapper-product">
                <div className="picture-product">
                    <img src={imageUrl} alt={name} />
                </div>
                <div className="info-product">
                    <h2>{name}</h2>
                    <p>Count: {count}</p>
                    <p>Width: {size.width}</p>
                    <p>Heigth: {size.height}</p>
                    <p>Weigth: {weight}</p>
                </div>
            </div>
            <div className="control-product">
                <MyButton onClick={()=>props.editProduct(props.data)}>Edit</MyButton>
            </div>
            {/* <div className="comments-wrapper">
                <div className="comment-block"></div>
                <div className="comment-date"></div>
            </div> */}
        </div>
        
    );
};

export default ProductItems;