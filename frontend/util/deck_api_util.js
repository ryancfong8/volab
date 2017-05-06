export const fetchdecks = (params) => (
  $.ajax({method: 'GET', url: 'api/deck'})
);

export const fetchdeck = (id) => (
  $.ajax({method: 'GET', url: `api/deck/${id}`})
);
