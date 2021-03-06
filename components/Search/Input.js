import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const TextInput = styled.TextInput`
  background-color: white;
  margin: 30px 30px;
  padding: 10px 20px;
  border-radius: 15px;
`;

function Input({ placeholder, value, onChange, onSubmit }) {
    return (
        <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={onChange}
            onSubmitEditing={onSubmit}
            returnKeyType={"search"}
        />
    );
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Input;
