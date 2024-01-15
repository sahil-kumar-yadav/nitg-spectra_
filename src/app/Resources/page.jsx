"use client";
import styles from "./resources.module.css"
import Folder from "@/components/Resources/Folder/Folder";

const folderData = [
    {
        name: "Contol System",
        items: ["sample pdf", "Item 2 NA", "Item 3 NA"]
    },
    {
        name: "Digital Electronics",
        items: ["Item 4", "Item 5"]
    },
    {
        name: "NTS",
        items: ["Item 4", "Item 5"]
    },
    {
        name: "Folder 4",
        items: ["Item 4", "Item 5"]
    },
];

const App = () => {
    return (
        <div className={styles.container}>
            {folderData.map(({ name, items }) => (
                <Folder key={name} folderName={name}>
                    {items.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))}
                </Folder>
            ))}
        </div>
    );
};

export default App;
