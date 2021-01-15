import { Drawer } from '@material-ui/core';
import React from 'react';

function SideDrawer({ open, onClose }) {
    return (
        <Drawer anchor="left" open={open} onClose={() => onClose(false)}>
            Sidebar
        </Drawer>
    );
}

export default SideDrawer
