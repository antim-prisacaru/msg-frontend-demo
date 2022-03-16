import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { omit } from 'lodash';

const app = express();
app.use(bodyParser.json());
app.use(cors());
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
let currentUser: Partial<User>;

app.get('/', (req: any, res: any) => {
    return res.send('Hello world!');
});

app.post('/login', (req: any, res: any) => {
    console.log('/login route');
    const user = req.body;

    if (!(typeof user === 'object' && user.hasOwnProperty('username') && user.hasOwnProperty('password'))) {
        console.error('Input has wrong format.');
        return res.status(400).send('Input has wrong format.');
    }

    const result = users.find(x => x.username === user.username && x.password === user.password);

    if (!result) {
        console.error('Username or password invalid');
        return res.status(401).send('Username or password invalid.');
    }

    currentUser = omit(result, ['password']);
    console.log('Found user', currentUser);

    return res.status(200).send(currentUser);
});

app.get('/me', (req: any, res: any) => {
    console.log('/me route');
    console.log('Getting user', currentUser);
    return res.status(200).send(omit(currentUser, ['password']));
});

app.post('/logout', (req: any, res: any) => {
    console.log('/logout route');
    if (!currentUser) {
        console.error('User not logged in!');
        return res.status(401).send('User not logged in!');
    }

    currentUser = null;
    return res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
