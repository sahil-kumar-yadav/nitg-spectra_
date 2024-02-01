"use client";
import styles from "./resources.module.css"
import Folder from "@/components/Resources/Folder/Folder";
import { folderData } from "./compo/data"; // Import the data
import Link from "next/link";


const App = () => {
    return (
        <div className={styles.container}>

            {folderData.map(({ name, items }) => (

                <Folder key={name} folderName={name}>

                    {items.map((item, index) => (
                        <li>
                            <Link key={item.link} href={item.link}>{item.name}</Link>
                        </li>
                    ))}

                </Folder>

            ))}
        </div>
    );
};

export default App;
