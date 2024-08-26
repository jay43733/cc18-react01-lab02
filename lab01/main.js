ReactDOM.createRoot(document.querySelector('#root')).render(<App />)

function App(){
    const sth1 = {color: 'wheat',backgroundColor:'salmon'}
    const stp = {color: 'white',backgroundColor:'skyblue'}
    const myBirthDay = new Date("1999-10-11").getFullYear()
    // const myBirthDay = new Date()
    // const myBirthDay = new Date()
    return(
        <div>
            <h1 style={sth1}>Tanakit Suttayuttakul</h1>
            <p style={stp}>Age: {new Date().getFullYear()-myBirthDay}</p>
            {/* <p style={stp}>Month: {Math.abs(10-new Date().getMonth())}</p>
            <p style={stp}>Day: {Math.abs(11 - new Date().getDate())}</p> */}
        </div>
    )
}

