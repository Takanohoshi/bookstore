        // Fungsi untuk menampilkan data buku di dalam tabel
        function displayBookList() {
            var bookListElement = document.getElementById('bookEntries');
            bookListElement.innerHTML = ''; // Hapus isi tabel sebelum menambahkan data terbaru

            // Ambil data buku dari local storage
            var storedBookData = localStorage.getItem('bookData');

            // Jika data buku ada di local storage, gunakan data tersebut
            if (storedBookData) {
                var bookData = JSON.parse(storedBookData);

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
        }

        // Panggil fungsi untuk menampilkan data buku saat halaman dimuat
        displayBookList();