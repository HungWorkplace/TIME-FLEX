import {
  Autocomplete,
  Box,
  SxProps,
  TextField,
  Theme,
  styled,
} from "@mui/material";
import { useState } from "react";

interface DurationProps {
  sx?: SxProps<Theme>;
}

// const StyledOption = styled("li")(({ theme }) => ({
//   backgroundColor: theme.palette.error.light, // Sử dụng màu từ theme của MUI
//   "&.Mui-focused": {
//     backgroundColor: theme.palette.error.dark,
//   },
// }));

export default function Duration({ sx }: DurationProps) {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ width: "4.5rem", ...sx }}>
      <Autocomplete
        freeSolo // Nếu bạn muốn cho phép người dùng nhập giá trị tùy ý, hãy giữ lại
        options={Array.from({ length: 25 }, (_, i) => i * 5)}
        value={value}
        onChange={(_, newValue) => setValue(newValue)}
        renderOption={(props, option) => (
          <Box component={"li"} sx={{ fontSize: 14 }} {...props}>
            {option}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            sx={{
              height: "42px",
              backgroundColor: "#f8f8f8",
              borderRadius: "0.375rem",
              "& .MuiInputBase-root": {
                p: 0,
                height: "100%",
                fontSize: 14,
              },
              "& fieldset": { border: "none" },
            }}
            {...params}
          />
        )}
      />
    </Box>
  );
}
