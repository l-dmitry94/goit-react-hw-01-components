import PropTypes from 'prop-types';
import { TitleStyle } from './Title.styled';

export const Title = ({ title }) => {
    return title && <TitleStyle>Upload stats</TitleStyle>;
};

Title.propTypes = {
    title: PropTypes.string,
};
