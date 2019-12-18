export const getAllSubmissions = () => {
  return $.ajax({
    method: "GET",
    url: "api/submissions",
  });
};

export const findSubmission = id => {
  return $.ajax({
    method: "GET",
    url: `api/submission/${id}`,
  });
};

export const createSubmission = sub => {
  return $.ajax({
    method: "POST",
    url: "api/submissions",
    data: { sub },
  });
};

export const updateSubmission = sub => {
  return $.ajax({
    method: "PATCH",
    url: `api/submission/${sub.id}`,
    data: { sub },
  });
};

export const deleteSubmission = id => {
  return $.ajax({
    method: "DELETE",
    url: `api/submission/${id}`,
  });
};