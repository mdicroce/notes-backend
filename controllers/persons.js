const personRouter = require('express').Router();
const Person = require('../models/Person');

personRouter.get("/:id", (request, response,next) => {
  Person.findById(request.params.id)
  .then(persona =>{
    response.json(persona);
    connection.close();
  }
  )
  .catch(err => {
    next(err);
  })
});
personRouter.get("/", (request, response,next) => {
  Person.find({})
  .then(persona=>{
    response.json(persona);
    connection.close();
  })
  .catch(err => {
    next(err);
  })
});
personRouter.get("/info", (request, response) => {
  const size = persons.length;
  const time = new Date();
  const text = `<p>Phonebook has info for ${size} people </p>
    <p> ${time}</p>`;
  response.send(text);
});

personRouter.post("/", (request, response) => {
  const { body } = request;
  const text = errorPost(body);
  if (text) {
    response.status(400).json({
      error: text,
    });
  }
  const newPerson = new person({
    name: body.name,
    number: body.number,
  });
  newPerson.save()
    .then(savedPerson => {
      response.json(savedPerson);
      
    })
    .catch(err => {
      console.error(err);
    })
});
personRouter.put("/:id" , (request,response, next) =>
{
  const {id} = request.params;
  const note = request.body;
  const noteInfo = {
    name : note.name,
    number : note.number
  };
  Person.findByIdAndUpdate(id,noteInfo,{new: true})
  .then(result => {
    response.json(result);
  })
  .catch(err =>{
    next(err);
  }
  )
})
personRouter.delete("/:id", (request, response, next) => {
  const {id} = request.params;
  Person.findByIdAndDelete(id)
  .then(result => {
    response.status(204).end();
  })
  .catch(err => {
    next(err);
  })

});
const errorPost = (body) => {
  if (!body.name) {
    return "Request doesen't have a name";
  }
  if (!body.number) {
    return "Request doesen't have a number";
  }
  if (persons.find((actual) => actual.name === body.name)) {
    return "Name is already taken";
  }
  return "";
};

module.exports = personRouter;