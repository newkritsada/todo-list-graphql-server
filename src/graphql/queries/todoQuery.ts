import { PAYLOAD_STATUS } from '../../config/payloadStatus'
import TodoModel from '../../models/TodoModel'

export const getTodoList = async (root, { groupId, topic }) => {
  let todoList
  if (groupId)
    todoList = await TodoModel.find({ groupId, topic: { $regex: '.*' + topic || '' + '.*' } })
      .sort({ order: 1 })
      .populate('groupInfo')
  else
    todoList = await TodoModel.find({ topic: { $regex: '.*' + topic || '' + '.*' } })
      .sort({ order: 1 })
      .populate('groupInfo')
  return { status: PAYLOAD_STATUS.SUCCESS, payload: todoList }
}

export const getTodoById = async (root, { todoId }) => {
  const todo = await TodoModel.findById(todoId).populate('groupInfo')
  return { status: PAYLOAD_STATUS.SUCCESS, payload: todo }
}
