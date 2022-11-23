const ObjectId = require('mongodb').ObjectId
const {collections} = require('../../mongodb')

const create = (data, callback) => {
  data._id = new ObjectId()
  collections.example.insertOne(data, callback)
}

const readAll = (callback) => {
  collections.example.find().toArray(callback)
}

const update = (id, data, callback) => {
  if (data._id)
    delete data._id
  collections.example.updateOne({"_id": new ObjectId(id)}, {$set: data}, callback)
}

const _delete = (id, callback) => {
  collections.example.deleteOne({"_id": new ObjectId(id)}, callback)
}

module.exports = {create, readAll, update, _delete}