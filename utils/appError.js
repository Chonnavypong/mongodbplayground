class AppError extends Error {
  constructor(message, statusCode) {
    // message ถูก generate ออกมาจาก Error Class ที่ AppError ไป extend มา
    // เนื่องจากเราเรียก super(message) ซึ่งเป็น parent class ซึ่งก็คือ Error ซึ่งมี message proterty มาแล้ว ทำให้เราได้ message property ด้วยซึื่งมีค่าเท่ากับ this.message = message
    super(message) 

    this.statusCode = statusCode
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error'
    this.isOperational = true
    // err.stack เป็นการแจ้งว่า error เกิดขึ้นที่ไหนจาก nodejs ซึ่ง captureStackTrace เป้นการไม่ให้ error ที่เกิดจาก class นี้ไปแสดงผลใน error.stack    
    Error.captureStackTrace(this, this.constructor) // this คือ current object และ this.contructor คือ AppError Class นี้
  }
}

module.exports = AppError