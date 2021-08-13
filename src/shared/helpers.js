export const updateObject = (updatedObj,updatedProps)=>{
    return {
        ...updatedObj,
        ...updatedProps
    }
};
