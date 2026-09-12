const container = document.getElementById('container-id');
    function buttonClick() {
    container.innerHTML = "<div><p>Nama : Alberta Davin</p><p>NIM : 825250007</p></div>";
}
    document.getElementById('tombol').addEventListener('click', buttonClick);        
    document.getElementById('tombol2').addEventListener('click', function() {
        container.innerHTML = "";
    });
    document.addEventListener('keydown', (event) => {
        console.log('Tombol keyboard ditekan:', event.key);
    });
