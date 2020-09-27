const Model = require('../../../models/DATASET/w3resource/w3resourceWorkshop')

// exports.test = (req, res, next) => {
//   try {
//     res.status(200).json({
//       status: 'success',
//       message: 'w3resource route'
//     })
//   } catch (error) {
//     res.status(404).json({
//       status: 'error',
//       code: error.code,
//       message: error.message
//     })
//   }
// }

// exports.createOne = async (req, res, next) => {
//   try {
//     const doc = await Model.create(req.body)
//     res.status(200).json({
//       status: 'success',
//       doc
//     })
//   } catch (error) {
//     res.status(404).json({
//       status: 'error',
//       code: error.code,
//       message: error.message
//     })
//   }
// }

// exports.getAll = async ( rea, res, next ) => {
//   try {
//     const doc = await Model.find()
//     res.status(200).json({
//       status: 'success',
//       length: doc.length,
//       doc
//     })
//   } catch (error) {
//     res.status(404).json({
//       status: 'Error',
//       message: error.message
//     })
//   }
// }

exports.getAll = async (rea, res, next) => {
  try {
    // ข้อ 1. Write a MongoDB query to display all the documents in the collection restaurants.
    // const doc = await Model.find().limit(10)

    /* ข้อ 2.  Write a MongoDB query to display the fields restaurant_id, name, borough and cuisine for all the documents in the collection restaurant.
     */
    // const doc = await Model.aggregate([
    //   {
    //     $project: {
    //       restaurant_id: 1,
    //       name: 1,
    //       borough: 1,
    //       cuisine: 1
    //     }
    //   }
    // ])
    /*
    3.  Write a MongoDB query to display the fields restaurant_id, name, borough and cuisine, but exclude the field _id for all the documents in the collection restaurant.
    */
    // ข้อ 3.1
    // const doc = await Model.aggregate([
    //   {
    //     $project: {
    //       _id: 0,
    //       restaurant_id: 1,
    //       name: 1,
    //       borough: 1,
    //       // zipcode: "$address.zipcode"
    //       'address.zipcode': '$address.zipcode'
    //     }
    //   }
    // ])
    // ข้อ 3.2
    // const doc = await Model.find({}, {
    //   '_id': 0,
    //   'restaurant_id': 1,
    //   'name': 1,
    //   'borough': 1,
    //   'address.zipcode': 1
    // })
    /*
    4. Write a MongoDB query to display the fields restaurant_id, name, borough and zip code, but exclude the field _id for all the documents in the collection restaurant. 
    */
    // ข้อ 4.1
    // const doc = await Model.aggregate([
    //   {
    //     $match: {borough: 'Bronx'}
    //   },
    //   {
    //     $limit: 5
    //   }
    // ])
    // ข้อ 4.2
    // const doc = await Model.find({borough: 'Bronx'}).limit(5)
    //  ข้อ 7.1
    // const doc = await Model.aggregate([
    //   {
    //     $match: {borough: 'Bronx'}
    //   },
    //   {
    //     $skip: 5
    //   },
    //   {
    //     $limit: 5
    //   }
    // ])
    /*
    5. Write a MongoDB query to display all the restaurant which is in the borough Bronx.
    resolve: db.restaurants.find({"borough": "Bronx"});
    */
    /*
    6. Write a MongoDB query to display the first 5 restaurant which is in the borough Bronx.
    db.restaurants.find({"borough": "Bronx"}).limit(5);
   */
    /*
    7.Write a MongoDB query to display the next 5 restaurants after skipping first 5 which are in the borough Bronx. 
    db.restaurants.find({"borough": "Bronx"}).skip(5).limit(5);
  */
    // ข้อ 7.2
    // const doc = await Model.find({borough: 'Bronx'}).skip(5).limit(5)
    // ข้อ 8.1
    // const doc = await Model.aggregate([
    //   // {
    //   //   $unwind: '$grades'
    //   // },
    //   {
    //     $match: {'grades.score': {$gt: 90}}
    //   }
    // ])
    /*
    8. Write a MongoDB query to find the restaurants who achieved a score more than 90
    db.restaurants.find({grades : { $elemMatch:{"score":{$gt : 90}}}});
    */
    // ข้อ 8.2
    // const doc = await Model.find({
    //   grades: {
    //     $elemMatch: {
    //       'score': { $gt: 90}
    //     }
    //   }
    // })
    /*
    9. Write a MongoDB query to find the restaurants that achieved a score, more than 80 but less than 100.
    db.restaurants.find({grades : { $elemMatch:{"score":{$gt : 80 , $lt :100}}}});
    */
    // ข้อ 9.1 // ได้ไม่เหมือนกับ 9.2 คือจะตัดสมาชิกของ array ที่ไม่อยู่ในช่วง 80 - 100 ออก
    // const doc = await Model.aggregate([
    //   // {
    //   //   $unwind: '$grades'
    //   // },
    //   {
    //     $match: {'grades.score': {$lt: 100, $gt: 90}}
    //   }
    // ])
    // ข้อ 9.2
    // const doc = await Model.find({
    //   grades: {
    //     $elemMatch: {
    //       'score': { $gt: 90, $lt: 100}
    //     }
    //   }
    // })
    /*
    10. Write a MongoDB query to find the restaurants which locate in latitude value less than -95.754168.
    db.restaurants.find({"address.coord" : {$lt : -95.754168}});
    */
    // ข้อ 10.1
    // const doc = await Model.find({"address.coord" : {$lt : -95.754168}})
    // ข้อ 10.2
    // const doc = await Model.aggregate([
    //   {
    //     $match: {
    //       'address.coord': {$lt: -95.754168}
    //     }
    //   }
    // ])
    /*
    11. Write a MongoDB query to find the restaurants that do not prepare any cuisine of 'American' and their grade score more than 70 and latitude less than -65.754168. 
    */
    // ข้อ 11.1
    // const doc = await Model.aggregate([
    //   {
    //     $match: {
    //       'cuisine': { $ne: 'American ' },
    //       'grades.score': {$gt: 70},
    //       'address.coord': {$lt: -65.754168}
    //     }
    //   }
    // ])
    // ข้อ 11.2
    // const doc = await Model.find({
    //   $and: [
    //     {'cuisine': {$ne: 'American '}},
    //     {'grades.score': {$gt: 70}},
    //     {'address.coord': { $lt: -65.754168}}
    //   ]
    // })
    /*
    12. Write a MongoDB query to find the restaurants which do not prepare any cuisine of 'American' and achieved a score more than 70 and located in the longitude less than -65.754168.
  
    Note : Do this query without using $and operator. 
    */
    // ข้อ 12.2
    // const doc = await Model.find({
    //   cuisine: { $ne: 'American ' },
    //   'grades.score': { $gt: 70 },
    //   'address.coord': { $lt: -65.754168 }
    // })
    /*
    13. Write a MongoDB query to find the restaurants which do not prepare any cuisine of 'American ' and achieved a grade point 'A' not belongs to the borough Brooklyn. The document must be displayed according to the cuisine in descending order. 
    */
    // ข้อ 13.1
    // const doc = await Model.aggregate([
    //   {
    //     $match: {
    //       cuisine: { $ne: 'American ' },
    //       'grades.grade': { $eq: 'A' },
    //       borough: { $ne: 'Brooklyn' }
    //     }
    //   },
    //   {
    //     $sort: {
    //       cuisine: -1
    //     }
    //   }
    // ])
    // ข้อ 13.2
    // const doc = await Model.find({
    //   cuisine: { $ne: 'American ' },
    //   'grades.grade': { $eq: 'A' },
    //   borough: { $ne: 'Brooklyn' }
    // }).sort({cuisine: -1})
    /*
    14. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which contain 'Wil' as first three letters for its name. 
    */
    // ข้อ 14.1
    // const doc = await Model.aggregate([
    //   {
    //     $match: {
    //       name: { $regex: /^Wil/ }
    //     }
    //   },
    //   {
    //     $project: {
    //       restaurant_id: 1,
    //       name: 1,
    //       borough: 1,
    //       cuisine: 1
    //     }
    //   }
    // ])
    // ข้อ 14.2
    // const doc = await Model.find(
    //   {name: /^Wil/},
    //   {
    //     restaurant_id: 1,
    //     'name': 1,
    //     'borough': 1,
    //     cuisine: 1
    //   }
    // )
    /*
    15. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which contain 'ces' as last three letters for its name. 
    */
    // ข้อ 15.1
    // const doc = await Model.aggregate([
    //   {
    //     $match: {
    //       name: { $regex: /ces$/ }
    //     }
    //   },
    //   {
    //     $project: {
    //       restaurant_id: 1,
    //       name: 1,
    //       borough: 1,
    //       cuisine: 1
    //     }
    //   }
    // ])
    // ข้อ 15.2
    // const doc = await Model.find(
    //   {name: /ces$/},
    //   {
    //     restaurant_id: 1,
    //     'name': 1,
    //     'borough': 1,
    //     cuisine: 1
    //   }
    // )
    /*
    16. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which contain 'Reg' as three letters somewhere in its name.
    */
    // ข้อ 16.1
    // const doc = await Model.aggregate([
    //   {
    //     $match: {
    //       name: { $regex: /.*Reg.*/ }
    //     }
    //   },
    //   {
    //     $project: {
    //       restaurant_id: 1,
    //       name: 1,
    //       borough: 1,
    //       cuisine: 1
    //     }
    //   }
    // ])
    // ข้อ 16.2
    // const doc = await Model.find(
    //   {name:  /.*Reg.*/},
    //   {
    //     restaurant_id: 1,
    //     'name': 1,
    //     'borough': 1,
    //     cuisine: 1
    //   }
    // )
    /*
    17. Write a MongoDB query to find the restaurants which belong to the borough Bronx and prepared either American or Chinese dish.
    */
    // ข้อ 17.1
    // const doc = await Model.aggregate([
    //   {
    //     $match: {
    //       borough: 'Bronx',
    //       $or: [{ cuisine: 'American ' }, { cuisine: 'Chinese' }]
    //     }
    //   },
    //   {
    //     $project: {cuisine: 1, borough: 1}
    //   }
    // ])
    // ข้อ 17.2
    // const doc = await Model.find({
    //   borough: 'Bronx',
    //   $or: [{ cuisine: 'American '}, {cuisine: 'Chinese'}]
    // })
    /*
    18. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which belong to the borough Staten Island or Queens or Bronxor Brooklyn.
    */
    // ข้อ 18.1
    // const doc = await Model.aggregate([
    //   {
    //     $match: {
    //       borough: {
    //         $in: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn']
    //       }
    //     }
    //   },
    //   {
    //     $project: { borough: 1 }
    //   }
    // ])
    // ข้อ 18.2.1 $or ไม่ควรใช้ในกรณีที่เราต้องการหาสมาชิกใน Array จะได้จำนวน doc น้อยกว่า และใช้อย่างไม่ถูกต้อง
    // ในกรณีที่หาสมาชิกจาก Array ที่กำหนดควรใช้ $in จะดีกว่า $in จะ return true หากสมาชิกใน Array ที่ค้นหา ตรงกับสมาชิกใน Array $in
    // const doc = await Model.find(
    //   { โจทย์ ข้อนี้ในใช้ $or **** ผิด ****
    //     $or: [
    //       { borough: 'Staten Island' },
    //       { borough: 'Queens' },
    //       { borough: 'Bronxor' },
    //       { borough: 'Brooklyn' }
    //     ]
    //   },
    //   {
    //     restaurant_id: 1,
    //     name: 1,
    //     borough: 1,
    //     cuisine: 1
    //   }
    // )
    // ข้อ 18.2.2
    // const doc = await Model.find(
    //   { borough: { $in: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn'] } },
    //   {
    //     restaurant_id: 1,
    //     name: 1,
    //     borough: 1,
    //     cuisine: 1
    //   }
    // )
    /*
    19. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which are not belonging to the borough Staten Island or Queens or Bronxor Brooklyn
    */
    // ข้อ 19.1
    // const doc = await Model.aggregate([
    //   {
    //     $match: {
    //         borough: {
    //           $not: {
    //             $in: ["Staten Island","Queens","Bronx","Brooklyn"]
    //           }
    //         }
    //     }
    //   },
    //   {
    //     $project: {
    //       borough: 1
    //     }
    //   }
    // ])
    // ข้อ 19.2
    // const doc = await Model.find(
    //   {
    //     borough: {
    //       $nin: ["Staten Island","Queens","Bronx","Brooklyn"]
    //     }
    //   },
    //   {
    //     borough: 1
    //   }
    // )
    /*
    20. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which achieved a score which is not more than 10.
    */
    // ข้อ 20.1
    // const doc = await Model.aggregate([
    //   // {
    //   //   $unwind: '$grades'
    //   // },
    //   {
    //     $match: {
    //       'grades.score': {
    //         $not: {
    //           $gt: 10
    //         }
    //       }
    //     }
    //   },
    //   {
    //     $project: {
    //   'restaurant_id': 1,
    //   'name': 1,
    //   'borough': 1,
    //   'cuisine': 1
    // }
    //   }
    // ])
    // // ข้อ 20.2
    // const doc = await Model.find(
    //   {
    //     'grades.score': {
    //       $not: {
    //         $gt: 10
    //       }
    //     }
    //   },
    //   {
    //     'restaurant_id': 1,
    //     'name': 1,
    //     'borough': 1,
    //     'cuisine': 1
    //   }
    // )
    /*
    21  Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which prepared dish except 'American' and 'Chinees' or restaurant's name begins with letter 'Wil'. 
    */
    // ข้อ 21.1
    // const doc = await Model.aggregate([
    //   {
    //     $match: {
    //       $or: [
    //         {
    //           cuisine: {
    //             $not: {
    //               $in: ['American ', 'Chinees ']
    //             }
    //           }
    //         },
    //         {
    //           name: {
    //             $regex: /^Wil/
    //           }
    //         }
    //       ]
    //     }
    //   }
    // check $or ว่าผลออกมาถูกต้องหรือไม่ (ตัด name: { $regex: /^Wil/} ออกก่่อน)
    // {
    //   $group: {
    //     _id: '$borough',
    //     cuisineFilter: {
    //       $addToSet : '$cuisine'
    //     }
    //   }
    // }
    // {
    //   $project: {
    //     restaurant_id: 1,
    //     name: 1,
    //     borough: 1,
    //     cuisine: 1
    //   }
    // }
    // ])
    // ข้อ 21.2
    // const doc = await Model.find(
    //   {
    //    $or: [
    //     {name:  /^Wil/
    //     },
    //     {
    //       $and: [
    //         {cuisine: { $ne: 'American '}},
    //         {cuisine: { $ne: 'chinese'}}
    //       ]
    //     }
    //    ]
    //   },
    //   {
    //     restaurant_id: 1,
    //     name: 1,
    //     borough: 1,
    //     cuisine: 1
    //   }
    // )

    /*
    22. Write a MongoDB query to find the restaurant Id, name, and grades for those restaurants which achieved a grade of "A" and scored 11 on an ISODate "2014-08-11T00:00:00Z" among many of survey dates..
    */
    // 22.1
    // const doc = await Model.aggregate([
    //   {
    //     $match: {
    //       $and: [
    //         { 'grades.grade': 'A' },
    //         { 'grades.score': { $eq: 11 } },
    //         { 'grades.date': { $toDate: '$grades.date' } } // ยังทำไม่ได้ ลองแก้ไข
    //       ]
    //     }
    //   }
    // ])
    // 22.2
    // const doc = await Model.find(
    //   {
    //     "grades.date": "2014-08-11T00:00:00Z",
    //     "grades.grade":"A" ,
    //     "grades.score" : 11
    //    },
    //    {"restaurant_id" : 1,"name":1,"grades":1}
    // )

    /*
    23. Write a MongoDB query to find the restaurant Id, name and grades for those restaurants where the 2nd element of grades array contains a grade of "A" and score 9 on an ISODate "2014-08-11T00:00:00Z"

    db.restaurants.find( 
                      { "grades.1.date": ISODate("2014-08-11T00:00:00Z"), 
                        "grades.1.grade":"A" , 
                        "grades.1.score" : 9
                      }, 
                       {"restaurant_id" : 1,"name":1,"grades":1}
                   );
    */
   // 23.1
   const doc = await Model.aggregate([

   ])

   /*
   24. Write a MongoDB query to find the restaurant Id, name, address and geographical location for those restaurants where 2nd element of coord array contains a value which is more than 42 and upto 52.


   */

   /*
   25. Write a MongoDB query to arrange the name of the restaurants in ascending order along with all the columns.
   */

   /*
   26. Write a MongoDB query to arrange the name of the restaurants in descending along with all the columns.
   */

   /*
   27. Write a MongoDB query to arranged the name of the cuisine in ascending order and for that same cuisine borough should be in descending order.
   */

   /*
   28. Write a MongoDB query to know whether all the addresses contains the street or not.
   */

   /*
   29. Write a MongoDB query which will select all documents in the restaurants collection where the coord field value is Double.
   */

   /*
   30. Write a MongoDB query which will select the restaurant Id, name and grades for those restaurants which returns 0 as a remainder after dividing the score by 7. 
   */

   /*
   31. Write a MongoDB query to find the restaurant name, borough, longitude and attitude and cuisine for those restaurants which contains 'mon' as three letters somewhere in its name.
   */

   /*
   32. Write a MongoDB query to find the restaurant name, borough, longitude and latitude and cuisine for those restaurants which contain 'Mad' as first three letters of its name.
   */

    /* ---------- */

    res.status(200).json({
      status: 'success',
      length: doc.length,
      doc
    })
  } catch (error) {
    res.status(404).json({
      status: 'error',
      code: error.code,
      message: error.message
    })
  }
}
