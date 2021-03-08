

export const getData = ()=>{
    
    const apiUrl = 'http://localhost:3000/data_tamu'
    const options = {
        method : "GET",
        mode : 'cors',
        headers : {
            "Content-Type" : "application/json",
            Accept : "application/json"
        }
    }

    fetch(apiUrl , options)
    .then(res => res.json())
    .then((data) => {
        data.map((e)=>{
            let tb = document.getElementById('table_body')
            tb.innerHTML += `
                <tr>
                    <td>${e.id}</td>
                    <td>${e.nama_lengkap}</td>
                    <td>${e.alamat}</td>
                    <td>${e.telp}</td>
                </tr>
            `
        })
    })
    .catch(err => console.log(err))
}




const RightSide = ()=>{

    return `
    <div class="right_side">

        <h1>Daftar Tamu</h1>

        <table class="rs_table">
            <thead>
                <tr>
                    <th>no</th>
                    <th>nama lengkap</th>
                    <th>alamat</th>
                    <th>Telp</th>
                </tr>
            </thead>

            <tbody id="table_body">
                
              
            </tbody>

        </table>
    </div>
    `
}

getData()

export default RightSide