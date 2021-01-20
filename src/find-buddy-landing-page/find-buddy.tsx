import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Button } from '@material-ui/core';

interface Props extends RouteComponentProps<any> { }

export const FindBuddy: FC<Props> = ({ history }) => {
    return (
        <>
        <h1>Find a snowboard buddy in your area!</h1>
        <Button onClick={() => history.push('/select-country')}>find buddy</Button>
        </>
    )
};