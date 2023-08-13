import { Router } from "express";
import{Todo} from '../modules/todo';
const router=Router();
let todos: Todo[]=[];


router.get('/',(req,res,next)=>{
    res.status(200).json({todos:todos});

});
router.post('/todo',(req,res,next)=>{
    const newTodo: Todo={
        id:new Date().toISOString(),
        text:req.body.text
    }
    todos.push(newTodo);


})

router.delete('/deletetodo/:id',(req, res, next)=>{ 
    todos=todos.filter(item=>item.id!==req.params.id);
    res.status(200).json({message:'success'});


})


router.put('/edit/:id',(req,res,next)=>{
    const id=req.params.id;
    const todoindex=todos.findIndex(item=>item.id===id);
    if(todoindex>=0){
        todos[todoindex]={id: todos[todoindex].id,text:req.body.text};
    return res.status(200).json({message:'updated'})

    }
    return res.status(404).json({message:'not found'});


})
export default router;