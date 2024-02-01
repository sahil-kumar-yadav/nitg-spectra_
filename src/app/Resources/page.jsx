"use client";
import styles from "./resources.module.css"
import Folder from "@/components/Resources/Folder/Folder";
import { folderData } from "./pdfdata/data"; // Import the data
import Link from "next/link";
import { useState } from "react";
import PdfViewer from "./Pdfviewer/page";


const App = () => {
    const [selectedPdf, setSelectedPdf] = useState(null);

    const handlePdfClick = (path) => {
        setSelectedPdf(path);
    };

    return (
        <>
            { <div className={styles.container}>

                {folderData.map(({ name, items }) => (

                    <Folder key={name} folderName={name}>

                        {items.map((item, index) => (
                            <li>
                                {/* <div key={item.link} onClick={() => handlePdfClick(item.link)}>{item.name}</div> */}
                                <Link key={item.link} href={item.link} onClick={() => handlePdfClick(item.path)}>{item.name}</Link>
                            </li>
                        ))}

                    </Folder>

                ))}
            </div>}
            {/* {selectedPdf && <PdfViewer path={selectedPdf} />} */}
        </>
    );
};

export default App;
