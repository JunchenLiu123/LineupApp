function Queue()
{
    this.queue=[];
}
//switch(operation)
//{
    function Createline(lineID)
    {
    this.lineID=lineID
    //queue=Queue()
    Queue();
    console.log("new queue" + queue + " was create with lineid " + lineID)
    return lineID,queue

    }   
    function Add(userID)
    {
    this.userID=userID
    console.log("user with userID "+ userID + " was added to the line" )
    queue.push(userID)
    console.log("line now contains "+ queue)
    return queue
    }

    function Delete(lineID)
    {
    var item =queue.shift()
    console.log("The first person was remove from the line")
    console.log(queue)
    return item

    }
//}    
module.exports.Createline=Createline
module.exports.Delete=Delete
module.exports.Add=Add