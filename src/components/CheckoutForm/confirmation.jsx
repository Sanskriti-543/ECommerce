import React, { useState, useEffect } from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {  Button } from '@material-ui/core';


function Confirmation() {
    return(
        <div>
            <h1>
                Thank You for placing your order.
            </h1>
           <Button  component={Link} to="/" >Return to Home Page</Button>
            </div>
        
    )
}

export default Confirmation;
