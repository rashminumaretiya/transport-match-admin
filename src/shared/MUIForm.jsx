import React from 'react';

const MUIForm = ({ children, onSubmit }) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};

export default MUIForm;
