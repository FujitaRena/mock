
function submitMsg() {
    const ta1 = document.getElementById('message').value;
    document.getElementById('mymessage').innerText = ta1;

    const now = new Date();
    const nowYear = now.getFullYear(); 
    const nowMon = ("0" + (now.getMonth()+1)).slice(-2);
    const nowDate = ("0" + now.getDate()).slice(-2);
    const nowHour = ("0" + now.getHours()).slice(-2);
    const nowMinute = ("0" + now.getMinutes()).slice(-2);
    document.getElementById('date').innerText = nowYear + '/' + nowMon + '/' + nowDate + ' ' + nowHour  + ':' + nowMinute;
}

window.onload = function() {

    const upload = document.getElementById('upload_file');
    upload.addEventListener('click',async () => {
        const fhList = await window.showOpenFilePicker();
        const fh = fhList[0];
        const file = await fh.getFile();
        const reader = new FileReader();
        reader.readAsText(file);
        file_name.innerText = fhList[0].name;
    });
}
