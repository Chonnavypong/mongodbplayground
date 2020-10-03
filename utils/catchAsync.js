module.exports = fn => {
  // (req, res, next) ในบรรทัด return เพื่อส่ง req, res, next parameter ไปให้ fn โดยเมื่อเกิด error จะส่ง next ไปเป็น argument ของ catch -> .catch(next)
  return (req, res, next) => {
    fn(req, res, next).catch(next)
  }
}
