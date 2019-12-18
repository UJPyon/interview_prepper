export const getAllSubmissions = () => {
  return $.ajax({
    method: "GET",
    url: "api/submissions"
  });
};

export const findSubmission = id => {
  return $.ajax({
    method: "GET",
    url: `api/submission/${id}`
  });
};

export const updateSubmission = id => {
  return $.ajax({
    method: "PATCH",
    url: `api/submission/${id}`
  });
};

export const deleteSubmission = id => {
  return $.ajax({
    method: "DELETE",
    url: `api/submission/${id}`
  });
};