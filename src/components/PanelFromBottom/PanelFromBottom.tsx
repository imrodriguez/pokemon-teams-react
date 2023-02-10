import { BackHeader } from "../BackHeader";
import styles from "./PanelFromBottom.module.css"

interface PanelFromBottomProps {
    children: React.ReactNode;
    open: boolean;
    onClose: () => void;
}

export const PanelFromBottom = ({ children, open, onClose }: PanelFromBottomProps) => {

    if (!open) return null;

    return (
        <div className={styles.Panel}>
            <BackHeader onBack={onClose} />
            {children}
        </div>
    )
}