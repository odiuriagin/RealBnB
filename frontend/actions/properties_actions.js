import * as PropertyAPIUtil from '../util/property_api_util';


export const RECEIVE_ALL_PROPERTIES = 'RECEIVE_ALL_PROPERTIES';
export const RECEIVE_PROPERTY = 'RECEIVE_PROPERTY';
export const REMOVE_PROPERTY = 'REMOVE_PROPERTY';
export const RECEIVE_PROPERTY_ERRORS = 'RECEIVE_PROPERTY_ERRORS';
export const CLEAR_PROPERTY_ERRORS = 'CLEAR_PROPERTY_ERRORS';


const receiveAllProperties = properties => ({
  type: RECEIVE_ALL_PROPERTIES,
  properties,
});

const receiveProperty = property => ({
  type: RECEIVE_PROPERTY,
  property,
});

const removeProperty = id => ({
  type: REMOVE_PROPERTY,
  id
});

const receivePropertyErrors = (errors) => {
  return {
    type: RECEIVE_PROPERTY_ERRORS,
    errors,
  };
};

const clearPropertyErrors = () => {
  return {
    type: CLEAR_PROPERTY_ERRORS,
  };
};

export const fetchProperties = (filters) => dispatch => (
  PropertyAPIUtil.fetchProperties(filters).then(
    properties => dispatch(receiveAllProperties(properties))
  )
);

export const fetchProperty = id => dispatch => (
  PropertyAPIUtil.fetchProperty(id).then(
    property => dispatch(receiveProperty(property))
  )
);

export const createProperty = property => dispatch => (
  PropertyAPIUtil.createProperty(property).then(property => (
    dispatch(receiveProperty(property))
  ), err => (
    dispatch(receivePropertyErrors(err.responseJSON))
  ))
);

export const updatePost = property => dispatch => (
  PropertyAPIUtil.updateProperty(property).then(
    property => dispatch(receiveProperty(property))
  )
);

export const deleteProperty = id => dispatch => (
  PropertyAPIUtil.deleteProperty(id).then(
    () => dispatch(removeProperty(id))
  )
);
