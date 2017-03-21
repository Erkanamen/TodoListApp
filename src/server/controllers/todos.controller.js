//DB scheme
import TodoItem from '../models/todoItem';

var debug = true;

export function addTodoItem(req, res) {

  //For debugging
  if(debug)
  {
  
	  console.log("todo addTodoItem request table is " + req.body.todoItem.table);
	  console.log("todo addTodoItem request id is " + req.body.todoItem.id);
	  console.log("todo addTodoItem request text is " + req.body.todoItem.text);
	  console.log("todo addTodoItem request completed is " + req.body.todoItem.completed);
  }
  
  //Error checking
  if (req.body.todoItem.id == null || req.body.todoItem.text == null) {
    res.status(403).end();
    return;
  }

  //Creating new record
  const newItem = new TodoItem(req.body.todoItem);

  //Calling api of MongoDB
  newItem.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
      console.log('error msg:' + err);
      return;
    }
	//sending the created item 
    res.json({"todoItem": req.body.todoItem});
  });

  if(debug) TodoItem.count({}, function(err, count){
		console.log( "DB items:", count );
	});
}


export function deleteItem(req, res) {
   if(debug) console.log("todo deleteItem request id is " + req.params.id);
  
  TodoItem.findOne({ id: req.params.id }).exec((err, todo) => {
    if (err) {
      res.status(500).send(err);
    }
     if(debug) console.log("the deleted todo id " + todo.id + " and text is " + todo.text);
    todo.remove(() => {
      res.status(200).end();
    });
  });

 	if(debug) TodoItem.count({}, function(err, count){
		console.log( "DB items:", count );
	});
}


export function toggleItem(req, res) {

  if(debug) console.log('toggleItem for DB ' + req.params.id);
  
  // return all rows matching id obtained from the id in request
  var query = TodoItem.findOne(
                 { id: req.params.id }  // condition
              );
  
  // execute the query 
  query.exec(function (err, todo) {
    if (err) 
      res.status(500).send(err);
    if(!todo) { 
      res.status(500).send(err);
    }
    else {  
      todo.update(
        {
          completed: !todo.completed
        },
        
        (err, res) => {
          if (err)
            console.log('error from update ' + err);
          else
            console.log('response from update ' + res);
        }
      )
    }
  });
}


export function getCollections(req, res) {
 	//Calling api of MongoDB
	if(debug) console.log('getCollections for DB ');
	var result = TodoItem.find({table:'todoItem'});

	result.exec(function (err, todo) {
	    if (err) 
	      res.status(500).send(err);
	    if(!todo) { 
	      res.status(500).send(err);
	    }
	    else {
			res.json(todo);
			//this command will let the apiCaller invoke next fuction in then().
			res.end();
			if(debug) console.log("returned items of res : " +"\n" + todo);
	    }
    });
	return;
}
