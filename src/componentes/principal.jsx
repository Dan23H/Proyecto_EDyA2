import React, { useState } from "react";

const Principal=()=>{
    const [busqueda, setBuscar] = useState("");

    const handleBuscar = (event) => {
    setBusqueda(event.target.value);

};
return(
    <>
    <table>
    <tr>
        <td><input placeholder="Buscar..." onChange={(event)=>handleBuscar()}></input></td>
        <td><button>📢</button></td>
        <td><button>🗨</button></td>
        <td><button>👤</button></td>
    </tr>
    </table>
    <table>
        <tr>
            <h2>Categoria 1</h2>
        </tr>
        <tr>
            <td><img src="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2021/06/Windows-11-Wallpaper-1-1-scaled.jpg?resize=1200%2C900&quality=55&strip=all&ssl=1" height="100" width="100"></img></td>
            <td><img src="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2021/06/Windows-11-Wallpaper-1-1-scaled.jpg?resize=1200%2C900&quality=55&strip=all&ssl=1" height="100" width="100"></img></td>
            <td><img src="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2021/06/Windows-11-Wallpaper-1-1-scaled.jpg?resize=1200%2C900&quality=55&strip=all&ssl=1" height="100" width="100"></img></td>
            <td><img src="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2021/06/Windows-11-Wallpaper-1-1-scaled.jpg?resize=1200%2C900&quality=55&strip=all&ssl=1" height="100" width="100"></img></td>
            <td><img src="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2021/06/Windows-11-Wallpaper-1-1-scaled.jpg?resize=1200%2C900&quality=55&strip=all&ssl=1" height="100" width="100"></img></td>
            <td><img src="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2021/06/Windows-11-Wallpaper-1-1-scaled.jpg?resize=1200%2C900&quality=55&strip=all&ssl=1" height="100" width="100"></img></td>
        </tr>
        <tr>
            <h2>Categoria 2</h2>
        </tr>
        <tr>
            <td><img src="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2021/06/Windows-11-Wallpaper-1-1-scaled.jpg?resize=1200%2C900&quality=55&strip=all&ssl=1" height="100" width="100"></img></td>
            <td><img src="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2021/06/Windows-11-Wallpaper-1-1-scaled.jpg?resize=1200%2C900&quality=55&strip=all&ssl=1" height="100" width="100"></img></td>
            <td><img src="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2021/06/Windows-11-Wallpaper-1-1-scaled.jpg?resize=1200%2C900&quality=55&strip=all&ssl=1" height="100" width="100"></img></td>
            <td><img src="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2021/06/Windows-11-Wallpaper-1-1-scaled.jpg?resize=1200%2C900&quality=55&strip=all&ssl=1" height="100" width="100"></img></td>
            <td><img src="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2021/06/Windows-11-Wallpaper-1-1-scaled.jpg?resize=1200%2C900&quality=55&strip=all&ssl=1" height="100" width="100"></img></td>
            <td><img src="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2021/06/Windows-11-Wallpaper-1-1-scaled.jpg?resize=1200%2C900&quality=55&strip=all&ssl=1" height="100" width="100"></img></td>
        </tr>
    </table>

    </>

)
};
export default Principal