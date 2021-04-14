/* const { response } = require('express') */
let morgan = require('morgan');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

morgan.token('post', (res,req) => {
  if(res.method === "POST")
  {
    return JSON.stringify(res.body)
  }
  return "";
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :post'));
let persons = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: '040-123456',
  },
  {
    id: 2,
    name: 'Ada Lovelace',
    number: '39-44-5323523',
  },
  {
    id: 3,
    name: 'Dan Abramov',
    number: '12-43-234353',
  },
  {
    id: 4,
    name: 'Mary Poppendick',
    number: '39-23-614124',
  },
];
app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((actual) => actual.id === id);
  if (person) {
    response.json(person);
  } else {
    response.status(404).end('vamos menem');
  }
});
app.get('/api/persons', (request, response) => {
  response.json(persons);
});
app.get('/info', (request, response) => {
  const size = persons.length;
  const time = new Date();
  const text = `<p>Phonebook has info for ${size} people </p>
    <p> ${time}</p>`;
  response.send(text);
});
const idFunction = () => {
  const ids = persons.map((actual) => actual.id);
  let number = 0;
  do {
    number = Math.floor(Math.random() * 100000);
  } while (ids.some((actual) => {return actual === number}));
  return number;
};

const errorPost = (body) => {
  if (!body.name) {
    return "Request doesen't have a name";
  }
  if (!body.number) {
    return "Request doesen't have a number";
  }
  if (persons.find((actual) => actual.name === body.name)) {
    return 'Name is already taken';
  }
  return '';
};
app.post('/api/persons', (request, response) => {
  const { body } = request;
  const text = errorPost(body);
  if (text) {
    response.status(400).json({
      error: text,
    });
  }
  const newPerson = {
    name: body.name,
    number: body.number,
    id: idFunction(),
  };
  persons = [...persons, newPerson];
  response.json(newPerson);
});
app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((actual) => actual.id !== id);
  response.status(204).end();
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
