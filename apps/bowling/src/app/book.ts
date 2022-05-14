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
        this.bcom();

    }
    
    bcom(){
        
        let discount = [0, 0.05, 0.1, 0.2, 0.25]
        var indices: number[] = [];
        var notzero: number[] = [];
        var orin = [0, 1, 2, 3, 4]
        var booktest = this.bookcount;
        var idx = this.bookcount.indexOf(0);

        while (idx != -1) {
        indices.push(idx);
        idx = booktest.indexOf(0, idx + 1);
        }

        notzero = orin.filter( function( el ) {
            return !indices.includes( el );
          } );
        
        while(notzero.length > 1){
            
            if (Math.max(...booktest)==1 && notzero.length == 3 && this._price!=300)
            {
                this._price = this._price + 100*5*(discount[4]) - 2*100*4*(discount[3]);
                break;
            }

            this._price = this._price - 100*notzero.length*(discount[notzero.length-1]);
            for (let eachnot of notzero) {
                booktest[eachnot] -=1;
            }

            indices = [];
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
        return this._price;
      }
}
