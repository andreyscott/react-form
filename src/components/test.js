import TextField from "@mui/material/TextField";
import  InputAdornment  from "@mui/material/Input";


const IconTextField = (props) => {
  return <TextField {...props}
    InputProps={{
        ...InputProps,
        startAdornment: iconStart ? (
          <InputAdornment position="start">{iconStart}</InputAdornment>
        ) : null,
        endAdornment: iconEnd ? (
          <InputAdornment position="end">{iconEnd}</InputAdornment>
        ) : null
      }}
       />;
};

export default IconTextField;