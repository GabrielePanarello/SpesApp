import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const users = [
            { id: 1, name: "Vale", email: "vale@faispesa.it", password: "male" }
        ];

        const lists = [
            {
                list: [
                    {
                        id: 1, name: "Spesa", img: "-", product: [
                            { id: 1, img: "-", name: "Pasta", dose: "100gr", quantity: "2", took: false }
                        ]
                    }
                ]
            }
        ]

        return { users, lists };
    }
}
