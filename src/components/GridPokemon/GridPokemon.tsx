import styles from "./GridPokemon.module.css"

interface GridPokemonProps {
    children: React.ReactNode
}

export const GridPokemon = ({ children }: GridPokemonProps) => {
    return (
        <div className={styles.grid}>
            {children}
        </div>
    )
}