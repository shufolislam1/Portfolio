import React, { useState } from 'react';
import PropTypes from "prop-types";
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const style = {
    position: `fixed`,
    bottom: `50px`,
    right: `00px`,
    zIndex: `99`
};

const ScrollToTop = (props) => {
    const trigger = useScrollTrigger();

    const handleClick = event => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            "#back-to-top-anchor"
        );

        if (anchor) {
            anchor.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };
    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation"  style={style}>
                <Fab color="primary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </div>
        </Zoom>
    )
};

ScrollToTop.propTypes = {
    children: PropTypes.element.isRequired
  };

export default ScrollToTop;