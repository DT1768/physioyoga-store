import React from 'react';
import { API } from '../../backend';



const ImageHelper = ({product}) => {

    const imageUrl = product ? `${API}/product/photo/${product._id}` : "https://i.ibb.co/zh7nL2d/yoga-carousal.jpg";
    return (
        <div className="border border-dark p-2">
                <img
                src={imageUrl}
                alt="product"
                style={{ maxHeight: "100%", maxWidth: "100%" }}
                className="rounded"
                />
        </div>
    );
}

export default ImageHelper;