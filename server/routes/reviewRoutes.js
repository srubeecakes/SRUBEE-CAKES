const express=require("express");

const router=
express.Router();

const Review=
require("../models/Review");

router.post(
"/",
async(req,res)=>{

try{

const review=
await Review.create(
req.body
);

res.json(review);

}

catch{

res
.status(500)
.json({
message:"Error"
});

}

}
);

router.get(
"/",
async(req,res)=>{

const reviews=
await Review.find()
.sort({
createdAt:-1
});

res.json(
reviews
);

}
);

module.exports=
router;