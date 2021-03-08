
const submitData = (event)=>{
    fetch('http://localhost:3000/data_tamu', {
        method : 'POST',
        mode : 'cors',
        headers : {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify({
            nama_lengkap : event.target.name.value,
            alamat : event.target.address.value,
            telp : event.target.phone.value,
        })
    })
    .catch(err => console.log(err))
}

const LeftSide = ()=>{
    return `
    
        <div class="left_side">
        
            <div class="ls_text">
                <p>Pernikahan</p>
                <h3>Dini & Andi</h3>
                <p>Balai Kartini, 32 Juli 2021</p>
            </div>

            <form onsubmit="${submitData}">

                <label for="name">nama lengkap</label>
                <input type="text" id="name" required>
        
                <label for="address">alamat</label>
                <input type="address" id="address" required>
        
                <label for="phone">no telp</label>
                <input type="phone" id="phone" required>
        
                <button type="submit">submit</button>
    
            </form>
        
        </div>
    
    `
}

export default LeftSide