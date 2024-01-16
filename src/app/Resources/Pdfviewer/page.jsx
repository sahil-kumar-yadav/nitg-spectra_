import styles from './pdfview.module.css'

function page() {
    return (
        <>
       <div className={styles.main} >
            <div className={styles.pdfcontainer} id="pdf-container">
                <div className={styles.pdfviewer} id="pdf-viewer">
                    <h1>PDF Viewer</h1>
                    <div>

                        <embed  id="pdf-embed" src="/pdfs/sample.pdf" type="application/pdf" width={1324} height={2000} />
                    </div>

                </div>
            </div>
            </div>
        </>
    );
}

export default page;