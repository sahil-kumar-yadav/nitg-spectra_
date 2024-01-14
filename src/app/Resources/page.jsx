"use client"

import { useState } from 'react';
import styles from './resources.module.css' 


function page() {

    const [toggle,settoggle] = useState(false);

    function toggleItems(folder1) {
        // hook use karna padega
        settoggle(!toggle);
        // const items = document.getElementById(folder1);
        items.style.display = items.style.display === 'block' ? 'none' : 'block';
        console.log(toggle)
    }

    return (
        <>
            {/* <!-- Breadcrumb --> */}
            <nav className="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li className="inline-flex items-center">
                        <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                            </svg>
                            Home
                        </a>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <svg className="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Coureses</a>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <svg className="rtl:rotate-180  w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Pdfs</span>
                        </div>
                    </li>
                </ol>
            </nav>


            <div className={`${styles.container}`}>
                <div className={`${styles.folder}`} onClick={()=>toggleItems()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <span>Contol System</span>
                </div>
               {toggle && <div className={styles.items} id="folder1">
                    <div><a href="../flipbook/flipbook.html">sample pdf</a></div>
                    <div>Item 2 NA</div>
                    <div>Item 3 NA</div>
                </div>}

                <div className={styles.folder} onClick="toggleItems('folder2')">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <span>Digital Electronics</span>
                </div>
                <div className={styles.items}  id="folder2">
                    <div>Item 4</div>
                    <div>Item 5</div>
                </div>
                <div className={styles.folder} onClick="toggleItems('folder3')">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <span>NTS</span>
                </div>
                <div className={styles.items} id="folder3">
                    <div>Item 4</div>
                    <div>Item 5</div>
                </div>
                <div className={styles.folder} onClick="toggleItems('folder4')">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <span>Folder 4</span>
                </div>
                <div className={styles.items} id="folder4">
                    <div>Item 4</div>
                    <div>Item 5</div>
                </div>
            </div>

            {/* <!-- contributors  --> */}



        </>
    );
}

export default page;