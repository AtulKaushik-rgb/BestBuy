import React from 'react'
import Sidebar from '../sidebar/sidebar'
import Items from '../items/items'
import styles from './main.module.css'

const main = () => {
    return (
        <div className={styles.container}>
            <Sidebar/>
            <Items/>
        </div>
    )
}

export default main
