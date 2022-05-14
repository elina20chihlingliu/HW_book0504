// book.ts
export class Book {

    private bookcount = [0, 0, 0, 0, 0];
    private booktotal = 0;
    bnum(booknames: number[]) {
        this.booktotal = booknames.length
        for (let bookname of booknames) {
            this.bookcount[bookname-1] += 1;
        }
    }

    get price() {
        console.log(this.bookcount);
        console.log(this.booktotal);
        return 100*this.booktotal;
      }
}
// def assert_equal{
//     (8 * 2 * 0.95, price([0, 1]))
// }
