export const errorHandler = (error, request, response, next) => {
  console.log('in error handler: ', error);
  // Error handling middleware functionality
  return response.status(error.httpStatusCode || 500).json({
    data: error.data,
    publicMessage: error.publicMessage,
  });
};
