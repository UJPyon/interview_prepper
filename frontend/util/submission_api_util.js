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
  debugger
  return $.ajax({
    method: "POST",
    url: "api/submissions",
    data: { submission },
  });
};

export const updateSubmission = submission => {
  return $.ajax({
    method: "PATCH",
    url: `api/submissions/${submission.id}`,
    data: { submission },
  });
};

export const deleteSubmission = (submissionId) => {
  return $.ajax({
    method: "DELETE",
    url: `api/submissions/${submissionId}`,
  });
};