// book.ts
export class Book {

    private bookcount = [0, 0, 0, 0, 0];
    private booktotal = 0;
    private _price = 0;
    
    bnum(booknames: number[]) {
        let discount = [0, 0.05, 0.1, 0.2, 0.25]
        this.booktotal = booknames.length
        for (let bookname of booknames) {
            this.bookcount[bookname-1] += 1;
        }
        this._price = 100*this.booktotal
        
        if (this.booktotal = 2){
            this._price = this._price*(1-discount[1])
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
