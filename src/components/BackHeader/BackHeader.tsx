import styles from './BackHeader.module.css';

interface BackHeaderProps {
    onBack: () => void;
}

export const BackHeader = ({ onBack }: BackHeaderProps) => (
    <div className={styles.backHeader}>
        <button onClick={onBack}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span>Go back</span>
        </button>
    </div>
)