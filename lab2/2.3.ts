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

    const favoriteAuthor: Author = {
        email: 'author1@exmpl.com',
        name: 'norimixxxo miron',
        numBooksPublished: 10
    };

    const favoriteLibrarian: Librarian = {
        department: 'a',
        email: 'a@a.a',
        name: 'noname',

        assistCustomer(customerName: string): void {
            console.log(`nothing go brrrr..`);
        }
    };
})();

//tsc 2.3.ts ; node 2.3.js