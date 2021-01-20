import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Button } from '@material-ui/core';

interface Props extends RouteComponentProps<any> { }

export const SelectCountry: FC<Props> = ({ history }) => {
    return (
        <>
        <h1>Select continent / country</h1>
        <Button onClick={() => console.log('slect country')}>select country</Button>
        </>
    )
};