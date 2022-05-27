import React from 'react';
import BackButton from '../../components/general/BackButton/BackButton';

const getHeaderTitle = route => {
    const routeName = route.name ?? '';
    if (routeName !== '') {
        const routeTitle = routeName;
        return routeTitle;
    }
    return '';
};

const getScreenOptions = () => {
    const options = {
        headerTintColor: 'red',
        headerStyle: {
            backgroundColor: '#123434',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
        },
        headerTitleStyle: {
            fontSize: 32,
            color: '#353534',
            fontWeight: '600',
        },
    };
    return options;
};

const RenderBack = props => {
    const { navigation } = props;
    const onBackPress = () => navigation.goBack();
    return <BackButton onPress={onBackPress} />;
};

export { getHeaderTitle, getScreenOptions, RenderBack };