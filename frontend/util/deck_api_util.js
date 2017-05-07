export const fetchdecks = (params) => (
  $.ajax({method: 'GET', url: 'api/deck'})
);

export const fetchdeck = (id) => (
  $.ajax({method: 'GET', url: `api/deck/${id}`})
);

export const createDeck = (data) => (
    $.ajax({method: 'POST', url: `api/deck`, data: {data}})
);
