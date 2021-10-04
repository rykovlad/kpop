(() => {
    type PrizeLogger = (string) => void

    enum Category {
        BUSINESS_ANALYST,
        DEVELOPER,
        DESIGNER,
        QA,
        SCRUM_MASTER
    }

    interface Worker {
        id: number,
        name: string,
        surname: string,
        available: boolean,
        salary: number,
        category: Category,
        markPrize: PrizeLogger
    }

    const logPrize: PrizeLogger = (prize) => console.log(prize);
    logPrize("log prize go brrrrrr");

})();

// tsc 2.2.ts; node 2.2.js