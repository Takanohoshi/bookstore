    // Inisialisasi array untuk menyimpan data buku
    var bookData = [];

    // Fungsi untuk menghasilkan ekspresi captcha dan mengatur nilai pada tampilan
    function generateCaptcha() {
        var num1 = Math.floor(Math.random() * 10) + 1;
        var num2 = Math.floor(Math.random() * 10) + 1;
        var expression = num1 + " + " + num2;
        document.getElementById('captchaExpression').textContent = expression;
    }

    // Fungsi untuk memeriksa jawaban captcha dan menambahkan data buku ke dalam array
    function submitForm() {
        var userAnswer = document.getElementById('captcha').value;
        var num1 = parseInt(document.getElementById('captchaExpression').textContent.split('+')[0]);
        var num2 = parseInt(document.getElementById('captchaExpression').textContent.split('+')[1]);
        var correctAnswer = num1 + num2;

        if (parseInt(userAnswer) === correctAnswer) {
            var newBook = {
                bookName: document.getElementById('bookName').value,
                publisher: document.getElementById('publisher').value,
                year: document.getElementById('year').value,
                category: document.getElementById('category').value,
                phone: document.getElementById('phone').value,
                website: document.getElementById('website').value,
                message: document.getElementById('message').value
            };

            // Tambahkan data buku ke dalam array
            bookData.push(newBook);

            // Simpan data buku ke local storage
            localStorage.setItem('bookData', JSON.stringify(bookData));

            // Tampilkan data buku di dalam tabel
            displayBookList();

            console.log(bookData);
        } else {
            alert('Jawaban captcha salah!');
        }

        // Setelah mengirim data atau memberikan umpan balik, hasil captcha baru di-generate
        generateCaptcha();
    }

    // Fungsi untuk menampilkan data buku di dalam tabel
    function displayBookList() {
        var bookListElement = document.getElementById('bookEntries');
        bookListElement.innerHTML = ''; // Hapus isi tabel sebelum menambahkan data terbaru

        // Ambil data buku dari local storage
        var storedBookData = localStorage.getItem('bookData');

        // Jika data buku ada di local storage, gunakan data tersebut
        if (storedBookData) {
            bookData = JSON.parse(storedBookData);
        }

        // Iterasi melalui array bookData dan tambahkan setiap entri ke dalam tabel HTML
        for (var i = 0; i < bookData.length; i++) {
            var row = bookListElement.insertRow(-1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(5);
            var cell7 = row.insertCell(6);

            cell1.textContent = bookData[i].bookName;
            cell2.textContent = bookData[i].publisher;
            cell3.textContent = bookData[i].year;
            cell4.textContent = bookData[i].category;
            cell5.textContent = bookData[i].phone;
            cell6.textContent = bookData[i].website;
            cell7.textContent = bookData[i].message;
        }
    }

    function displayBookList() {
    var bookListElement = document.getElementById('bookEntries');
    bookListElement.innerHTML = ''; // Hapus isi tabel sebelum menambahkan data terbaru

    // Ambil data buku dari local storage
    var storedBookData = localStorage.getItem('bookData');

    // Jika data buku ada di local storage, gunakan data tersebut
    if (storedBookData) {
        bookData = JSON.parse(storedBookData);
    }

    // Iterasi melalui array bookData dan tambahkan setiap entri ke dalam tabel HTML
    for (var i = 0; i < bookData.length; i++) {
        var row = bookListElement.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7); // Kolom Aksi

        cell1.textContent = bookData[i].bookName;
        cell2.textContent = bookData[i].publisher;
        cell3.textContent = bookData[i].year;
        cell4.textContent = bookData[i].category;
        cell5.textContent = bookData[i].phone;
        cell6.textContent = bookData[i].website;
        cell7.textContent = bookData[i].message;

        // Tambahkan tombol Hapus dengan menggunakan penutupan (closure)
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Hapus';
        deleteButton.onclick = createDeleteHandler(i); // Gunakan penutupan di sini
        cell8.appendChild(deleteButton);
    }
}

// Fungsi untuk membuat penutupan (closure) untuk fungsi deleteBook dengan nilai indeks yang benar
function createDeleteHandler(index) {
    return function () {
        deleteBook(index);
    };
}

function deleteBook(index) {
    bookData.splice(index, 1); // Hapus buku dari array
    localStorage.setItem('bookData', JSON.stringify(bookData)); // Perbarui data di local storage
    displayBookList(); // Perbarui tampilan tabel
}

    // Panggil fungsi untuk menghasilkan captcha saat halaman dimuat
    generateCaptcha();

    // Panggil fungsi untuk menampilkan data buku saat halaman dimuat
    displayBookList();