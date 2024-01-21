// Mayoritas script berupa doGet untuk menghindari google CORS block 
const getTable = 'UBAH_KE_URL_GOOGLE_SCRIPT';
const getAmount = 'UBAH_KE_URL_GOOGLE_SCRIPT';
const getStatus = 'UBAH_KE_URL_GOOGLE_SCRIPT';
const postStatus = 'UBAH_KE_URL_GOOGLE_SCRIPT';
const doClear = 'UBAH_KE_URL_GOOGLE_SCRIPT';
const doExport ='UBAH_KE_URL_GOOGLE_SCRIPT';
const exportUrl ='UBAH_KE_URL_GOOGLE_SCRIPT';
let statusAbsen = 0;
let currentAmount = -1;

fetchStatus();
fetchTable();
setInterval(doDate, 1000);
setInterval(amountBuffer, 1500);

async function fetchStatus() {
  document.getElementById("status").innerHTML = '<p style="color:gray;">Fetching ...</p>';

  try {
    const response = await fetch(getStatus);
    const statusFetched = await response.text();

    if (statusFetched == 'true') {
      document.getElementById("status").innerHTML = '<p style="color:green;">Dibuka</p>';
      statusAbsen = 2;

    } else if (statusFetched == 'false') {
      document.getElementById("status").innerHTML = '<p style="color:red;">Ditutup</p>';
      statusAbsen = 1;

    } else {
      document.getElementById("status").innerHTML = '<p style="color:orange;">Unknown status</p>';
    }
  } catch (error) {
    console.error('Gagal fetch status:', error);
    document.getElementById("status").innerHTML = '<p style="color:gray;">Fetch Error</p>';
  }
}

async function toggleStatus() {
  if (statusAbsen == 0) {
    alert("Status belum di fetch!");
  }

  else if (statusAbsen == 1) {
    document.getElementById("status").innerHTML = '<p style="color:gray;">Membuka ...</p>';
    doPostStatus('true');
    await sleep(1500);
    document.getElementById("status").innerHTML = '<p style="color:green;">Dibuka</p>';
    statusAbsen = 2;
  }

  else if(statusAbsen == 2) {
    document.getElementById("status").innerHTML = '<p style="color:gray;">Menutup ...</p>';
    doPostStatus('false');
    await sleep(1500);
    document.getElementById("status").innerHTML = '<p style="color:red;">Ditutup</p>';
    statusAbsen = 1;
  }
}

function doPostStatus(message) {
  let postStatusAdded = postStatus + '?status=' + message;
  fetch(postStatusAdded);
}

async function amountBuffer() {
  try {
    const response = await fetch(getAmount);
    const amountFetched = await response.text();

    if (currentAmount != -1) {
      if (currentAmount != amountFetched) {
        fetchTable(true);
        currentAmount = amountFetched;
      } 
    } else{
      currentAmount = amountFetched;
    }
  } catch (error) {
    console.log("Gagal fetch amount");
  }
}

async function fetchTable(status) {
  try {
    const response = await fetch(getTable);
    const data = await response.json();
    let container = document.getElementById('data-container');

    if (status == true) {
      container.innerHTML = '';
    }

    data.forEach(row => {
      container.innerHTML += '<tr><td>' + row.No + '</td><td>' + row.Tanggal + '</td><td>' + row.Jam + '</td><td>' + row.Nama + '</td></tr>';
    });

  } catch (error) {
    console.log('Error fetching table');
  }
}

function doDate() {
  let now = new Date();
  str = now.toDateString() +'<br>'+now.toLocaleTimeString();
  document.getElementById("tanggal").innerHTML = str;
}


function sleep(ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function clearSheet() {
  let popup = document.getElementById("popup");
  let buttons = document.getElementById("popup_buttons");
  let text = document.getElementById("popup_text");
  let container = document.getElementById('data-container');

  fetch(doClear);
  buttons.style.display = "none";
  text.innerHTML = '';
  text.innerHTML = 'Clearing ...';

  await sleep(1500);
  popup.style.display = "none";
  container.innerHTML = '';
}

function clearDialog() {
  let popup = document.getElementById("popup");
  let noBtn = document.getElementById("popup_btn1");
  let popupClose = document.getElementById("popup_close");
  let buttons = document.getElementById("popup_buttons");
  let text = document.getElementById("popup_text");

  text.innerHTML = 'Apakah anda yakin ingin clear absen?';
  popup.style.display = "block";
  buttons.style.display = "block";
  popupClose.style.display = "block";

  noBtn.onclick = function() {
    popup.style.display = "none"
  }

  popupClose.onclick = function() {
    popup.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == popup) {
      popup.style.display = "none";
    }
  }
}

async function exportSheet() {
  let popup = document.getElementById("popup");
  let buttons = document.getElementById("popup_buttons");
  let text = document.getElementById("popup_text");
  let popupClose = document.getElementById("popup_close");

  popup.style.display = "block";
  buttons.style.display = "none";
  popupClose.style.display = "none";

  text.innerHTML = 'Exporting ...';
  await fetch(doExport);
  
  let newTab = window.open('about:blank');
  newTab.location.replace(exportUrl);

  popup.style.display = "none"
  buttons.style.display = "block";
  popupClose.style.display = "block";

  await sleep(1500);
  newTab.close();
}
