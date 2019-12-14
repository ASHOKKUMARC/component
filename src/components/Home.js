import React, { useState } from 'react';
import View from './View';

const product = { id: 1, title: "from home" };

const test = {
    Lesli: "Lesli",
    datas: {
        "id": product.id,
        "title": product.title
    }
}



const Home = () => {
    //const [objects] = useState(product);
    return (
        <div className="column">
            <div className="col-body">
                <div id="preview">{"How  display contents here"}
                    {//objects.map(product => (<View product={product} />))
                        <View {...test} />
                    }
                </div>
            </div>
        </div>
    );
}

export default Home; 