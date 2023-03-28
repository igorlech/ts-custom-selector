import styles from "./Select.module.css";

type SelectOption = {
  value: string;
  label: string;
};

type SelectProps = {
  value?: SelectOption;
  options: SelectOption[];
  onChange: (value: SelectOption | undefined) => void;
};

export function Select({ value, onChange, options }: SelectProps) {
  return <div className={styles.container}></div>;
}
