import { Stack } from "@mui/material";
import styles from "./LoadingBrand.module.css";

// # Component
export default function LoadingBrand() {
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      height={"100%"}
    >
      <div className={styles.loader} />
    </Stack>
  );
}
