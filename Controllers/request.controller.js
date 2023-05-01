const { Request } = require('../Models/request.model')
const { User } = require('../Models/user.model')

exports.getRequests = async (_req, res) => {
  try {
    const products = await Request.find({}).populate('Author')
    res.send(products)
  } catch (err) {
    res.send(err)
  }
}

exports.getRequest = async (req, res) => {
  try {
    const products = await Request.findById(req.params.id).populate('Author')
    res.send(products)
  } catch (err) {
    res.send(err)
  }
}

exports.createRequest = async (req, res) => {
  const { Date, Hour, Dentist, Author } = req.body

  try {
    const TimeId = `${Date}/${Hour}`
    const isTaken = await Request.findOne({ TimeId })
    if (isTaken) return res.send({ message: '177013' })
    const product = await new Request({
      Date,
      Hour,
      Dentist,
      Author,
      TimeId,
    }).save()
    const user = await User.findById(Author)
    user.requests.push(product._id)
    console.log(user)
    await user.save()
    res.send(product)
  } catch (err) {
    res.send('err')
  }
}

exports.deleteRequest = async (req, res) => {
  try {
    const result = await Request.findByIdAndDelete(req.params.id)
    res.send(result)
  } catch (error) {
    res.send(error)
  }
}
exports.availableTimes = async (req, res) => {
  const { Date } = req.body
  // console.log(Date);
  const allTimes = []
  const takenTimes = await Request.find({ Date })
  takenTimes.forEach((itm) => {
    allTimes.push(itm.Hour)
  })
  res.send(allTimes)
}
