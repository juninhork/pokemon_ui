/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableHighlight } from 'react-native';
import { Container,ContainerElement,ImageCharacter,TextName} from './PokemonCell.style';
import PropTypes from 'prop-types';

const  PokemonCell = (props) =>{
    const _detailCharacter = () => {
        props.onPress(props.id);
    };

    const { sourceImage, name } = props;

    return (
        <Container>
             <TouchableHighlight underlayColor={'transparent'} onPress={_detailCharacter}>
                <ContainerElement>
                    <ImageCharacter source={{ uri: sourceImage }}/>
                    <TextName >{name}</TextName>
                </ContainerElement>
            </TouchableHighlight>
        </Container>
    );
};

export default PokemonCell;

/**
 * @name PokemonCell propTypes
 * @type {propTypes}
 * @memberof PokemonCell
 * @static
 * @example
 * <PokemonCell onPress={onPress} name= {name} sourceImage={sourceImage} id={id} />
 */
PokemonCell.propTypes = {
    onPress: PropTypes.func,
    name: PropTypes.string,
    sourceImage: PropTypes.string,
    id: PropTypes.number,
};

PokemonCell.defaultProps = {
    onPress: undefined,
    name: '',
    sourceImage: '',
    id: 0,
};
