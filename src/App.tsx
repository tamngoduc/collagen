import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  FormHelperText,
  Stack,
  MenuItem,
  MenuItemProps,
  Button,
  Select,
  styled,
} from "@mui/material";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";
import { DataState } from "./interface";
import EditIcon from "@mui/icons-material/Edit";
import "./App.css";

const StyledMenuItem = styled(MenuItem)<MenuItemProps>(({ theme }) => ({
  fontSize: theme.typography.subtitle.fontSize,
  fontWeight: theme.typography.subtitle.fontWeight,
  lineHeight: theme.typography.subtitle.lineHeight,
}));

const App = () => {
  const { handleSubmit, control } = useForm<DataState>({
    defaultValues: {
      name: "",
      phone: "",
      address: "",
      isKnown: "",
      source: "",
      brand: "",
    },
    mode: "onTouched",
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data: DataState) => {
    console.log(data);
  };

  return (
    <>
      <img src="/src/assets/banner.jpg" alt="VITALBEAUTIE" width="100%" />

      <Box mt={3} mx={4}>
        <Box textAlign="center">
          <Typography variant="h5">
            Vui lòng điền các thông tin bên dưới để
          </Typography>
          <Typography variant="h5">
            VITAL BEAUTIE gửi quà đến bạn nhé!
          </Typography>
        </Box>

        <Box sx={{ mt: 8 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack gap={4}>
              {/* name */}
              <Box>
                <Typography variant="body2">
                  Họ và tên<span style={{ color: "#f00" }}>*</span>:
                </Typography>
                <Controller
                  control={control}
                  name="name"
                  rules={{
                    required: {
                      value: true,
                      message: "Họ và tên không được để trống!",
                    },
                  }}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <Box>
                      <TextField
                        sx={{
                          "& ::placeholder": {
                            fontSize: 16,
                          },
                        }}
                        fullWidth
                        onChange={onChange}
                        placeholder="Nhập tại đây"
                        size="small"
                        error={!!error}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <EditIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                      {error?.message && (
                        <FormHelperText error>{error.message}</FormHelperText>
                      )}
                    </Box>
                  )}
                />
              </Box>

              {/* phone */}
              <Box>
                <Typography variant="body2">
                  Số điện thoại<span style={{ color: "#f00" }}>*</span>:
                </Typography>
                <Controller
                  control={control}
                  name="phone"
                  rules={{
                    required: {
                      value: true,
                      message: "Số điện thoại không được để trống!",
                    },
                  }}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <Box>
                      <TextField
                        sx={{
                          "& ::placeholder": {
                            fontSize: 16,
                          },
                        }}
                        fullWidth
                        onChange={onChange}
                        placeholder="Nhập tại đây"
                        size="small"
                        error={!!error}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <EditIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                      {error?.message && (
                        <FormHelperText error>{error.message}</FormHelperText>
                      )}
                    </Box>
                  )}
                />
              </Box>
              {/* address */}
              <Box>
                <Typography variant="body2">
                  Địa chỉ<span style={{ color: "#f00" }}>*</span>:
                </Typography>
                <Controller
                  control={control}
                  name="address"
                  rules={{
                    required: {
                      value: true,
                      message: "Địa chỉ không được để trống!",
                    },
                  }}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <Box>
                      <TextField
                        sx={{
                          "& ::placeholder": {
                            fontSize: 16,
                          },
                        }}
                        fullWidth
                        onChange={onChange}
                        placeholder="Nhập tại đây"
                        size="small"
                        error={!!error}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <EditIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                      {error?.message && (
                        <FormHelperText error>{error.message}</FormHelperText>
                      )}
                    </Box>
                  )}
                />
              </Box>

              {/* isKnow */}
              <Box>
                <Typography variant="button">
                  Bạn đã bao giờ nghe đến VITAL BEAUTIE chưa?
                </Typography>
                <Controller
                  control={control}
                  name="isKnown"
                  // rules={{
                  //   required: {
                  //     value: true,
                  //     message: "Ca làm việc không được để trống!",
                  //   },
                  // }}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <Box>
                      <Select
                        sx={{
                          typography: (theme) => ({
                            ...theme.typography.body2,
                          }),
                        }}
                        value={value ? value : ""}
                        onChange={onChange}
                        fullWidth
                        size="small"
                        error={!!error}
                      >
                        <StyledMenuItem value="Chưa">Chưa</StyledMenuItem>
                        <StyledMenuItem value="Rồi">Rồi</StyledMenuItem>
                      </Select>

                      {error?.message && (
                        <FormHelperText error>{error.message}</FormHelperText>
                      )}
                    </Box>
                  )}
                />
              </Box>

              {/* source */}
              <Box>
                <Typography variant="button">
                  Bạn biết đến VITAL BEAUTIE qua kênh nào?
                </Typography>
                <Controller
                  control={control}
                  name="source"
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <Box>
                      <Select
                        sx={{
                          typography: (theme) => ({
                            ...theme.typography.body2,
                          }),
                        }}
                        value={value ? value : ""}
                        onChange={onChange}
                        fullWidth
                        size="small"
                        error={!!error}
                      >
                        <StyledMenuItem value="Mạng xã hội">
                          Mạng xã hội
                        </StyledMenuItem>
                        <StyledMenuItem value="KOL">KOL</StyledMenuItem>
                        <StyledMenuItem value="Bạn bè giới thiệu">
                          Bạn bè giới thiệu
                        </StyledMenuItem>
                      </Select>

                      {error?.message && (
                        <FormHelperText error>{error.message}</FormHelperText>
                      )}
                    </Box>
                  )}
                />
              </Box>

              {/* brand */}
              <Box>
                <Typography variant="body2">
                  Bạn đang sử dụng Collagen của thương hiệu nào?
                </Typography>
                <Controller
                  control={control}
                  name="brand"
                  // rules={{
                  //   required: {
                  //     value: true,
                  //     message: "Địa chỉ không được để trống!",
                  //   },
                  // }}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <Box>
                      <TextField
                        sx={{
                          "& ::placeholder": {
                            fontSize: 16,
                          },
                        }}
                        fullWidth
                        onChange={onChange}
                        placeholder="Nhập tại đây"
                        size="small"
                        error={!!error}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <EditIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                      {error?.message && (
                        <FormHelperText error>{error.message}</FormHelperText>
                      )}
                    </Box>
                  )}
                />
              </Box>
              <Stack direction="row" justifyContent="center" mt={3} mb={10}>
                <Button
                  // sx={{ backgroundColor: "primary.main" }}
                  variant="contained"
                >
                  Gửi
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default App;
