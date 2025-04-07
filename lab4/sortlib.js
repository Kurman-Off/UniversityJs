`use strict`

const SortLib = {
  /**
   * Сортує масив числових значень методом обміну (бульбашкове сортування).
   * @param {number[]} arr Масив для сортування.
   * @param {boolean} ascending Сортувати за зростанням (true) чи спаданням (false).
   * @returns {number[]} Відсортований масив.
   */
  bubbleSort: function (arr, ascending = true) {
    let comparisons = 0;
    let swaps = 0;
    const n = arr.length;
    const sortedArr = arr.slice();
    const undefinedElements = [];
    const definedElements = [];

    for (let i = 0; i < n; i++) {
      if (sortedArr[i] === undefined) {
        undefinedElements.push(undefined);
      } else {
        definedElements.push(sortedArr[i]);
      }
    }

    for (let i = 0; i < definedElements.length - 1; i++) {
      for (let j = 0; j < definedElements.length - 1 - i; j++) {
        comparisons++;
        if (ascending ? definedElements[j] > definedElements[j + 1] : definedElements[j] < definedElements[j + 1]) {
          swaps++;
          [definedElements[j], definedElements[j + 1]] = [definedElements[j + 1], definedElements[j]];
        }
      }
    }

    const finalArr = definedElements.concat(undefinedElements);

    console.log(`Bubble Sort: Порівнянь - ${comparisons}, Обмінів - ${swaps}`);
    if (undefinedElements.length > 0) {
      console.log(`Bubble Sort: Масив містив ${undefinedElements.length} undefined елементів.`);
    }
    return finalArr;
  },

  /**
   * Сортує масив методом мінімальних елементів (сортування вибором).
   * @param {number[]} arr Масив для сортування.
   * @param {boolean} ascending Сортувати за зростанням (true) чи спаданням (false).
   * @returns {number[]} Відсортований масив.
   */
  selectionSort: function (arr, ascending = true) {
    let comparisons = 0;
    let swaps = 0;
    const n = arr.length;
    const sortedArr = arr.slice();
    const undefinedElements = [];
    const definedElements = [];

    for (let i = 0; i < n; i++) {
      if (sortedArr[i] === undefined) {
        undefinedElements.push(undefined);
      } else {
        definedElements.push(sortedArr[i]);
      }
    }

    for (let i = 0; i < definedElements.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < definedElements.length; j++) {
        comparisons++;
        if (ascending ? definedElements[j] < definedElements[minIndex] : definedElements[j] > definedElements[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        swaps++;
        [definedElements[i], definedElements[minIndex]] = [definedElements[minIndex], definedElements[i]];
      }
    }

    const finalArr = definedElements.concat(undefinedElements);

    console.log(`Selection Sort: Порівнянь - ${comparisons}, Обмінів - ${swaps}`);
    if (undefinedElements.length > 0) {
      console.log(`Selection Sort: Масив містив ${undefinedElements.length} undefined елементів.`);
    }
    return finalArr;
  },

  /**
   * Сортує масив методом вставок.
   * @param {number[]} arr Масив для сортування.
   * @param {boolean} ascending Сортувати за зростанням (true) чи спаданням (false).
   * @returns {number[]} Відсортований масив.
   */
  insertionSort: function (arr, ascending = true) {
    let comparisons = 0;
    let swaps = 0;
    const n = arr.length;
    const sortedArr = arr.slice();
    const undefinedElements = [];
    const definedElements = [];

    for (let i = 0; i < n; i++) {
      if (sortedArr[i] === undefined) {
        undefinedElements.push(undefined);
      } else {
        definedElements.push(sortedArr[i]);
      }
    }

    for (let i = 1; i < definedElements.length; i++) {
      let key = definedElements[i];
      let j = i - 1;
      while (j >= 0 && (ascending ? definedElements[j] > key : definedElements[j] < key)) {
        comparisons++;
        definedElements[j + 1] = definedElements[j];
        j--;
        swaps++;
      }
      definedElements[j + 1] = key;
    }

    const finalArr = definedElements.concat(undefinedElements);

    console.log(`Insertion Sort: Порівнянь - ${comparisons}, Переміщень - ${swaps}`);
    if (undefinedElements.length > 0) {
      console.log(`Insertion Sort: Масив містив ${undefinedElements.length} undefined елементів.`);
    }
    return finalArr;
  },

  /**
   * Сортує масив методом Шелла.
   * @param {number[]} arr Масив для сортування.
   * @param {boolean} ascending Сортувати за зростанням (true) чи спаданням (false).
   * @returns {number[]} Відсортований масив.
   */
  shellSort: function (arr, ascending = true) {
    let comparisons = 0;
    let swaps = 0;
    const n = arr.length;
    const sortedArr = arr.slice();
    const undefinedElements = [];
    const definedElements = [];

    for (let i = 0; i < n; i++) {
      if (sortedArr[i] === undefined) {
        undefinedElements.push(undefined);
      } else {
        definedElements.push(sortedArr[i]);
      }
    }

    for (let gap = Math.floor(definedElements.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
      for (let i = gap; i < definedElements.length; i++) {
        let temp = definedElements[i];
        let j = i;
        while (j >= gap && (ascending ? definedElements[j - gap] > temp : definedElements[j - gap] < temp)) {
          comparisons++;
          definedElements[j] = definedElements[j - gap];
          j -= gap;
          swaps++;
        }
        definedElements[j] = temp;
      }
    }

    const finalArr = definedElements.concat(undefinedElements);

    console.log(`Shell Sort: Порівнянь - ${comparisons}, Переміщень - ${swaps}`);
    if (undefinedElements.length > 0) {
      console.log(`Shell Sort: Масив містив ${undefinedElements.length} undefined елементів.`);
    }
    return finalArr;
  },

  /**
   * Сортує масив методом Хоара (швидке сортування).
   * @param {number[]} arr Масив для сортування.
   * @param {boolean} ascending Сортувати за зростанням (true) чи спаданням (false).
   * @returns {number[]} Відсортований масив.
   */
  quickSort: function (arr, ascending = true) {
    let comparisons = 0;
    let swaps = 0;
    const n = arr.length;
    const sortedArr = arr.slice();
    const undefinedElements = [];
    const definedElements = [];

    for (let i = 0; i < n; i++) {
      if (sortedArr[i] === undefined) {
        undefinedElements.push(undefined);
      } else {
        definedElements.push(sortedArr[i]);
      }
    }

    function partition(arr, low, high) {
      let pivot = arr[high];
      let i = low - 1;
      for (let j = low; j <= high - 1; j++) {
        comparisons++;
        if (ascending ? arr[j] < pivot : arr[j] > pivot) {
          i++;
          swaps++;
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }
      swaps++;
      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
      return i + 1;
    }

    function quickSortHelper(arr, low, high) {
      if (low < high) {
        let pi = partition(arr, low, high);
        quickSortHelper(arr, low, pi - 1);
        quickSortHelper(arr, pi + 1, high);
      }
    }

    quickSortHelper(definedElements, 0, definedElements.length - 1);

    const finalArr = definedElements.concat(undefinedElements);

    console.log(`Quick Sort: Порівнянь - ${comparisons}, Обмінів - ${swaps}`);
    if (undefinedElements.length > 0) {
      console.log(`Quick Sort: Масив містив ${undefinedElements.length} undefined елементів.`);
    }
    return finalArr;
  },
};
