// Functional components
import React from "react";
import PropTypes from 'prop-types';

const FirstApp = ({greetings, subTitle}) => {

    return (<>
        <h1>{ greetings }</h1>
        <p>{subTitle}</p>
    </>
    );
};

FirstApp.propTypes = {
    greetings: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
    subTitle: 'Wellcome to the jungle'
}


export default FirstApp;