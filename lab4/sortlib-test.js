const arr1 = Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000)); // звичайний масив
const arr2 = [...arr1];
arr2[5] = undefined;
arr2[30] = undefined;
arr2[16] = undefined;
arr2[66] = undefined;
arr2[76] = undefined;
arr2[50] = undefined;

console.log("--- Нерозріджений масив ---", arr1);
console.log("--- Розріджений масив ---", arr2);
console.log("Bubble sort:", SortLib.bubbleSort(arr1, true));
console.log("Selection sort:", SortLib.selectionSort(arr1, false));
console.log("Insertion sort:", SortLib.insertionSort(arr1, true));
console.log("Shell sort:", SortLib.shellSort(arr1, true));
console.log("Quick sort:", SortLib.quickSort(arr1, false));

console.log("\n--- Розріджений масив ---");
console.log("Bubble sort:", SortLib.bubbleSort(arr2, true));
console.log("Selection sort:", SortLib.selectionSort(arr2, false));
console.log("Insertion sort:", SortLib.insertionSort(arr2, true));
console.log("Shell sort:", SortLib.shellSort(arr2, true));
console.log("Quick sort:", SortLib.quickSort(arr2, false));
