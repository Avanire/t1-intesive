import { FC } from "react";
import styles from "./styles.module.css";

type Props = {
  size: "small" | "big";
};

export const Logo: FC<Props> = (props) => {
  const imgSize = props.size === "small" ? "46" : "62";
  const descriptionSize = props.size === "small" ? "21px" : "28px";

  return (
    <a href="/" className={styles.logo}>
      <img
        src="/images/logo.svg"
        alt="logo eatly"
        className={styles.logoImg}
        width={imgSize}
      />
      <span className={styles.logoDescr} style={{ fontSize: descriptionSize }}>
        eatly
      </span>
    </a>
  );
};
