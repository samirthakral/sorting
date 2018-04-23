describe('bubblesort.js', () => {

  describe('Bubble Sort', function(){
    beforeEach(function () {
      spyOn(window, 'swap').and.callThrough();
    });

    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });

    it('handles a single item', function(){
      expect(bubbleSort([5])).toEqual([5]);
    });

    it('handles multiple items', function(){
      let arr = [3,14,1,8,2,10];
      expect(bubbleSort(arr)).toEqual([1,2,3,8,10,14]);
    });

    it('Swap is called the correct number of times', function(){
      let arr = [3,14,1,8,2,10];
      bubbleSort(arr);
      expect(swap.calls.count()).toEqual(7);
    })
  })
})
