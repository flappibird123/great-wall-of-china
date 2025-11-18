import styles from './Heading.module.css'

function Heading() {
    return(
        <header className={styles.header}>
            <h1>
                The Great Wall of China
            </h1>
        </header>
    );
}

export default Heading;