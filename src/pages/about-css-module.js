import React from "react"
import styles from "./about-css-modules.module.css"
import Container from "../components/container"

const User = props => (
    <div className={styles.user}>
        <img src={props.avatar} className={styles.avatar} alt="Avatar do usuário"/>
        <div className={styles.description}>
            <h2 className={styles.username}>{props.username}</h2>
            <p className={styles.except}>{props.except}</p>
        </div>
    </div>
)

export default function About() {
    return (
        <Container>
            <h1>About CSS Modules</h1>
            <p>CSS modules are cool</p>
            <User 
                username="Jan Levinson"
                avatar="https://m.media-amazon.com/images/M/MV5BOWZjMjdjZTEtZmQ3Mi00ZTBmLTk1MjctMmIzNzk1ZDUwOGJmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMzI3NTM1OQ@@._V1_SX511_CR0,0,511,482_AL_.jpg"
                except="I'm Jan Levinson. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            />
            <User 
                username="Michael Scott"
                avatar="https://images.ctfassets.net/2wtjpc772mjk/1dZcNsl3URjdgqcgI6lVKP/4d042b646b1d215b713f980e13e13f21/Michael_Scott.jpg"
                except="That's what she said"
            />
        </Container>
    )
}