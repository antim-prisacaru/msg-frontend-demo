import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { omit } from 'lodash';

const app = express();
const port = 8080;

type User = {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
};

const users: User[] = [
    {
        id: 1,
        username: 'testuser',
        password: 'example',
        firstName: 'Test',
        lastName: 'User',
    },
];
let currentUser: User;

app.get('/', (req: any, res: any) => {
    res.send('Hello world!');
});

app.post('/login', (req: any, res: any) => {
    console.log('Body', req.body);
    const user = JSON.parse(req.body);

    if (typeof 'user' != 'object' || !user.hasOwnProperty('username') || !user.hasOwnProperty('password')) {
        res.sendStatus(400);
    }

    const result = users.find(x => x.username === user.username && x.password === user.password);

    if (!result) {
        res.sendStatus(401);
    }

    currentUser = user;
    res.send(omit(result, ['password']));
});

app.get('/me', (req: any, res: any) => {
   res.send(omit(currentUser, ['password']));
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
