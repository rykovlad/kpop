(() => {
    class ReferenceItem {
     
        public static department: string = 'department';

        private _publisher: string;

        constructor(public title: string, private year: number) {
        }

        get publisher(): string {
            return this._publisher.toUpperCase();
        }

        set publisher(val) {
            this._publisher = val;
        }

        public printItem() {
            console.log(`${this.title} was published in ${this.year} year in the ${ReferenceItem.department} of department `);
        }
    }

    const ref = new ReferenceItem('new ReferenceItem', 420);
    ref.printItem();
    ref.publisher = 'brrrrr';
    console.log(ref.publisher);
})();

