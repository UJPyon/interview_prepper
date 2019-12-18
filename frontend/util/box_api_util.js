export const getAllBoxes = () => {
  return $.ajax({
    method: "GET",
    url: "api/boxes",
  });
};

export const findBox = id => {
  return $.ajax({
    method: "GET",
    url: `api/box/${id}`,
  });
};

export const createBox = box => {
  return $.ajax({
    method: "PATCH",
    url: "api/boxes",
    data: { box },
  });
};

export const updateBox = box => {
  return $.ajax({
    method: "PATCH",
    url: `api/box/${box.id}`,
    data: { box },
  });
};

export const destroyBox = id => {
  return $.ajax({
    method: "DELETE",
    url: `api/box/${id}`
  });
};
