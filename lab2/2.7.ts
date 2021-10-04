(() => {
    abstract class ReferenceItem {
        public static department: string = 'd3';

        private _publisher: string;

        protected constructor(public title: string, protected year: number) {
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

        public abstract printCitation();
    }

    class Encyclopedia extends ReferenceItem {
        constructor(title: string, year: number, public edition: number) {
            super(title, year);
        }

        public printItem(): void {
            super.printItem();
            console.log(`Edition: ${this.edition} (${this.year})`);
        }

        public printCitation() {
            console.log(`${this.title} - ${this.year}`);
        }
    }



    const refBook = new Encyclopedia('new Encyclopedia', 1234, 5);
    refBook.printCitation();
    refBook.printItem();
})();