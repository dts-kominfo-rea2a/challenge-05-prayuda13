const names = ['Halo', 'Angel', 'Nyoman', 'Ketut', 'Aisyah'];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (names, fnCallback) => {
  let no = 1;
  const arrNames = [];
  const arrSort = fnCallback(names);
  for (let i = 0; i < arrSort.length; i++) {
    arrNames.push(no++ + '. ' + arrSort[i]);
  }

  return arrNames;
};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (arrCallback = []) => {
  const arrHasil = [];

  for (let i = 0; i < arrCallback.length; i++) {
    arrHasil.push(arrCallback[i]);
  }
  return arrHasil.sort();
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (arrCallback = []) => {
  const arrHasil = [];

  for (let i = 0; i < arrCallback.length; i++) {
    arrHasil.push(arrCallback[i]);
  }

  return arrHasil.sort().reverse();
};

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join('\n'));
  console.log(sorter?.(names, sortDescending)?.join('\n'));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
