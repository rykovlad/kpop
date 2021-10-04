(() => {
    interface Person {
        name: string,
        email: string
    }

    interface Author extends Person {
        numBooksPublished: number;
    }

    interface Librarian extends Person {
        department: string,
        assistCustomer: (custName: string) => void
    }

    class UniversityLibrarian implements Librarian {
        public department: string;
        public email: string;
        public name: string;

        public assistCustomer(custName: string): void {
            console.log(`${this.name} helps ${custName}`);
        }
    }

    const favoriteAuthor: Author = {
        email: 'author1@exmpl.com',
        name: 'norimixxxo miron',
        numBooksPublished: 10
    };

    const favoriteLibrarian = new UniversityLibrarian();
    favoriteLibrarian.name = 'Librarian L';
    favoriteLibrarian.assistCustomer('Customer C');
})();

//  tsc 2.4.ts ; node 2.4.js