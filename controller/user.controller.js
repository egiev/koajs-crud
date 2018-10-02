const User = require('../model/user.model')

exports.list = async ctx => {
  try {
    const users = await User.find({})
    if (users) {
        ctx.body = users
    } else {
        throw new Error('Unable to fetch list of user')
    }
  } catch (err) {
    ctx.throw(422)
  }
}

exports.create = async ctx => {
    try {
      const user = await new User(ctx.request.body).save();
      
      ctx.body = user
    } catch (err) {
      ctx.throw(422)
    }
}

exports.detail = async ctx => {
    try {
      const id = ctx.params.id
      const user = await User.findById(id)

      ctx.body = user
    } catch (err) {
      ctx.throw(422)
    }
}


exports.update = async ctx => {
    try {
      const id = ctx.params.id
      const data = ctx.request.body
      const user = await User.findByIdAndUpdate({_id: id}, data, {new: true})
      
      ctx.body = user
    } catch (err) {
      ctx.throw(422)
    }
}

exports.delete = async ctx => {
    try 
      {
      const id = ctx.params.id      
      const user = await User.findByIdAndRemove({_id: id})

      ctx.response.status = 200
    } catch (err) {
        ctx.throw(422)
    }
}