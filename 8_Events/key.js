const insert =document.getElementById('insert')
window.addEventListener('keydown',(e) =>{
    insert.innerHTML=`
    <table>
                <thead>
                    <tr>
                        <th>Shobhika</th>
                        <th>Dreams</th>
                        <th>Writer</th>
                    </tr>
                    <tr>
                        <td>Hardworking</td>
                        <td>Detachment</td>
                        <td>Happiness</td>
                    </tr>
                    <tr>
                        <td>${e.key===" "?Space:e.key}</td>
                        <td>${e.keyCode}</td>
                        <td>${e.code}</td>
                    </tr>
                </thead>
            </table>
    `
})