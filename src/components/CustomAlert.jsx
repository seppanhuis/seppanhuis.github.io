import Alert from '@mui/material/Alert';


function CustomAlert({ message }) {
  return (
    <Alert severity="success" variant="filled">
          {message}
      </Alert>
  );
}
    
export default CustomAlert;