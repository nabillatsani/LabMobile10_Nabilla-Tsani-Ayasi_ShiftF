**Nama : Nabilla Tsani Ayasi**

**NIM : H1D022058**

**Shift : F**

## Create Todo List
![Screenshot 2024-11-29 002414](https://github.com/user-attachments/assets/fffc12e1-37ab-478b-8203-fbf6ba7e450c)
![Screenshot 2024-11-29 002427](https://github.com/user-attachments/assets/5729f8d2-f613-454c-9585-f61d4c3004cf)
![Screenshot 2024-11-29 002523](https://github.com/user-attachments/assets/421d05c6-910a-4a68-b7a5-96c59b3877a6)
![Screenshot (399)](https://github.com/user-attachments/assets/ca3111b0-9603-4a3e-82b8-4ea2845e84d0)
![Screenshot 2024-11-29 003925](https://github.com/user-attachments/assets/c99bf03f-a6d9-41b8-ae6c-9f1de65843fa)


Fungsi: addTodo

async addTodo(todo: Omit<Todo, 'id'>) {
    const todoRef = this.getTodoRef(); // Mengambil referensi koleksi 'todos' milik user.
    const docRef = await addDoc(todoRef, {
        ...todo,                 // Menggunakan data yang diterima dari parameter.
        status: false,           // Status default adalah `false`.
        createdAt: Timestamp.now(), // Waktu pembuatan.
        updatedAt: Timestamp.now()  // Waktu pembaruan sama dengan pembuatan awal.
    });
    return docRef.id;             // Mengembalikan ID dokumen yang baru ditambahkan.
}

Penjelasan:

Tujuan: Menambahkan data baru ke koleksi todos.
Detail:
- Mengambil referensi koleksi dari pengguna yang sedang login.
- Menyisipkan dokumen baru dengan properti status, createdAt, dan updatedAt.
- createdAt dan updatedAt menggunakan timestamp dari Firestore.
- Mengembalikan ID dokumen baru yang dibuat.


## Read Todolist
![image](https://github.com/user-attachments/assets/4bdf56e0-4ca0-4787-9bfe-7ca1e45703b1)
![Screenshot 2024-11-29 003459](https://github.com/user-attachments/assets/8cd3b5b9-c933-49c3-b97b-1c5dbbc0b9c5)


Fungsi: getTodos

async getTodos(): Promise<Todo[]> {
    const todoRef = this.getTodoRef(); // Mengambil referensi koleksi 'todos' milik user.
    const q = query(todoRef, orderBy('updatedAt', 'desc')); // Query untuk mengurutkan berdasarkan 'updatedAt' secara menurun.
    const snapshot = await getDocs(q); // Mendapatkan semua dokumen dari query.
    return snapshot.docs.map((doc) => ({
        id: doc.id,                // Menyimpan ID dokumen.
        ...doc.data()              // Menambahkan data dari dokumen.
    } as Todo));
}

Tujuan: Mengambil daftar semua dokumen dari koleksi todos.
Detail:
- Mengambil referensi koleksi untuk pengguna yang sedang login.
- Membuat query untuk mengurutkan dokumen berdasarkan waktu pembaruan (updatedAt) secara menurun.
- Mendapatkan dokumen dari hasil query dan memetakan data menjadi objek Todo, termasuk menambahkan properti id untuk ID dokumen.


## Update Todo List
**Update Data**

![Screenshot 2024-11-29 003925](https://github.com/user-attachments/assets/2c284ee2-b476-4321-9155-3200f0ef86d1)
![Screenshot 2024-11-29 003131](https://github.com/user-attachments/assets/938240ad-d59c-40f2-a7c9-78d0f9f67d95)
![Screenshot 2024-11-29 003459](https://github.com/user-attachments/assets/d79e74ab-a981-4a28-b5f9-8c82b3448230)
![Screenshot (402)](https://github.com/user-attachments/assets/1098a701-2460-453b-b36b-1d27f67cd7af)
![Screenshot 2024-11-29 005153](https://github.com/user-attachments/assets/1f345951-2964-49d5-8206-1727e9220a62)

**Update Status**

![Screenshot 2024-11-29 003131](https://github.com/user-attachments/assets/8a9e3838-9209-4378-9bb8-dcda268627db)
![Screenshot (403)](https://github.com/user-attachments/assets/83719c27-4dd0-43d4-9dd8-88536a073662)
![Screenshot 2024-11-29 003720](https://github.com/user-attachments/assets/435a3dc7-0eef-41e6-9b9c-9fa1b10b5732)


Fungsi: updateTodo

typescript
Salin kode
async updateTodo(id: string, todo: Partial<Todo>) {
    const todoRef = this.getTodoRef(); // Mengambil referensi koleksi 'todos' milik user.
    const docRef = doc(todoRef, id); // Mengambil referensi dokumen berdasarkan ID.
    await updateDoc(docRef, {
        ...todo,                 // Data yang akan diperbarui.
        updatedAt: Timestamp.now() // Memperbarui waktu perubahan.
    });
}
Penjelasan:

Tujuan: Memperbarui dokumen tertentu berdasarkan ID.
Detail:
- Mengambil referensi dokumen berdasarkan ID yang diberikan.
- Data yang diterima dalam parameter di-spread untuk mengubah data tertentu tanpa mengganti seluruh dokumen.
- updatedAt diperbarui dengan timestamp terbaru.

## Delete Todo List
![Screenshot 2024-11-29 003925](https://github.com/user-attachments/assets/0137f1c2-7cd7-480c-80ca-9c0259f7f005)
![Screenshot 2024-11-29 003213](https://github.com/user-attachments/assets/c3eeb4a3-7ecb-401f-b07f-7044b11dd4df)
![Screenshot (401)](https://github.com/user-attachments/assets/907f3a62-19c1-4908-9025-838ce5aaa990)
![Screenshot 2024-11-29 002414](https://github.com/user-attachments/assets/380bd2bf-b3e7-45a3-aa45-a10594099159)


Fungsi: deleteTodo

typescript
Salin kode
async deleteTodo(id: string) {
    const todoRef = this.getTodoRef(); // Mengambil referensi koleksi 'todos' milik user.
    const docRef = doc(todoRef, id);  // Mengambil referensi dokumen berdasarkan ID.
    await deleteDoc(docRef);          // Menghapus dokumen.
}
Penjelasan:

Tujuan: Menghapus dokumen tertentu dari koleksi todos.
Detail:
- Mengambil referensi dokumen berdasarkan ID yang diberikan.
- Menghapus dokumen menggunakan fungsi deleteDoc.



