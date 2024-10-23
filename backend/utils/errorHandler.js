function ErrorHandler(message, statusCode) {
  const error = new Error(message);
  error.statusCode = statusCode;

  // Capture the stack trace in Node.js environments
  if (Error.captureStackTrace) {
    Error.captureStackTrace(error, ErrorHandler);
  }

  return error;
}

module.exports = ErrorHandler;
