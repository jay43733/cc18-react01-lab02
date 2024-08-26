ReactDOM.createRoot(document.querySelector('#root')).render(<App />)

function App(){
    const stDivPage = {backgroundColor:'#23272F', color: 'white', padding: '40px', margin:'auto'}
    const stHeading = {padding:'10px 0px'}
    const stParagraph = {lineHeight: "1.4", padding:"24px 0px"}
    return(
        <div style={stDivPage}>
            <h1 style = {stHeading}>Quick Start</h1>
            <p style={stParagraph}>Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts that you will use on a daily basis</p>
            {ListApp()}
        </div>
    )
}

function ListApp(){
    const stDiv = {padding:'24px 16px',backgroundColor:'#343A46', color: 'white', borderRadius:'16px'}
    const stList = {lineHeight: "1.8",padding:'10px 24px', fontSize:'14px'}
    return(
        <div style={stDiv}>
            <h3>You will learn</h3>
            <ul style={stList}>
                <li>How to create and nest components</li>
                <li>How to add markup and styles</li>
                <li>How to display data</li>
                <li>How to respond to events and update the screen</li>
                <li>How to share data between components</li>
            </ul>
        </div>
    )
}