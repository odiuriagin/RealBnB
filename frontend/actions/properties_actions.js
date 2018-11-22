import * as PropertyAPIUtil from '../util/property_api_util';


export const RECEIVE_ALL_PROPERTIES = 'RECEIVE_ALL_PROPERTIES';
export const RECEIVE_PROPERTY = 'RECEIVE_PROPERTY';
export const REMOVE_PROPERTY = 'REMOVE_PROPERTY';


const receiveAllProperties = properties => ({
  type: RECEIVE_ALL_PROPERTIES,
  properties
});

const receiveProperty = property => ({
  type: RECEIVE_PROPERTY,
  property
});

const removeProperty = id => ({
  type: REMOVE_PROPERTY,
  id
});

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
  PropertyAPIUtil.createProperty(property).then(
    property => dispatch(receiveProperty(property))
  )
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
