const doPost = 'https://script.google.com/macros/s/AKfycbxlXy-gyZTcRNReIhUNs3y6qFPhw1jtruTqnNjTddkT_YRvS1AdPnB-Yo7_DOASEh0r/exec';

async function submitData() {
  let nameValue = document.getElementById('form_name').value;
  let rfidValue = document.getElementById('form_rfid').value;
  let popup = document.getElementById('popup');
  let text = document.getElementById('popup_text');
  let popupClose = document.getElementById('popup_btn');
  let form = document.getElementById('form_input');
  let checkSuccess;

  if (!nameValue.trim()) {
    alert('Nama tidak boleh kosong!');
    return; 
  }

  if (!rfidValue.trim()) {
    alert('ID Kartu tidak boleh kosong!');
    return; 
  }

  popup.style.display = "block";
  text.innerHTML = "Mendaftarkan ...";

  try {
    const doPostParams = `${doPost}?name=${encodeURIComponent(nameValue)}&rfid=${encodeURIComponent(rfidValue)}`;
    const response = await fetch(doPostParams)
    text.innerHTML = '';
    text.innerHTML = "Mendaftarkan sukses.";
    checkSuccess = true;

  } catch (error) {
    console.log("Gagal submit database");
    text.innerHTML = '';
    text.innerHTML = "Gagal mendaftarkan.";
    checkSuccess = false;
  }

  popupClose.style.display = "block";
  popupClose.onclick = function() {
    popup.style.display = "none";
    popupClose.style.display = "none"
    
    if(checkSuccess == true){
      form.reset();
    }
  }
}
