import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const users = [
            {id: 1, name: "Vale", email:"vale@faispesa.it", password:"male"}
        ];

        return {users};
    }
}
