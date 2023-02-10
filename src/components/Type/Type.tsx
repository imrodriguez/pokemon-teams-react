import styles from "./Type.module.css"

interface TypeProps {
    name: string;
}

export const Type = ({ name }: TypeProps) => (
    <button data-testid="typebutton" className={styles.Type} data-type={name}>{name}</button>
)