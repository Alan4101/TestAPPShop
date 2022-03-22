import React, {useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import ProductItems from '../components/ProductItems';
import ProductForm from '../components/ProductForm';

import { fetchProducts, createProduct } from '../redux/actions';

import MyModal from '../components/UI/modal/MyModal';
import MyButton from '../components/UI/button/MyButton';

import { getById } from '../API/RESTServise'
import { apiConfig } from '../config.api';

const ProductListView = () => {
    const [modal, setModal] = useState(false);
    const [editOrCreate, setEditOrCreate] = useState(true);
    const [forEdit, setForEdit]= useState({});
    const [idForEdit, setIdForEdit]= useState('');

    const dispatch = useDispatch();
    const products = useSelector(state => state.product.products);

    useEffect(() => {
        dispatch(fetchProducts());
        console.log(idForEdit)
        setForEdit(getById(apiConfig.urlProducts, idForEdit)) ;
        
    
    }, [dispatch, idForEdit]);

    const addNewProduct = (product) =>{
        dispatch(createProduct(product));
        setModal(false)
        setEditOrCreate(true)
    }
    // const openItemProduct = (id)=>{

    // }
    const saveProduct =() =>{

    }
    const editProduct = (id) =>{
        setEditOrCreate(false);
        setIdForEdit(id);

        setModal(true);
        
        
        console.log(forEdit);
    }
    const closeWindow = () =>{
        setModal(false);
    }
    return (
        <>
        <MyModal 
            visible={modal}
            setVisible={setModal}
            >
                {/* <ProductForm closeAll={closeWindow} create={ addNewProduct }></ProductForm> */}
            {
                editOrCreate? 
                    <ProductForm 
                        typeButton={editOrCreate} 
                        create={addNewProduct} 
                        closeAll={closeWindow}
                    ></ProductForm> :
                    <ProductForm
                        product={forEdit}
                        typeButton={editOrCreate} 
                        closeAll={closeWindow}
                        saveProduct={saveProduct}
                    ></ProductForm>

            }
            </MyModal>
            <div className="product-list">
            {
                products.map((item) =>
                (
                    <ProductItems 
                        key={item.id} 
                        data={item}  
                        editP={editProduct} 
                    /> )
                )
            }
            <div className="btn-create-product">
                <MyButton onClick={()=>setModal(true)}>Create product</MyButton>
            </div>
            
        </div>
        </>
        
    );
};

export default ProductListView;