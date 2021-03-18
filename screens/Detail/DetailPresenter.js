import React from 'react';
import { ActivityIndicator, Dimensions, Text} from 'react-native';
import styled from 'styled-components/native';
import { apiImageFormat } from '../../API';
import Horizontal from '../../components/Horizontal';
import Poster from '../../components/Poster';
import ScrollContainer from '../../components/ScrollContainer';
import Vote from '../../components/Vote';
import { formatDate } from '../../utils';
import HorizontalSlider from "../../components/HorizontalSlider";

const Header = styled.View`
    height: ${Dimensions.get("window").height / 3}px;
    align-items:center;
    justify-content: flex-end;
`
const BackgroundImg = styled.Image`
    width: 100%;
    height:100%;
    opacity:0.4;
    position: absolute;
`

const Container = styled.View`
    flex-direction:row;
    align-items:center;
    top: 30px;
`

const Info = styled.View`
    width: 50%;
    margin-left:40px;
`

const Title = styled.Text`
    color: white;
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 10px;
`
const Data = styled.View`
    padding: 0px 30px;
    margin-top: 30px;
    margin-bottom: 30px;
`

const DataName = styled.Text`
    margin-top: 20px;
    color: white;
    margin-bottom: 20px;
    font-size: 18px;
    font-weight:800;
`

const DataValue = styled.Text`
    color: white;
    opacity: 0.8;
    font-weight: 500;
    font-size: 14px;
`


function Detail({loading, result}) {

    return (
        <ScrollContainer loading={false}>
            <>
                <Header>
                    <BackgroundImg source={{uri: apiImageFormat(result.backgroundImage, "-")}} />
                    <Container>
                        <Poster url={result.poster} />
                        <Info>                  
                            <Title>{result.title}</Title>
                            <Text>{result.votes && <Vote votes={result.votes} />}</Text>       
                        </Info>
                    </Container>
                </Header>
                <Data>
                    {result.overview ? 
                    <>
                        <DataName>Overview</DataName>
                        <DataValue>{result.overview}</DataValue>
                    </> : null }
                    {loading && <ActivityIndicator style={{marginTop: 30}} color="white" size="small" />}
                    {result.spoken_languages ? 
                        <>
                            <DataName>Language</DataName>
                            <DataValue>{result.spoken_languages.map(l => l.name)}</DataValue>
                        </> : null
                    }
                    {result.release_date ? (
                        <>
                            <DataName>Release Date</DataName>
                            <DataValue>{formatDate(result.release_date)}</DataValue>
                        </>
                    ) : (
                        <>
                            <DataName>First Air Date</DataName>
                            <DataValue>{formatDate(result.first_air_date)}</DataValue>
                        </>
                    )
                    }
                    {result.status ? 
                        <>
                            <DataName>Status</DataName>
                            <DataValue>{result.status}</DataValue>
                        </> : null
                    }
                    {result.runtime ? 
                        <>
                            <DataName>Runtime</DataName>
                            <DataValue>{result.runtime} mins</DataValue>
                        </> : null
                    }
                    {result.genres ? 
                        <>
                            <DataName>Genres</DataName>
                            <DataValue>{result.genres.map((g, index) => index === result.genres.length - 1 ? g.name : `${g.name}, `)}</DataValue>
                        </> : null
                    }
                    {result.number_of_seasons && result.number_of_episodes ? 
                        <>
                            <DataName>Seasons / Episodes</DataName>
                            <DataValue>{result.number_of_seasons} seasons / {result.number_of_episodes} episodes</DataValue>
                        </> : null
                    }
                    
                </Data>
                {result.seasons && 
                    <HorizontalSlider title={"Seasons"}>
                        {result.seasons.map(season => 
                        <Horizontal
                            isDetail={true}
                            id={season.id}
                            key={season.id}
                            poster={season.poster_path}
                            title={season.name}
                        />  
                    )}
                        
                    </HorizontalSlider>
                }
            </>
        </ScrollContainer>
    )
}

export default Detail;
