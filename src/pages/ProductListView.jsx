import React, {useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ProductItems from '../components/ProductItems';
import { fetchProducts, createProduct } from '../redux/actions';
import MyModal from '../components/UI/modal/MyModal';
import ProductForm from '../components/ProductForm';
import MyButton from '../components/UI/button/MyButton';
import { createNewPost, getById } from '../API/RESTServise'

const ProductListView = () => {
    const [modal, setModal] = useState(false);
    const [editOrCreate, setEditOrCreate] = useState(true);
    const [idForEdit, setIdForEdit]= useState('');


    const dispatch = useDispatch();
    const products = useSelector(state => state.product.products);

    useEffect(() => {
        dispatch(fetchProducts());

        // getById(idForEdit);
    
    }, [dispatch]);

    const addNewProduct = (product) =>{
        dispatch(createProduct(product));
        // createProduct(product)
        setModal(false)
        setEditOrCreate(true)
    }
    // const openItemProduct = (id)=>{

    // }
    const editProduct = (data) =>{
        setEditOrCreate(false)
        setIdForEdit(data.id);
        console.log(data.id);
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
                <ProductForm closeAll={closeWindow} create={ addNewProduct }></ProductForm>
            {/* {
                editOrCreate? 
                    <ProductForm 
                        typeButton={editOrCreate} 
                        create={addNewProduct} 
                        closeAll={closeWindow}
                    ></ProductForm> :
                    <ProductForm></ProductForm>

            } */}
            </MyModal>
            <div className="product-list">
            {
                products.map((item) =>
                (
                    <ProductItems key={item.id} data={item}   /> )
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