import React, { useState, useEffect, useRef } from 'react';
import { View, Text, FlatList, useWindowDimensions, Pressable } from 'react-native';

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import CustomMarker from './marker';

import PostCarouselItem from './PostCarouselItem';

import places from './data';

import Regioes from '../../components/Regioes';

const SearchResultsMaps = (props) => {

    const [banner, setBanner] = useState(true);

    const width = useWindowDimensions().width;

    const [selectedPlaceId, setSelectedPlaceID] = useState(null);

    const flatlist = useRef();

    const map = useRef();

    const viewConfig = useRef({ itemVisiblePercentThreshold: 70 });

    const onViewChanged = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            const selectedPlace = viewableItems[0].item;
            setSelectedPlaceID(selectedPlace.id)
        }
    })

    useEffect(() => {
        if (!selectedPlaceId || !flatlist) {
            return;
        }
        const index = places.findIndex(place => place.id === selectedPlaceId)

        flatlist.current.scrollToIndex({ index: index })

        const selectedPlace = places[index];

        const region = {
            latitude: selectedPlace.coordinate.latitude,
            longitude: selectedPlace.coordinate.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        }

        map.current.animateToRegion(region);

    }, [selectedPlaceId])

    return (
        <View style={{ width: '100%', height: '100%' }}>
            <MapView
                ref={map}
                style={{ width: '100%', height: '100%'}}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: -16.7031441,
                    longitude: -49.2336704,
                    latitudeDelta: 0.0042,
                    longitudeDelta: 0.0041,
                }}
            >
                {places.map(place => (
                    <CustomMarker
                        key={place.id}
                        coordinate={place.coordinate}
                        price={place.newPrice}
                        isSelected={place.id === selectedPlaceId}
                        onPress={() => setSelectedPlaceID(place.id)}
                    />)
                )}

            </MapView>

            {/* <View style={{ height: `auto`, width: '100%', backgroundColor: "transparent", position: 'absolute', bottom: banner ? 240 : 240 }}>
                <Regioes />
            </View> */}

            {/* {banner ? <View style={{ backgroundColor: "#fff", height: `auto`, width: '93%', marginHorizontal: `3.5%`, borderRadius: 5, display: `flex`, flexDirection: 'row', justifyContent: `space-between`, alignItems: `center`, paddingHorizontal: 10, paddingRight: 15, paddingVertical: 10, position: 'absolute', bottom: 225 }}>
                <Text>Arraste para o lado para ver as propriedades disponiveis nessa região</Text>
                <Pressable style={{}} onPress={() => setBanner(false)}>
                    <Text style={{ fontFamily: `A`, fontSize: 18 }} >X</Text>
                </Pressable>
            </View> : null} */}

            <View style={{ position: 'absolute', bottom: 10 }}>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={width}
                    snapToAlignment={"center"}
                    decelerationRate={"fast"}
                    ref={flatlist}
                    data={places}
                    viewabilityConfig={viewConfig.current}
                    onViewableItemsChanged={onViewChanged.current}
                    renderItem={({ item }) => <PostCarouselItem post={item} />}
                />
                {/* <PostCarouselItem post={places[0]} /> */}
            </View>

        </View>
    );
};

export default SearchResultsMaps;