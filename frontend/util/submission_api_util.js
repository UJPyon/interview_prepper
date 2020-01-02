export const getAllSubmissions = () => {
  return $.ajax({
    method: "GET",
    url: "api/submissions",
  });
};

export const findSubmission = id => {
  return $.ajax({
    method: "GET",
    url: `api/submissions/${id}`,
  });
};

export const createSubmission = submission => {
  return $.ajax({
    method: "POST",
    url: "api/submissions",
    data: { submission },
  });
};

export const updateSubmission = submission => {
  debugger
  return $.ajax({
    method: "PATCH",
    url: `api/submissions/${submission.id}`,
    data: { submission },
  });
};

export const deleteSubmission = id => {
  return $.ajax({
    method: "DELETE",
    url: `api/submissions/${id}`,
  });
};