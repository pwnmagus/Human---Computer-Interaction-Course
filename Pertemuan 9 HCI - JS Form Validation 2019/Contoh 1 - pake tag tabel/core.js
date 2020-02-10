function Cek()
{
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    var confirm = document.getElementById("confirm").value;
    var email = document.getElementById("email").value;
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var negara = document.getElementById("negara").value;
    var tanggal = document.getElementById("day").value;
    var bulan = document.getElementById("month").value;
    var tahun = document.getElementById("year").value;
    var kode = document.getElementById("code").innerHTML=100;
    var ver = document.getElementById("ver").value;


    // Validasi Basic

    if(user == "") // Validasi Username Harus Diisi
    {
    err.innerHTML = "Username Must Be Filled !!";
    }
    else if(user.length < 3) // Validasi Username Harus Minimal 3 Karakter
    {
    err.innerHTML = "Username Must Be Minimum 3 Character !!";
    }
    else if(pass == "") // Validasi Pasword Harus Diisi
    {
    err.innerHTML = "Password Must Be Filled !!";
    }
    else if(confirm == "") // Validasi Confirm Password Harus Diisi
    {
    err.innerHTML = "Confirm Password Must Be Filled !!";
    }
    else if(confirm != pass) // Validasi Confirm Password Harus Sama Dengan Password
    
    {
    err.innerHTML = "Confirm Password Must Be Same With Password !!";
    
    }
    else if(email == "") // Validasi Email Harus Diisi
    {
    err.innerHTML = "Email Must Be Filled !!";
    }
    else if(male.checked == false && female.checked == false) // Validasi Jenis Kelamin Harus Dipilih
    {
    err.innerHTML = "Sex Must Be Choose !!";
    }
    else if(tanggal == 0) // Validasi Tanggal Harus Dipilih
    {
    err.innerHTML = "Day Must Be Choose !!";
    }
    else if(bulan == 0) // Validasi Bulan Harus Dipilih
    {
    err.innerHTML = "Month Must Be Choose !!";
    }
    else if(tahun == 0) // Validasi Tahun Harus Dipilih
    {
    err.innerHTML = "Year Must Be Choose !!";
    }
    else if(negara == "0") // Validasi Negara Harus Dipilih
    {
    err.innerHTML = "Country Must Be Choose !!";
    }
    else if(ver == "") // Validasi Kode Harus Diisi
    {
    err.innerHTML = "Verification Code Must Be Filled !!";
    }
    else if(ver != kode) // Validasi Kode Harus Sama
    {
    err.innerHTML = "Wrong Verification Code !!";
    }
    else
    {
    err.innerHTML = "";
    alert("Thank You For Registering ^o^");
    regis.submit();
    }

    // Advanced Validation
    var email = document.getElementById("email").value;
    if(email.indexOf(' ') != -1) // Untuk Mengecek Email Tidak Boleh Mengandung Spasi


    {
    err.innerHTML = "Email Can Not Have Space Character!!";

    return true;
    }
    else if(email.indexOf('@')== -1 || email.indexOf('.') == -1) //Untuk Mengecek Email Harus Mengandung @ dan .
    {
    err.innerHTML = "Email Must Have '@' and '.' !!";
    return true;
    }
    else if(email.split('@').length > 2) // Untuk Mengecek EmailTidak Boleh Mengandung 2 @

    {
    err.innerHTML = "Email Can Not Have Two '@' !!";
    return true;
    }
    else if(email.indexOf('@')== 0 || email.indexOf('.')== 0) // Untuk Mengecek Email Tidak Boleh Diawali @ dan .
    {
    err.innerHTML = "'@' and '.' Can Not Be The First Character !!";

    return true;
    }
    else if(email.charAt(email.length-1)=='@' ||
    email.charAt(email.length-1)=='.') // Untuk Mengecek Email Tidak Boleh Diakhiri @ dan .
    {
    err.innerHTML = "'@' and '.' Can Not Be The Last Character !!";

    return true;
    }
    else if(email.indexOf('.')==(email.indexOf('@')+1) ||
    email.indexOf('@')==(email.indexOf('.')+1)) // Untuk Mengecek Email Tidak Boleh @ Bersebelahan dengan .
    {
    err.innerHTML = "'@' Can Not Beside '.' !!";
    return true;
    }
    else if(email.split('@').length ==2) // Untuk Mengecek Email Tidak Boleh Memiliki 2 Buah . Setelah @
    {
    var email2 = email.split('@');

    if(email2[1].indexOf('.') == -1)
    {
    err.innerHTML = "Email Must Have At Least One '.' After '@' !!";
    return true;
    }
    else if(email2[0].charAt(email2[0].indexOf('.')+1)=='.' || email2[1].charAt(email2[1].indexOf('.')+1)=='.')
    {
    err.innerHTML = "'.' Can Not Beside '.' !!";
    return true;
    }
    }
    else
    {
    return false;
    }


}