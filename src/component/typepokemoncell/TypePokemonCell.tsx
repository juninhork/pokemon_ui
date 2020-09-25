import React from 'react';
import {TouchableHighlight} from 'react-native';
import {Container, ContainerElement, TextName} from './TypePokemonCell.style';
import PropTypes from 'prop-types';

const TypePokemonCell = (props) => {
  const _detailCharacter = () => {
    props.onPress(props.name);
  };

  const {name} = props;

  return (
    <Container>
      <TouchableHighlight
        underlayColor={'transparent'}
        onPress={_detailCharacter}>
        <ContainerElement>
          <TextName>{name}</TextName>
        </ContainerElement>
      </TouchableHighlight>
    </Container>
  );
};

export default TypePokemonCell;

/**
 * @name TypePokemonCell propTypes
 * @type {propTypes}
 * @memberof TypePokemonCell
 * @static
 * @example
 * <TypePokemonCell onPress={onPress} name= {name}  />
 */
TypePokemonCell.propTypes = {
  onPress: PropTypes.func,
  name: PropTypes.string,
};

TypePokemonCell.defaultProps = {
  onPress: undefined,
  name: '',
};
