import React from 'react';

const idPetContext = React.createContext;
export const getIdPetService = idPetContext.Provider;
export default idPetContext;
