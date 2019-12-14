import React from 'react';
import PropTypes from 'prop-types';


const View = props => {
    console.log(props);
    const { Lesli, datas } = props;
    return (
        < div >
            <p>{Lesli} {datas.id}{datas.title}</p>
        </div >
    );
}
/*View.propTypes = {
    Lesli: PropTypes.string.isRequired,
    soft: PropTypes.object.isRequired
};*/
export default View;