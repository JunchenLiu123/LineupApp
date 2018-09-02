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
    console.log("new queueid " + queue + " was create with lineid " + lineID)
    return lineID,queue

    }   
    function Add(userID)
    {
    this.userID=userID
    queue.push(userID)
    console.log(queue)
    return queue
    }

    function Delete(lineID)
    {
    var item =queue.shift()
    console.log(queue)
    return item

    }
//}    
module.exports.Createline=Createline
module.exports.Delete=Delete
module.exports.Add=Add