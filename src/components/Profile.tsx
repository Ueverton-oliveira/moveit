import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/Ueverton-oliveira.png" alt="Ueverton Oliveira"/>
            <div>
                <strong>Ueverton Oliveira</strong>
                <p>Level 1</p>
            </div>
        </div>
    )
}