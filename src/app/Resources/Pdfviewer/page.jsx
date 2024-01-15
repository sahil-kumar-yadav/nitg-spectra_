

function page() {
    return (
        <>
            <div id="pdf-container">
                <div id="pdf-viewer">
                    <h1>PDF Viewer</h1>
                    <embed id="pdf-embed" src="/pdf/sample.pdf" type="application/pdf" width="100%" height="100%" />
                    <p>Styled for a better viewing experience</p>
                </div>
            </div>
        </>
    );
}

export default page;