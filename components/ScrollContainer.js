import React,{useState} from 'react';
import { ActivityIndicator, ScrollView, RefreshControl } from 'react-native';
import PropTypes from 'prop-types';


function ScrollContainer({ loading, children, refreshFn}) {
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = async () => {
        setRefreshing(true);
        await refreshFn();
        setRefreshing(false);
    
    };

    return (
        <ScrollView
            refreshControl={
                <RefreshControl 
                    refreshing={refreshing} 
                    onRefresh={onRefresh}
                />
            }
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
    children: PropTypes.node.isRequired,
    refreshFn: PropTypes.func

}

export default ScrollContainer;
