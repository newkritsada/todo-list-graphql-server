import mongoose from 'mongoose'

const Schema = mongoose.Schema

export interface Group {
  _id: string
  title: string
}

const groupSchema = new Schema<Group>({
  title: { type: String },
})

groupSchema.virtual('todoList', {
  ref: 'todoes',
  localField: '_id',
  foreignField: 'groupId',
  
})

const GroupModel = mongoose.model('groups', groupSchema, 'groups')

export default GroupModel
