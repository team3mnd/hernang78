const express = require('express');
const router = express.Router();
const Itinerary = require('../models/itinerary');

//_id, photo, user, comment, date
router.post('/add', async (req, res) => {
  console.log('comments/add')
  let id = req.body._id
  let addComent = {
    photo: req.body.photo,
    comment: req.body.comment ,
    date: Date(req.body.date) ,
    user: req.body.user}

  const itinerary = await Itinerary.findById('dasfgsdgsdfg');
  console.log(itinerary);
  if (itinerary){
    const comments = itinerary.comments;
    comments.push(addComent);

    const res = await Itinerary.updateOne({_id:id},{ comments: comments });

    if( res.n != 0 ){
      res.json({success: 'OK', message : 'comentario agregado.'});
    }
    else{
      res.status(500).json({success: 'Error', message : 'a ocurrido algo raro'});
    }  
  }
  else{
    res.status(500).json({success: 'Error', message : 'a ocurrido algo raro'});
  }
 
});

module.exports = router;

