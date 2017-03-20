//DB scheme
import TodoItem from '../models/todoItem';

export function addTodoItem(req, res) {
  if (req.body.todoItem.id == null || req.body.todoItem.text == null) {
    res.status(403).end();
    return;
  }

  const newItem = new TodoItem(req.body.todoItem);

  newItem.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
      console.log('error msg:' + err);
      return;
    }
    res.json({"todoItem": req.body.todoItem});
  });
}


export function deleteItem(req, res) {
  console.log("todo request id is " + req.params.id);
  
  TodoItem.findOne({ id: req.params.id }).exec((err, todo) => {
    if (err) {
      res.status(500).send(err);
    }
    console.log("todo id " + todo.id + " and text is " + todo.text);
    todo.remove(() => {
      res.status(200).end();
    });
  });
}


export function toggleItem(req, res) {
  // return all rows matching id obtained from the id in request
  var query = TodoItem.findOne(
                 { id: req.params.id }  // condition
              )
  
  // execute the query 
  query.exec(function (err, todo) {
    if (err) 
      res.status(500).send(err)
    if(!todo) { 
      res.status(500).send(err)
    }
    else {  
      todo.update(
        {
          completed: !todo.completed
        },
        
        (err, res) => {
          if (err)
            console.log('error from update ' + err)
          else
            console.log('response from update ' + res)
        }
      )
    }
  })
}

