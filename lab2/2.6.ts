(() => {
    class ReferenceItem {
        public static department: string = 'd2';

        private _publisher: string;

        constructor(public title: string, protected year: number) {
        }

        get publisher(): string {
            return this._publisher.toUpperCase();
        }

        set publisher(val) {
            this._publisher = val;
        }

        public printItem() {
            console.log(`${this.title} was published in ${this.year} year in the ${ReferenceItem.department} department`);
        }
    }

    class Encyclopedia extends ReferenceItem {
        constructor(title: string, year: number, public edition: number) {
            super(title, year);
        }

        public printItem(): void {
            super.printItem();
            console.log(`Edition: ${this.edition} (${this.year})`);
        }
    }

    const ref = new ReferenceItem('new ReferenceItem', 2021);
    ref.printItem();
    ref.publisher = 'brrrrrrr in upper case';
    console.log(ref.publisher);

    const refBook = new Encyclopedia('new Encyclopedia', 2022, 2);
    refBook.printItem();
})();