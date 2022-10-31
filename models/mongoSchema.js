const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mandiDataSchema = new Schema({
    state: {
    type: String,
  
  },
  district: {
    type: String,
   
  },
  market: {
    type: String,
    
  },
  commodity:{
    type:String
  },
  variety:{
    type:String
  },
  arrival_date: {
    type :String
  },
  min_price: {
    type :Number
  },
  max_price: {
    type:Number
  },
  modal_price:{
    type: Number
  }
})

const MandiData = mongoose.model('marketDailyPrice', mandiDataSchema)

module.exports = MandiData