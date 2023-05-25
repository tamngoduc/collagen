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
  Modal,
} from "@mui/material";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";
import { DataState } from "./interface";
import EditIcon from "@mui/icons-material/Edit";
import banner from "./assets/banner.jpg";
import emailjs from "@emailjs/browser";
import "./App.css";

const StyledMenuItem = styled(MenuItem)<MenuItemProps>(({ theme }) => ({
  fontSize: theme.typography.subtitle.fontSize,
  fontWeight: theme.typography.subtitle.fontWeight,
  lineHeight: theme.typography.subtitle.lineHeight,
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#dfd2d6",
  color: "#302e2f",
  border: "2px solid",
  borderColor: "primary.light",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const App = () => {
  const { handleSubmit, control } = useForm<DataState>({
    defaultValues: {
      name: "",
      phone: "",
      address: "",
      age: "",
      gender: "",
      isKnown: "",
      source: "",
      brand: "",
    },
    mode: "onTouched",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => setOpenModal(false);

  const onSubmit = (data: DataState) => {
    console.log(data);

    const form = document.createElement("form");
    form.style.display = "none";

    const nameInput = document.createElement("input");
    nameInput.name = "name";
    nameInput.value = data.name;
    form.appendChild(nameInput);

    const phoneInput = document.createElement("input");
    phoneInput.name = "phone";
    phoneInput.value = data.phone;
    form.appendChild(phoneInput);

    const addressInput = document.createElement("input");
    addressInput.name = "address";
    addressInput.value = data.address;
    form.appendChild(addressInput);

    const isKnowInput = document.createElement("input");
    isKnowInput.name = "isKnow";
    isKnowInput.value = data.isKnown || "";
    form.appendChild(isKnowInput);

    const sourceInput = document.createElement("input");
    sourceInput.name = "source";
    sourceInput.value = data.source || "";
    form.appendChild(sourceInput);

    const brandInput = document.createElement("input");
    brandInput.name = "brand";
    brandInput.value = data.brand || "";
    form.appendChild(brandInput);

    document.body.appendChild(form);

    setIsLoading(true);
    try {
      emailjs.sendForm(
        "service_7llyhhb",
        "template_2tvdlpn",
        form,
        "BsqW1uiHQ17dEgKiA"
      );

      setIsLoading(false);
      setOpenModal(true);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <>
      <img src={banner} alt="VITALBEAUTIE" width="100%" />

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
                  render={({ field: { onChange }, fieldState: { error } }) => (
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

              {/* age */}
              <Box>
                <Typography variant="body2">
                  Tuổi<span style={{ color: "#f00" }}>*</span>:
                </Typography>
                <Controller
                  control={control}
                  name="age"
                  rules={{
                    required: {
                      value: true,
                      message: "Tuổi không được để trống!",
                    },
                  }}
                  render={({ field: { onChange }, fieldState: { error } }) => (
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
                        type="number"
                        inputProps={{
                          inputMode: "numeric",
                          pattern: "([0-9])",
                        }}
                      />
                      {error?.message && (
                        <FormHelperText error>{error.message}</FormHelperText>
                      )}
                    </Box>
                  )}
                />
              </Box>

              {/* gender */}
              <Box>
                <Typography variant="button">
                  Giới tính<span style={{ color: "#f00" }}>*</span>:
                </Typography>
                <Controller
                  control={control}
                  name="gender"
                  rules={{
                    required: {
                      value: true,
                      message: "Giới tính không được để trống!",
                    },
                  }}
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
                        <StyledMenuItem value="Nam">Nam</StyledMenuItem>
                        <StyledMenuItem value="Nữ">Nữ</StyledMenuItem>
                      </Select>

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
                  render={({ field: { onChange }, fieldState: { error } }) => (
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
                        type="number"
                        inputProps={{
                          inputMode: "numeric",
                          pattern: "([0-9])",
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
                  render={({ field: { onChange }, fieldState: { error } }) => (
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
                  <span style={{ color: "#f00" }}>*</span>
                </Typography>
                <Controller
                  control={control}
                  name="isKnown"
                  rules={{
                    required: {
                      value: true,
                      message: "Mục này không được để trống!",
                    },
                  }}
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
                  <span style={{ color: "#f00" }}>*</span>
                </Typography>
                <Controller
                  control={control}
                  name="source"
                  rules={{
                    required: {
                      value: true,
                      message: "Mục này không được để trống!",
                    },
                  }}
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
                        <StyledMenuItem value="Không kênh nào">
                          Không kênh nào kể trên
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
                  <span style={{ color: "#f00" }}>*</span>
                </Typography>
                <Controller
                  control={control}
                  name="brand"
                  rules={{
                    required: {
                      value: true,
                      message: "Mục này không được để trống!",
                    },
                  }}
                  render={({ field: { onChange }, fieldState: { error } }) => (
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
                <Button variant="contained" type="submit" disabled={isLoading}>
                  {isLoading ? "Đang xử lý" : "Gửi"}
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Box>

      {/* noti modal */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box sx={style}>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Cảm ơn bạn đã điền thông tin!
          </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            VITAL BEAUTIE sẽ gửi quà đến bạn trong vài ngày nữa nhé!
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default App;
