const express = require('express');
const router = express.Router();
const Itinerary = require('../models/itinerary');

//_id, photo, user, comment, date
router.post('/add', async (req, res) => {
  let id = req.body._id
  let addComent = {
    photo: req.body.photo,
    comment: req.body.comment ,
    date: Date(req.body.date) ,
    user: req.body.user}

  const itinerary = await Itinerary.findById(id);
  console.log(itinerary);
  if (itinerary){
    const comments = itinerary.comments;
    comments.push(addComent);

    const addedComment = await Itinerary.updateOne({_id:id},{ comments: comments });

    if( addedComment.n != 0 ){
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

