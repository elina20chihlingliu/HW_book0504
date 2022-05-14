// book.ts
export class Book {

    private bookcount = [0, 0, 0, 0, 0];
    private booktotal = 0;
    private _price = 0;
    
    bnum(booknames: number[]) {
        this.booktotal = booknames.length
        for (let bookname of booknames) {
            this.bookcount[bookname-1] += 1;
        }
        this._price = 100*this.booktotal

        // if (this.booktotal = 2){
        //     this._price = this._price*(1-discount[1])
        // }
        this.bcom();

    }
    
    bcom(){
        
        let discount = [0, 0.05, 0.1, 0.2, 0.25]
        const someIsNotZero = this.bookcount.some(item => item !== 0);
        var indices: number[] = [];
        var notzero: number[] = [];
        //var notzero: number[] = [];
        var orin = [0, 1, 2, 3, 4]
        var booktest = this.bookcount;
        //var notzero = 0
        var idx = this.bookcount.indexOf(0);

        while (idx != -1) {
        indices.push(idx);
        idx = booktest.indexOf(0, idx + 1);
        }
        console.log(indices); // [0, 2, 4]

        notzero = orin.filter( function( el ) {
            return !indices.includes( el );
          } );
        console.log(notzero);
        
    
        //notzero = 5-indices.length

        while(notzero.length > 1){
            if (notzero.length == 2){
                this._price = this._price - 100*2*(discount[1]);
                for (let eachnot of notzero) {
                    booktest[eachnot] -=1;
                }
            }
            else if (notzero.length == 3){

            }
            else if (notzero.length == 4){

            }
            else if (notzero.length == 5){

            }
            indices = []
            idx = booktest.indexOf(0);
            while (idx != -1) {
                indices.push(idx);
                idx = booktest.indexOf(0, idx + 1);
            }
            notzero = orin.filter( function( el ) {
                return !indices.includes( el );
              } );
        }
    }

    get price() {
        //console.log(this.bookcount);
        //console.log(this.booktotal);

        return this._price;
      }
}
// def assert_equal{
//     (8 * 2 * 0.95, price([0, 1]))
// }
