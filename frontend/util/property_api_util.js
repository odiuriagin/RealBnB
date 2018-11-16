
export const fetchProperties = () => (
  $.ajax({
    method: 'GET',
    url: 'api/properties',
  })
);

export const fetchProperty = id => (
  $.ajax({
    method: 'GET',
    url: `api/properties/${id}`,
  })
);

export const createProperty = property => (
  $.ajax({
    method: 'POST',
    url: 'api/properties',
    data: { property },
  })
);

export const updateProperty = property => (
  $.ajax({
    method: 'PATCH',
    url: `api/properties/${property.id}`,
    data: { property },
  })
);

export const deleteProperty = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/properties/${id}`,
  })
);
