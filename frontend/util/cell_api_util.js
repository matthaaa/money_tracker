export const fetchCells = () => (
  $.ajax({
    method: "GET",
    url: `api/cells`,
  })
);

export const fetchCell = (id) => (
  $.ajax({
    method: "GET",
    url: `api/cells/${id}`,
  })
);

export const createCell = (cell) => (
  $.ajax({
    method: "POST",
    url: `api/cells`,
    data: {cell},
  })
);
