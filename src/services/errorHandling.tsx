export default function errorHandling(error) {
  if (error?.response?.data?.errorType === 'SINGLE' && error?.response?.data?.errorReason) {
    console.log('error', error?.response?.data?.errorReason);
  } else if (error?.response?.data?.errorType === 'MULTIPLE' && error?.response?.data?.errorReasons) {
    console.log('error', error?.response?.data?.errorReasons[0]);
  } else if (error.message) {
    console.log('error', error.message);
  }
}
