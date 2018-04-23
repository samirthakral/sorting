describe('mergesort.js', () => {

  describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
      // your code here
      let arr = [3,6,7,4];
      expect(split(arr)).toEqual([[3,6],[7,4]]);
    });
  });

  describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
      // test the merging algorithm
      let arr1 = [3,6]
      let arr2 = [4,7];
      expect(merge(arr1,arr2)).toEqual([3,4,6,7]);
    });
  });

  describe('Merge-sort function', function(){
    it('is able to sort an array', function(){
      // test the merging algorithm
      let arr1 = [3,6, 7, 4];
      expect(mergeSort(arr1)).toEqual([3,4,6,7]);
    });
  });
})
