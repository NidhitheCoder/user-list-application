import React from 'react';
import InputBase from "@material-ui/core/InputBase";

import './search.styles.scss';

export const SearchInput = () => (
    <div className="search-container">
    <InputBase placeholder="Search Name..." className="search"></InputBase>
    </div>
);

export default SearchInput;