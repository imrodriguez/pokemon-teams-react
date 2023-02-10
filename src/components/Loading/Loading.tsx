import styles from "./Loading.module.css"

export const Loading = () => (
    <div className={styles.Loading}>
        <img src="/pokeball.png" className="pokeball" alt="pokeball" />
        <h1>Loading...</h1>
    </div>
)