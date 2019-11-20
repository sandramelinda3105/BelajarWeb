alert('Hello World!');
var nama = promt('masukkan nama:');


var tes = confirm('kamu yakin?');
if(tes === true){
	alert('user menekan ok');
}
else{
	alert('user menekan cancel');
}


alert('selamat datang');
var lagi = true;

while(lagi===true){
	var nama =  promt('masukkan nama:');
	alert('halo' + nama);

	lagi= confirm('coba lagi?');

}

alert('terimakasih..');