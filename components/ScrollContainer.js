import React from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';
import PropTypes from 'prop-types';


function ScrollContainer({loading, children}) {
    return (
        <ScrollView
            style={{ backgroundColor: "black" }}
            contentContainerStyle={{
                flexGrow: 1,
                justifyContent: loading ? "center" : "flex-start",
            }}
        >
               {loading ? (
                    <ActivityIndicator color="#0000ff" size="large" />
                ) : (children)}

        </ScrollView>
    )
}

ScrollContainer.propTypes = {
    loading: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired

}

export default ScrollContainer;
