import React from 'react';
import Scrollbars from 'react-custom-scrollbars-2';
import MUIStack from './MUIStack';

const CustomScrollbar = ({ sx, children }) => {
  return (
    <Scrollbars
      renderTrackVertical={(props) => (
        <MUIStack right={0} bottom={0} top={0} {...props} />
      )}
      renderThumbVertical={(props) => (
        <MUIStack
          backgroundColor="gray.gray200"
          borderRadius={2}
          sx={sx}
          {...props}
        />
      )}
    >
      {children}
    </Scrollbars>
  );
};

export default CustomScrollbar;
