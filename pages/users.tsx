import { NextPage } from "next";
import Image from 'next/image';
import styles from "../styles/Home.module.css";

const avatar = require("../images/avatar.png");

const Users: NextPage = () => {
    return <>
        <div className={styles.card}>
            <div className={styles.top}>
                <Image src={avatar} alt='avatar' height='80px' width='80px' />
                <h1>Ronald Richards</h1>
            </div>
            <p>ronald.richards@example.com</p>
            <span className={styles.tagmale}>
                MALE
            </span>
            <span className={styles.tagage}>
                34
            </span>
            <ul>
                <ul className={styles.firstElement}>
                    <li>Crown Point</li>
                    <li>STREET</li>
                    <hr />
                </ul>
                <ul className={styles.secondElement}>
                    <li>Austin</li>
                    <li>CITY</li>
                    <hr />
                </ul>
                <ul className={styles.thirdElement}>
                    <li>73301</li>
                    <li>ZIP CODE</li>
                </ul>
            </ul>
            <ul className={styles.listImages}>
                <li>Image 1</li>
                <li>Image 2</li>
                <li>Image 3</li>
            </ul>
        </div>
    </>;
};

export default Users;
