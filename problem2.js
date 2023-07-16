function joinArrayRemoveDuplicate(arrayA, arrayB) {
    // you are kode here
    // memerge
    const merged = [...arrayA, ...arrayB];
  
    // membuat dalam satu set dan menghapus duplicate
    const unique = [...new Set(merged)];
  
    return unique;
  }
  
  console.log(joinArrayRemoveDuplicate(["apel", "anggur"], ["lemon", "leci", "nanas"]))
// ["apel", "anggur", "lemon", "leci", "nanas"]


console.log(joinArrayRemoveDuplicate(["samsung", "apple"], ["apple", "sony", "xiaomi"]))
// ["samsung", "apple", "sony", "xiaomi"]


console.log(joinArrayRemoveDuplicate(["football", "basketball"], ["basketball", "football"]))
// [“football”, “basketball”]
