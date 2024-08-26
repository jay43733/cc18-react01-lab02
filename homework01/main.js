ReactDOM.createRoot(document.querySelector('#root')).render(<App />)

function App(){
    const stCard = {width: '50%', padding:'8px 32px',boxShadow:'4px 4px 20px grey',borderRadius:'16px',margin:'32px auto'}
    return(
        <div style = {stCard}>
            <Profile />
            <AllStatus />
        </div>
    )
}

function Profile(){
    const stProfile = {textAlign:'center', padding:'32px'}
    const stImage = {borderRadius: '360px',width:'30%'}
    const stName = {paddingTop: "32px"}
    const stEmail = {padding:"8px"}
    return(
        <div style = {stProfile}>
            <img style={stImage} src="https://images.unsplash.com/photo-1579463148228-138296ac3b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80z" alt="profile" />
            <h2 style={stName}>Julienne Moore</h2>
            <p style ={stEmail}>julienne.moore@company.com</p>
        </div>
    )
}

function AllStatus(){
    const styleStatus = {display: 'flex', justifyContent:'space-around', textAlign:'center',padding: "16px"}
    return(
        <div style={styleStatus}>
            {StatusNumber(25,'Posts')}
            {StatusNumber(350,'Followings')}
            {StatusNumber('1.5k','Followers')}
        </div>
    )
}

function StatusNumber(number,subject){
    const stCaption ={color: 'black', fontWeight:'400'}
    const stTitle ={color: 'black', fontWeight:'700'}
    return(
        <div>
            <h2 style = {stTitle}>{number}</h2>
            <p style={stCaption}>{subject}</p>
        </div>
    )
}