import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const users = [
            { id: 1, name: "Vale", email: "vale@faispesa.it", password: "male" }
        ];

        const lists = [
            {
                id: 1, name: "Spesa", img: "-", userId: 1, product : [
                      {id: 1, img: "-", name: "Pasta", dose: "100gr", quantity: "2", took: false },
                      {id: 2, img: "-", name: "Paste", dose: "100gr", quantity: "2", took: false }
                    ]
                     
            },
             {
                 id: 2, name: "Pasquetta", img: "-", userId: 2, product: [
                     { id: 2, img: "-", name: "Pasta", dose: "100gr", quantity: "2", took: false }
                 ] 
             }
        ]

        return { users, lists };
    }
}