import React, {useState} from 'react';
import PropTypes from 'prop-types';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

const ProductForm = ({create, typeButton, edit, closeAll}) => {
    
    const [product, SetProduct] = useState({
        id: '',
        name:'',
        count:'',
        imageUrl:'',
    
        width: '',
        heigth: '',
        
        weight:'',
        comments:[]

    })
    const createNewProduct = (e) =>{
        
        e.preventDefault();

        const newProduct = {
            id: Date.now(),
            ...product,
            size:{
                width: product.width,
                heigth: product.heigth
            }
            
        }
        create(newProduct);

        for(const o in product){
            product[o] = ''
        }
    }
    const closeModal = (e) =>{
        e.preventDefault();

        closeAll();
    }
    const saveProduct = (e)=>{
        edit();
        console.log(product)
    }
    return (
        <div className="form-add-new-product">
            <form action="">
                <label htmlFor="name">Name</label>
            <MyInput
                id="name"
                value={product.name}
                type="text"  
                onChange = { e => SetProduct({...product, name: e.target.value})}
                placeholder="Name"
            />
            <label htmlFor="count">Count</label>
            <MyInput
                id="count"
                value={product.count}
                type="number"  
                onChange = { e => SetProduct({...product, count: e.target.value})}
                placeholder="Count"
            />
            <label htmlFor="image">Picture</label>
            <MyInput
                id="image"
                value={product.imageUrl}
                type="text"  
                onChange = { e => SetProduct({...product, imageUrl: e.target.value})}
                placeholder="Image url"
            />

            <label htmlFor="width">Width</label>
            <MyInput
                id="width"
                value={product.width}
                type="number"  
                onChange = { e => SetProduct({...product, width: e.target.value})}
                placeholder="Width"
            />
            <label htmlFor="heigth">Height</label>
            <MyInput
                id="heigth"
                value={product.heigth}
                type="number"  
                onChange = { e => SetProduct({...product, heigth: e.target.value})}
                placeholder="Heigth"
            />
             <label htmlFor="weigth">Weigth</label>
            <MyInput
                id="weigth"
                value={product.weight}
                type="number"  
                onChange = { e => SetProduct({...product,weight: e.target.value})}
                placeholder="Weigth"
            />
        {
            typeButton ? <MyButton onClick={ createNewProduct }>Add</MyButton> : <MyButton onClick={ edit }>Save</MyButton>
        }
        {/* <MyButton onClick={ createNewProduct }>Add</MyButton>  */}
        <MyButton onClick={closeModal}>Close</MyButton>
        
            </form>
        </div>
    );
};

ProductForm.propTypes = {
    id: PropTypes.string,
    name:PropTypes.string,
    count: PropTypes.number,
    imageUrl:PropTypes.string,
    width: PropTypes.number,
    heigth: PropTypes.number,
    weight:PropTypes.number,
    comments: PropTypes.array,
}
export default ProductForm;